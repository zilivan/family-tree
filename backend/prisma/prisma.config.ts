
// backend/prisma.config.ts
import { defineConfig } from 'prisma/config';
import { PgAdapter } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Для ESM-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Загружаем .env
dotenv.config({
  path: resolve(__dirname, '.env')
});

// Проверяем DATABASE_URL
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL не найден в .env файле!');
}

// Создаем пул соединений
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export default defineConfig({
  datasource: {
    adapter: new PgAdapter(pool),
  },
});