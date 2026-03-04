// backend/src/db.ts
import { PrismaPg } from "@prisma/adapter-pg"; // <-- Оставить
import { PrismaClient } from "@prisma/client"; // <-- Вернуть к стандартному
import { Pool } from "pg"; // <-- Оставить

// Получаем строку подключения из переменной окружения
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL не указана в переменных окружения");
}
const pool = new Pool({ connectionString });
// Создаем экземпляр адаптера, передав ему строку подключения
const adapter = new PrismaPg(pool);
// Создаем экземпляр PrismaClient, передав ему адаптер
const prisma = new PrismaClient({ adapter });

export default prisma; // Экспортируем готовый экземпляр
