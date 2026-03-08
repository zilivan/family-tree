// backend/src/server.ts
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { prisma } from "./lib/prisma.js";
// Импорты роутов
import router from "./routes/index.js";

// ... другие роуты

// Загрузка .env
dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);
const HOST = process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1";

// 🔹 1. ГЛОБАЛЬНЫЙ ЛОГГЕР (самый первый!)
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  console.log(
    `\n📥 [${new Date().toISOString()}] ${req.method} ${req.originalUrl}`,
  );
  console.log(`📥 Origin: "${req.headers.origin || "NOT SET"}"`);
  console.log(`📥 Headers: ${JSON.stringify(req.headers, null, 2)}`);

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`📤 Status: ${res.statusCode} | Duration: ${duration}ms`);
    console.log(
      `📤 CORS Header: "${res.getHeader("access-control-allow-origin") || "NOT SET"}"`,
    );
  });

  next();
});

// 🔹 2. CORS - ВТОРЫМ, но ДО всех парсеров и роутов!
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:4173",
  "https://family-tree-frontend.onrender.com",
  "https://family-tree-frontend-e4h2.onrender.com",
  "https://family-tree-api.onrender.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Разрешить запросы без origin (curl, postman, мобильные)
      if (!origin) {
        console.log("✅ CORS: запрос без origin (разрешено)");
        return callback(null, true);
      }

      if (ALLOWED_ORIGINS.includes(origin)) {
        console.log(`✅ CORS разрешён для: ${origin}`);
        callback(null, true);
      } else {
        console.warn(`❌ CORS ЗАБЛОКИРОВАН для: ${origin}`);
        callback(new Error(`Not allowed by CORS: ${origin}`));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
    ],
    exposedHeaders: ["Content-Range", "X-Content-Range"],
    maxAge: 86400,
  }),
);

// 🔹 3. ЯВНЫЙ ОБРАБОТЧИК OPTIONS (для preflight)
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    console.log("🔄 Preflight OPTIONS request detected");
    // CORS middleware уже добавил заголовки, просто отправляем 204
    return res.status(204).send();
  }
  next();
});

// 🔹 4. ПАРСЕРЫ ТЕЛА ЗАПРОСА (только для не-OPTIONS запросов)
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    return next(); // Пропускаем парсинг для preflight
  }
  express.json()(req, res, next);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  express.urlencoded({ extended: true })(req, res, next);
});

// 🔹 5. HEALTH CHECK
app.get("/", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    message: "Family Tree API is running",
    timestamp: new Date().toISOString(),
    endpoints: {
      health: "/api/health",
      auth: "/auth",
      persons: "/api/persons",
    },
  });
});

app.get("/api/health", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    service: "family-tree-api",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// 🔹 6. РОУТЫ (после CORS и парсеров!)
app.use(router);

// ... другие роуты

// 🔹 7. ОБРАБОТКА 404
app.use((req: Request, res: Response) => {
  console.log(`⚠️ 404: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: "Endpoint not found", path: req.originalUrl });
});

// 🔹 8. ГЛОБАЛЬНЫЙ ОБРАБОТЧИК ОШИБОК
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("❌ Global error:", err);

  // Если ошибка уже отправлена, не делаем ничего
  if (res.headersSent) {
    return next(err);
  }

  // CORS-ошибки
  if (err.message?.includes("CORS")) {
    return res
      .status(403)
      .json({ error: "CORS policy blocked", details: err.message });
  }

  // Стандартная ошибка 500
  res.status(500).json({
    error: "Internal server error",
    message: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// 🔹 9. ЗАПУСК СЕРВЕРА
const server = app.listen(PORT, HOST, () => {
  console.log(`\n🚀 Family Tree API started`);
  console.log(`📍 Listening on ${HOST}:${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(
    `🔗 Health: http://${HOST === "0.0.0.0" ? "localhost" : HOST}:${PORT}/api/health\n`,
  );
});

// Обработка ошибок привязки порта
server.on("error", (err: any) => {
  if (err.code === "EADDRINUSE") {
    console.error(`❌ Port ${PORT} is already in use`);
  } else {
    console.error("❌ Server error:", err.message);
  }
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🔄 SIGTERM received, shutting down gracefully...");
  server.close(() => {
    console.log("✅ Server closed");
    process.exit(0);
  });
});

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

export default app;
