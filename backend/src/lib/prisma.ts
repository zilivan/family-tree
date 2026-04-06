import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL не найден в .env файле!");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({
  adapter, // ← Адаптер передаётся напрямую
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

// Грейсфул-шатдаун (только в продакшене)
if (process.env.NODE_ENV === "production") {
  const shutdown = async (signal: string) => {
    console.log(`\nПолучен сигнал ${signal}, завершаем работу...`);
    try {
      await prisma.$disconnect();
      await pool.end(); // Закрываем пул вручную
      console.log("✓ Соединения закрыты");
      process.exit(0);
    } catch (err) {
      console.error("✗ Ошибка:", err);
      process.exit(1);
    }
  };

  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));
}
