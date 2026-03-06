import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL не найден в .env файле!");
}

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({
  adapter,
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

// ✅ Грейсфул-шутдаун: используем сигналы завершения вместо beforeExit
const shutdown = async (signal: string) => {
  console.log(`\nПолучен сигнал ${signal}, завершаем работу...`);
  try {
    await prisma.$disconnect();
    await pool.end();
    console.log("Соединения закрыты");
    process.exit(0);
  } catch (err) {
    console.error("Ошибка при завершении:", err);
    process.exit(1);
  }
};

// Обработчики для стандартных сигналов завершения
process.on("SIGINT", () => shutdown("SIGINT")); // Ctrl+C
process.on("SIGTERM", () => shutdown("SIGTERM")); // kill / Docker

// Опционально: обработка unhandled rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
