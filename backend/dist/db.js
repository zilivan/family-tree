"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/db.ts
const adapter_pg_1 = require("@prisma/adapter-pg"); // <-- Оставить
const client_1 = require("@prisma/client"); // <-- Вернуть к стандартному
const pg_1 = require("pg"); // <-- Оставить
// Получаем строку подключения из переменной окружения
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL не указана в переменных окружения");
}
const pool = new pg_1.Pool({ connectionString });
// Создаем экземпляр адаптера, передав ему строку подключения
const adapter = new adapter_pg_1.PrismaPg(pool);
// Создаем экземпляр PrismaClient, передав ему адаптер
const prisma = new client_1.PrismaClient({ adapter });
exports.default = prisma; // Экспортируем готовый экземпляр
