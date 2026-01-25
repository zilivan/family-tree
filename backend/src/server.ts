// backend/src/server.ts
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import routes from './routes';
import multer from 'multer';
import prisma from './db'; // <-- Импортируем prisma
import { authenticateToken } from './middleware/auth'; // <-- Импортируем middleware

const app = express();
const PORT = process.env.PORT || 3000;

// Настройка multer для загрузки файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
  }
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

// Подключаем маршруты
app.use( routes);

// Маршрут для загрузки фото (временно, возвращает URL)
app.post('/upload-photo', authenticateToken, upload.single('photo'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Файл не загружен' });
  }

  // req.file.path — путь к файлу на сервере
  const photoUrl = `/uploads/${req.file.filename}`; // <-- Временный URL для локальной разработки

  // В продакшене: загрузить файл в облако (S3, Cloudinary, Resend) и получить URL
  // const photoUrl = await uploadToCloud(req.file.path);

  res.json({ message: 'Фото загружено', photoUrl });
});

// Маршрут для привязки фото к персоне (после получения URL)
app.post('/persons/:id/link-photo', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { photoUrl } = req.body;

  if (!photoUrl) {
    return res.status(400).json({ error: 'URL фото обязателен' });
  }

  try {
    // Найдём персону
    const person = await prisma.person.findUnique({
      where: { id },
    });

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Создадим запись в таблице Photo
    const newPhoto = await prisma.photo.create({
      data: { // <-- Вот этот объект - и есть аргумент для create
        url: photoUrl,
        personId: id,
      },
    });

    res.status(201).json(newPhoto);
  } catch (error) {
    console.error('Ошибка при привязке фото:', error);
    res.status(500).json({ error: 'Failed to link photo to person' });
  }
});
// Удаляем фото
// DELETE /api/photos/:id
app.delete('/photos/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  
  try {
    // Найти фото
    const photo = await prisma.photo.findUnique({ where: { id } });
    if (!photo) return res.status(404).json({ error: 'Photo not found' });

    // Найти персону
    const person = await prisma.person.findUnique({ where: { id: photo.personId } });
    if (!person) return res.status(404).json({ error: 'Person not found' });

    // Проверка: только владелец или админ
   /* if (person.userId !== req.userId && !req.isAdmin) {
      return res.status(403).json({ error: 'Access denied' });
    }*/

    await prisma.photo.delete({ where: { id } });
    res.status(204).end();
  } catch (error) {
    console.error('Ошибка удаления фото:', error);
    res.status(500).json({ error: 'Failed to delete photo' });
  }
});


// Сервим файлы из папки uploads (только для локальной разработки)
app.use('/uploads', express.static('uploads'));

// Разрешаем запросы с фронтенда
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
}));
app.use(express.json());




// get  messages
app.get('/messages', async (req, res) => {
  try {
    const messages = await prisma.chatMessage.findMany({
      orderBy: { createdAt: 'asc' },
    });
    res.json(messages);
  } catch (error) {
    console.error('Ошибка загрузки чата:', error);
    res.status(500).json({ error: 'Не удалось загрузить сообщения' });
  }
});

// post  messages
app.post('/messages', async (req, res) => {
  const { text, userName, isGuest } = req.body;

  if (!text || !userName) {
    return res.status(400).json({ error: 'Требуются text и userName' });
  }

  if (text.trim().length > 1000) {
    return res.status(400).json({ error: 'Сообщение слишком длинное (макс. 1000 символов)' });
  }

  try {
    const message = await prisma.chatMessage.create({
      data: {
        text: text.trim(),
        userName: userName.trim().substring(0, 100),
        isGuest: Boolean(isGuest),
      },
    });
    res.status(201).json(message);
  } catch (error) {
    console.error('Ошибка отправки сообщения:', error);
    res.status(500).json({ error: 'Не удалось отправить сообщение' });
  }
});





app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!!' });
  console.log('Backend is running')
 
});
app.get('/anonymous', (req, res) => {
  res.json({ message: 'Backend is anonymous ' });
 console.log('Backend is anonymous')
 
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

});