"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToSupabase = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const supabase_1 = require("../storage/supabase");
// 🔹 Используем memoryStorage — файл будет в буфере, а не на диске
const storage = multer_1.default.memoryStorage();
// Валидация типа файла
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    }
    else {
        cb(new Error('Только изображения разрешены'));
    }
};
exports.upload = (0, multer_1.default)({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
});
/**
 * 🔹 Middleware для загрузки фото в Supabase
 * Добавляет photoUrl в req.body после успешной загрузки
 */
const uploadToSupabase = async (req, res, next) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ error: 'Файл не найден' });
        }
        // Загружаем в Supabase
        const photoUrl = await (0, supabase_1.uploadPhotoToSupabase)(file.buffer, file.originalname);
        // Добавляем URL в запрос для использования в роуте
        req.photoUrl = photoUrl;
        next();
    }
    catch (error) {
        console.error('Ошибка загрузки в Supabase:', error);
        res.status(500).json({
            error: error.message || 'Не удалось загрузить фото'
        });
    }
};
exports.uploadToSupabase = uploadToSupabase;
