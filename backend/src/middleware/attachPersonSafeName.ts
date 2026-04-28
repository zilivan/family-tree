// middleware/attachPersonSafeName.ts
import { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma.js"; // ваш путь к prisma client

/**
 * Внутренняя функция: формирует и санитизирует ФИО для имени файла
 * Не экспортируется, чтобы не искушать использовать её в других местах
 */
const formatForFilename = (
  firstName?: string | null,
  lastName?: string | null,
  patronymic?: string | null,
): string => {
  const parts = [lastName, firstName, patronymic].filter(
    (part): part is string => Boolean(part?.trim()),
  );

  const fullName = parts.join(" ");

  return fullName
    .toLowerCase()
    .replace(/[^a-zа-яё0-9._-]/gi, "_")
    .replace(/_{2,}/g, "_") // дубликаты _ → один
    .replace(/^_+|_+$/g, "") // убираем _ по краям
    .substring(0, 50); // лимит длины
};

export const attachPersonSafeName = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID персоны не указан" });
    }

    // Получаем только нужные поля
    const person = await prisma.person.findUnique({
      where: { id, branch: "base" },
      select: {
        firstName: true,
        lastName: true,
        patronymic: true,
      },
    });

    if (!person) {
      return res.status(404).json({ error: "Персона не найдена" });
    }

    // Формируем безопасное имя для файла
    const safeName = formatForFilename(
      person.firstName,
      person.lastName,
      person.patronymic,
    );

    // Сохраняем в req для использования в multer
    (req as any).personSafeName = safeName || "unknown";

    next();
  } catch {
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
};
