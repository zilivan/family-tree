// backend/src/routes/auth.ts
import express from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import prisma from '../db';
import { authenticateAdmin } from '../middleware/auth';
import { sendVerificationCode } from '../utils/email'; // <-- Импортируем
import { email, z ,ZodError} from 'zod';

// --- Валидационные схемы Zod ---
const createPersonSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  patronymic: z.string().optional(),
  email:z.string().optional(),
birthDate: z
    .string()
    .nullable()
    .optional()
    .transform((val) => (val === "" ? null : val))
    .pipe(z.string().datetime().nullable().optional()),

  deathDate: z
    .string()
    .nullable()
    .optional()
    .transform((val) => (val === "" ? null : val))
    .pipe(z.string().datetime().nullable().optional()),
  gender: z.enum(['male', 'female', 'other']).optional(),
  phone: z.string().optional().nullable(),
  fatherId: z.string().optional().nullable(), // ← новое
  motherId: z.string().optional().nullable(), // ← новое
 
});



const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';

const generateToken = (userId: string, isAdmin = false) => {
  return jwt.sign({ id: userId, isAdmin }, JWT_SECRET, { expiresIn: '7d' });
};



// --- Запрос кода (email) ---
router.post('/request-code', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email обязателен' });
  }

  // Проверим, существует ли пользователь с таким email
  let user = await prisma.user.findUnique({
    where: { email },
    include: { person: true },
  });

  if (!user) {
    // Если пользователя нет
   return res.status(400).json({ error: 'Пользователь с таким Email нет в базе' });
  }

  // Генерируем 6-значный код
  const code = crypto.randomInt(100000, 999999).toString();

  // Сохраняем код в базе
  await prisma.user.update({
    where: { id: user.id },
    data: { verificationCode: code, verifiedAt: null }, // Сбрасываем verifiedAt
  });

  try {
    // Отправляем код на email
    await sendVerificationCode(email, code);
    res.json({ message: 'Код подтверждения отправлен на email' ,
      personId: user.person?.id || null,});
  } catch (error) {
    console.error('Ошибка при отправке email:', error);
    // Важно: не уведомлять пользователя о деталях ошибки, чтобы не раскрывать информацию
    res.status(500).json({ error: 'Не удалось отправить код подтверждения' });
  }
});

// --- Проверка кода ---
router.post('/verify-code', async (req, res) => {
  const { email, code } = req.body;

  if (!email || !code) {
    return res.status(400).json({ error: 'Email и код обязательны' });
  }

  const user = await prisma.user.findFirst({
    where: {
      email,
      verificationCode: code,
     
    },
  });

  if (!user) {
    return res.status(400).json({ error: 'Неверный код подтверждения' });
  }

  // Помечаем как верифицированного
  await prisma.user.update({
    where: { id: user.id },
    data: { isVerified: true, verifiedAt: new Date() },
  });

  const token = generateToken(user.id, user.isAdmin);
  res.json({
    token,
    user: { id: user.id, email: user.email, isAdmin: user.isAdmin, personId:user.personId }
  });
});

// --- Выдача токена админом (для пользователей без email) ---
router.post('/admin-generate-token', authenticateAdmin, async (req, res) => {
  const { email, phone } = req.body;

  if (!email && !phone) {
    return res.status(400).json({ error: 'Email или телефон обязательны' });
  }

  // Генерируем одноразовый токен
  const oneTimeToken = crypto.randomBytes(32).toString('hex');

  await prisma.user.upsert({
    where: { email: email || phone! },
    update: { oneTimeToken },
    create: { email: email || null, phone: phone || null, oneTimeToken },
  });

  res.json({ oneTimeToken });
});

// --- Использование одноразового токена ---
router.post('/use-token', async (req, res) => {
  const { token: oneTimeToken } = req.body;

  const user = await prisma.user.findFirst({
    where: { oneTimeToken },
  });

  if (!user) {
    return res.status(400).json({ error: 'Неверный одноразовый токен' });
  }

  // Удаляем токен (одноразовый)
  await prisma.user.update({
    where: { id: user.id },
     data:{ oneTimeToken: null, isVerified: true },
  });

  const jwtToken = generateToken(user.id, user.isAdmin);
  res.json({
    token: jwtToken,
    user: { id: user.id, email: user.email || undefined, phone: user.phone || undefined, isAdmin: user.isAdmin }
  });
});

// --- Вход администратора ---
router.post('/admin-pass', (req, res) => {
  const  adminCode  = req.body;

  if (adminCode.code !== process.env.ADMIN_CODE) {
    
    return res.status(403).json({ error: 'Неверный админ-код' });
  }

  const token = generateToken('admin', true);
  res.json({ token, user: { id: 'admin', isAdmin: true } });
});

// --- Вход ВРЕМЕННЫЙ ---
router.post('/anonymous', (req, res) => {
  const  anonymousCode = req.body;
  

  if (anonymousCode.code !== "1111") {
    return res.status(403).json({ error: 'Неверный код' });
  }

  const token = generateToken('anonymous');
  res.json({ token, user: { id: 'anonymous', isAdmin: false } });
 
});

// --- НОВАЯ РЕГИСТРАЦИЯ (ФИО + дата + email) ---
router.post('/register', async (req, res) => {


  const data = createPersonSchema.parse(req.body);
  const { email, ...newPerson } = data;


  const { firstName, lastName, patronymic} = newPerson;
  

  if (!email || !firstName || !lastName || !patronymic) {
    return res.status(400).json({ error: 'Все поля обязательны' });
  }


  try {
    // Ищем ПОДТВЕРЖДЕННУЮ персону
    const confirmedPerson = await prisma.person.findFirst({
      where: {
        firstName,
        lastName,
        patronymic,
        status: 'CONFIRMED',
      },
    });

    if (confirmedPerson) {
      // ✅ Персона найдена — создаём пользователя
      const user = await prisma.user.create({
         data :{ email, personId: confirmedPerson.id } });

      const code = crypto.randomInt(100000, 999999).toString();
      await prisma.user.update({
        where: { id: user.id },
        data : { verificationCode: code } });

      await sendVerificationCode(email, code);
      return res.json({ message: 'Код отправлен на email', status: 'CONFIRMED' });
    }

    // ❌ Создаём PENDING-запрос
    
    const pendingPerson = await prisma.person.create({
      data : {
          ...newPerson,
        branch:"edit",
        status: 'PENDING',
      },
    });

    await prisma.pendingRegistration.create({
       data :{ email, personId: pendingPerson.id } });

     

    return res.json({ 
      message: 'Запрос отправлен администратору', 
      status: 'PENDING' 
    });
  } catch (error: any) {
    console.error('Ошибка регистрации:', error);
    res.status(500).json({ error: error.message || 'Неизвестная ошибка' });
  }
});




// --- Вход по коду ---
router.post('/verify-code', async (req, res) => {
  const { email, code } = req.body;

  if (!email || !code) {
    return res.status(400).json({ error: 'Email и код обязательны' });
  }

  const user = await prisma.user.findFirst({
    where: { email, verificationCode: code },
  });

  if (!user) {
    return res.status(400).json({ error: 'Неверный код подтверждения' });
  }

  await prisma.user.update({
    where: { id: user.id },
     data :{ isVerified: true, verificationCode: null, verifiedAt: new Date() },
  });

  const token = generateToken(user.id, user.isAdmin);
  res.json({
    token,
    user: { id: user.id, email: user.email, isAdmin: user.isAdmin }
  });
});





export default router;
