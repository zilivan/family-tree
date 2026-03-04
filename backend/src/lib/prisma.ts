
import { PrismaClient } from '@prisma/client';
import { PgAdapter } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';

// Загружаем .env
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL не найден в .env файле!');
}

// Создаем пул соединений
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Создаем адаптер
const adapter = new PgAdapter(pool);

// Инициализируем клиент с адаптером
export const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'development' 
    ? ['query', 'error', 'warn'] 
    : ['error'],
});

// Грейсфул-шутдаун
process.on('beforeExit', async () => {
  await prisma.$disconnect();
  await pool.end();
});