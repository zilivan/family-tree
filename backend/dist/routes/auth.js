"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/routes/auth.ts
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const db_1 = __importDefault(require("../db"));
const email_1 = require("../utils/email"); // <-- Импортируем
const zod_1 = require("zod");
const createMarriages_1 = require("../utils/createMarriages");
const persons_1 = require("./persons");
// --- Валидационные схемы Zod ---
const createPersonSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1),
    lastName: zod_1.z.string().min(1),
    patronymic: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
    birthDate: persons_1.dateSchema,
    deathDate: persons_1.dateSchema,
    gender: zod_1.z.enum(['male', 'female', 'other']).optional(),
    phone: zod_1.z.string().optional().nullable(),
    fatherId: zod_1.z.string().optional().nullable(), // ← новое
    motherId: zod_1.z.string().optional().nullable(), // ← новое
    spouseIds: zod_1.z.array(zod_1.z.string()).optional(),
    parentLastName: zod_1.z.string().nullable().optional(), // ← ваше поле
    //photos: z.array(z.string()).optional(),
});
const router = express_1.default.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';
const generateToken = (userId, isAdmin = false, isSuperAdmin = false, isBlocked = false) => {
    return jsonwebtoken_1.default.sign({ id: userId, isAdmin, isSuperAdmin, isBlocked }, JWT_SECRET, { expiresIn: '7d' });
};
// --- Запрос кода (email) ---
router.post('/request-code', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email обязателен' });
    }
    // Проверим, существует ли пользователь с таким email
    let user = await db_1.default.user.findUnique({
        where: { email },
        include: { person: true },
    });
    if (!user) {
        // Если пользователя нет
        return res.status(400).json({ error: 'Пользователь с таким Email нет в базе' });
    }
    // Генерируем 6-значный код
    const code = crypto_1.default.randomInt(100000, 999999).toString();
    // Сохраняем код в базе
    await db_1.default.user.update({
        where: { id: user.id },
        data: { verificationCode: code, verifiedAt: null }, // Сбрасываем verifiedAt
    });
    try {
        // Отправляем код на email
        await (0, email_1.sendVerificationCode)(email, code);
        res.json({ message: 'Код подтверждения отправлен на email',
            personId: user.person?.id || null, });
    }
    catch (error) {
        res.status(500).json({ error: 'Не удалось отправить код подтверждения' });
    }
});
// --- Проверка кода ---
router.post('/verify-code', async (req, res) => {
    const { email, code } = req.body;
    if (!email || !code) {
        return res.status(400).json({ error: 'Email и код обязательны' });
    }
    const user = await db_1.default.user.findFirst({
        where: {
            email,
            verificationCode: code,
        },
    });
    if (!user) {
        return res.status(400).json({ error: 'Неверный код подтверждения' });
    }
    // Помечаем как верифицированного
    await db_1.default.user.update({
        where: { id: user.id },
        data: { isVerified: true, verifiedAt: new Date() },
    });
    let fullName = null;
    if (user.personId) {
        const person = await db_1.default.person.findUnique({
            where: { id: user.personId, branch: 'base' },
            select: {
                firstName: true,
                lastName: true,
                patronymic: true
            }
        });
        if (person) {
            fullName = {
                firstName: person.firstName,
                lastName: person.lastName,
                patronymic: person.patronymic
            };
        }
    }
    const token = generateToken(user.id, user.isAdmin, user.isSuperAdmin, user.isBlocked);
    res.json({
        token,
        user: { id: user.id, email: user.email, isAdmin: user.isAdmin, personId: user.personId, isSuperAdmin: user.isSuperAdmin, isBlocked: user.isBlocked, fullName }
    });
});
// --- Вход администратора ---
router.post('/admin-pass', (req, res) => {
    const adminCode = req.body;
    if (adminCode.code !== process.env.ADMIN_CODE) {
        return res.status(403).json({ error: 'Неверный админ-код' });
    }
    const token = generateToken('admin', true);
    res.json({ token, user: { id: 'admin', isAdmin: true } });
});
// --- Вход ВРЕМЕННЫЙ ---
router.post('/anonymous', (req, res) => {
    const anonymousCode = req.body;
    if (anonymousCode.code !== "1111") {
        return res.status(403).json({ error: 'Неверный код' });
    }
    const token = generateToken('anonymous');
    res.json({ token, user: { id: 'anonymous', isAdmin: false, isAnonymous: true } });
});
// --- НОВАЯ РЕГИСТРАЦИЯ (ФИО + дата + email) ---
router.post('/register', async (req, res) => {
    const data = createPersonSchema.parse(req.body);
    const { email, spouseIds, ...newPerson } = data;
    const { firstName, lastName, patronymic } = newPerson;
    if (!email || !firstName || !lastName || !patronymic) {
        return res.status(400).json({ error: 'Все поля обязательны' });
    }
    try {
        // Ищем ПОДТВЕРЖДЕННУЮ персону
        const confirmedPerson = await db_1.default.person.findFirst({
            where: {
                firstName,
                lastName,
                patronymic,
                status: 'CONFIRMED',
            },
        });
        if (confirmedPerson) {
            // ✅ Персона найдена — создаём пользователя
            const user = await db_1.default.user.create({
                data: { email, personId: confirmedPerson.id }
            });
            const code = crypto_1.default.randomInt(100000, 999999).toString();
            await db_1.default.user.update({
                where: { id: user.id },
                data: { verificationCode: code }
            });
            await (0, email_1.sendVerificationCode)(email, code);
            return res.json({ message: 'Код отправлен на email', status: 'CONFIRMED' });
        }
        // ❌ Создаём PENDING-запрос
        const pendingPerson = await db_1.default.person.create({
            data: {
                ...newPerson,
                branch: "edit",
                status: 'PENDING',
            },
        });
        if (newPerson.gender && spouseIds && spouseIds.length > 0) {
            (0, createMarriages_1.createMarriages)(pendingPerson.id, spouseIds, newPerson.gender);
        }
        await db_1.default.pendingRegistration.create({
            data: { email, personId: pendingPerson.id }
        });
        return res.json({
            message: 'Запрос отправлен администратору',
            status: 'PENDING'
        });
    }
    catch (error) {
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
    const user = await db_1.default.user.findFirst({
        where: { email, verificationCode: code },
    });
    if (!user) {
        return res.status(400).json({ error: 'Неверный код подтверждения' });
    }
    await db_1.default.user.update({
        where: { id: user.id },
        data: { isVerified: true, verificationCode: null, verifiedAt: new Date() },
    });
    const token = generateToken(user.id, user.isAdmin);
    res.json({
        token,
        user: { id: user.id, email: user.email, isAdmin: user.isAdmin }
    });
});
exports.default = router;
