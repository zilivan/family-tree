import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { prisma } from "./lib/prisma.js";
//import { authenticateToken } from './middleware/auth'; // <-- Импортируем middleware

import * as path from "path";

const app = express();
const PORT = process.env.PORT || 3000;
// Разрешаем запросы с фронтенда
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  }),
);

app.use(express.json());

// Получаем путь к корню проекта
const uploadsPath = path.join(process.cwd(), "uploads");

// Сервим файлы из папки uploads (только для локальной разработки)
//app.use('/uploads', express.static('uploads'));
//app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));
app.use("/uploads", express.static(uploadsPath));

// Подключаем маршруты
app.use(routes);

// get  messages
app.get("/messages", async (req, res) => {
  try {
    const messages = await prisma.chatMessage.findMany({
      orderBy: { createdAt: "asc" },
    });
    res.json(messages);
  } catch (error) {
    console.error("Ошибка загрузки чата:", error);
    res.status(500).json({ error: "Не удалось загрузить сообщения" });
  }
});

// post  messages
app.post("/messages", async (req, res) => {
  const { text, userName, isGuest } = req.body;

  if (!text || !userName) {
    return res.status(400).json({ error: "Требуются text и userName" });
  }

  if (text.trim().length > 1000) {
    return res
      .status(400)
      .json({ error: "Сообщение слишком длинное (макс. 1000 символов)" });
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
    console.error("Ошибка отправки сообщения:", error);
    res.status(500).json({ error: "Не удалось отправить сообщение" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/*
async function startServer() {
  try {
    // Подключение к БД
    await prisma.$connect();
    console.log('✅ Подключено к базе данных');

    // Запуск Express
    const server = app.listen(3000, () => {
      console.log('🚀 Сервер запущен на http://localhost:3000');
    });

    // Обработка graceful shutdown
    process.on('SIGTERM', () => {
      server.close(() => console.log('Сервер остановлен'));
    });
  } catch (error) {
    console.error('🔥 Критическая ошибка при запуске:', error);
    process.exit(1);
  }
}

startServer();
*/
