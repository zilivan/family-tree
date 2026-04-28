// middleware/deletePhotoPhysicalFile.ts
import { Request, Response, NextFunction } from "express";
import { unlinkSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { prisma } from "../lib/prisma.js"; // ваш путь к prisma client

// Вычисляем __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uploadDir = path.join(__dirname, "../../uploads/photos");

/**
 * Мидлвар: физически удаляет файл фото с диска
 * Требует: req.params.personId и req.params.photoId
 * После успешного выполнения: добавляет req.deletedPhotoMeta для логирования
 */
export const deletePhoto = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { personId, photoId } = req.params;

    // 1. Находим фото, чтобы получить путь к файлу
    const photo = await prisma.photo.findUnique({
      where: {
        id: photoId,
        personId: personId,
      },
      select: {
        id: true,
        url: true, // относительный путь, например: "abc123_ivanov.jpg"
      },
    });

    if (!photo) {
      return res.status(404).json({ error: "Фото не найдено" });
    }

    // 2. Формируем полный путь и удаляем файл
    const filePath = path.join(uploadDir, photo.url);

    if (existsSync(filePath)) {
      unlinkSync(filePath);
      console.log(`🗑️ Файл удалён: ${filePath}`);
    } else {
      console.warn(`⚠️ Файл не найден на диске (уже удалён?): ${filePath}`);
    }

    // 3. Сохраняем метаданные для следующего обработчика (опционально)
    (req as any).deletedPhotoMeta = {
      photoId: photo.id,
      filename: photo.url,
      filePath,
    };

    next();
  } catch (error: unknown) {
    console.error("💥 Ошибка в deletePhoto:", error);
    res.status(500).json({ error: "Не удалось удалить файл фото" });
  }
};
