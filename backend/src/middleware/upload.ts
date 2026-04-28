import path from "path";
import { v4 as uuidv4 } from "uuid";
import multer, { StorageEngine } from "multer";
import { mkdirSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Request } from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadDir = path.join(__dirname, "../../uploads/photos");

try {
  if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir, { recursive: true });
    console.log(`✅ Директория для загрузки создана: ${uploadDir}`);
  } else {
    console.log(`📁 Директория уже существует: ${uploadDir}`);
  }
} catch (err) {
  console.error("❌ Ошибка создания директории для загрузки:", err);
  throw new Error(
    `Не удалось создать директорию ${uploadDir}: ${err instanceof Error ? err.message : "Неизвестная ошибка"}`,
  );
}

const storage: StorageEngine = multer.diskStorage({
  destination: (_req: Request, _file: Express.Multer.File, cb) => {
    cb(null, uploadDir);
  },
  filename: (_req: Request, file: Express.Multer.File, cb) => {
    // ✅ ИСПРАВЛЕНИЕ: удаляем расширение из оригинального имени
    const ext = path.extname(file.originalname).toLowerCase() || ".jpg";
    const nameWithoutExt = path.basename(file.originalname, ext);

    // Берём подготовленное имя из мидлвара
    const personName = (_req as any).personSafeName || "unknown";

    // Формируем текущую дату в формате YYYY_MM_DD
    const now = new Date();
    const dateStr = `${now.getFullYear()}_${String(now.getMonth() + 1).padStart(2, "0")}_${String(now.getDate()).padStart(2, "0")}`;

    // Короткий UUID для уникальности (первая часть)
    const uniqueId = uuidv4().split("-")[0];

    // Формируем имя: UUID + очищенное имя + расширение
    const filename = `${personName}_${dateStr}_${uniqueId}${ext}`;
    cb(null, filename);
  },
});

const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: (error: Error | null, acceptFile?: boolean) => void,
): void => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/jpg",
    "image/svg+xml",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`Недопустимый тип файла: ${file.mimetype}`), false);
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 5,
    fieldNameSize: 100,
  },
});
