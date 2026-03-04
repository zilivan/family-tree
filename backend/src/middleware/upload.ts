import multer from "multer";
import { Request, Response } from "express";
import { uploadPhotoToSupabase } from "../storage/supabase";

// 🔹 Используем memoryStorage — файл будет в буфере, а не на диске
const storage = multer.memoryStorage();

// Валидация типа файла
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Только изображения разрешены"));
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

/**
 * 🔹 Middleware для загрузки фото в Supabase
 * Добавляет photoUrl в req.body после успешной загрузки
 */
export const uploadToSupabase = async (
  req: Request,
  res: Response,
  next: Function,
) => {
  try {
    const file = (req as Express.Request).file;

    if (!file) {
      return res.status(400).json({ error: "Файл не найден" });
    }

    // Загружаем в Supabase
    const photoUrl = await uploadPhotoToSupabase(
      file.buffer,
      file.originalname,
    );

    // Добавляем URL в запрос для использования в роуте
    (req as any).photoUrl = photoUrl;

    next();
  } catch (error: any) {
    console.error("Ошибка загрузки в Supabase:", error);
    res.status(500).json({
      error: error.message || "Не удалось загрузить фото",
    });
  }
};
