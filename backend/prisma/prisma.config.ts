
// backend/prisma.config.ts
import 'dotenv/config'; // <-- Обязательно для загрузки .env
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: 'prisma/schema.prisma', // <-- Путь к вашему файлу схемы
  migrations: {
    path: 'prisma/migrations', // <-- Папка для миграций
  },
  datasource: {
    url: env("DATABASE_URL"), // <-- Тут указывается URL из .env
  },
});