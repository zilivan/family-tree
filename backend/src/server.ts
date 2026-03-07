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
const HOST = process.env.NODE_ENV === "development" ? "localhost" : "0.0.0.0";
const ALLOWED_ORIGINS = [
  "http://localhost:5173", // Vite dev
  "http://localhost:4173", // Vite preview
  "https://family-tree-frontend.onrender.com",
  "https://family-tree-frontend-e4h2.onrender.com", // ← ВАШ ТЕКУЩИЙ ДОМЕН
  "https://family-tree-api.onrender.com",
];

// Разрешаем запросы с фронтенда
app.use(
  cors({
    origin: function (origin, callback) {
      // Разрешить запросы без origin (мобильные приложения, curl, Postman)
      if (!origin) {
        console.log("✅ CORS: запрос без origin (curl/postman)");
        return callback(null, true);
      }

      if (ALLOWED_ORIGINS.includes(origin)) {
        console.log(`✅ CORS разрешён для: ${origin}`);
        callback(null, true);
      } else {
        console.warn(`❌ CORS заблокирован для: ${origin}`);
        callback(new Error(`Not allowed by CORS: ${origin}`));
      }
    },
    credentials: true, // Разрешить cookies и заголовок Authorization
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    exposedHeaders: ["Content-Range", "X-Content-Range"],
    maxAge: 86400, // Кэшировать preflight 24 часа
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
  } catch {
    //console.error("Ошибка загрузки чата:", error);
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
  } catch {
    //console.error("Ошибка отправки сообщения:", error);
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
