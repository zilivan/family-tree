"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/server.ts
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = __importDefault(require("./db")); // <-- Импортируем prisma
//import { authenticateToken } from './middleware/auth'; // <-- Импортируем middleware
const path = __importStar(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Разрешаем запросы с фронтенда
app.use((0, cors_1.default)({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
}));
app.use(express_1.default.json());
// Получаем путь к корню проекта
const uploadsPath = path.join(process.cwd(), 'uploads');
// Сервим файлы из папки uploads (только для локальной разработки)
//app.use('/uploads', express.static('uploads'));
//app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));
app.use('/uploads', express_1.default.static(uploadsPath));
// Подключаем маршруты
app.use(routes_1.default);
// get  messages
app.get('/messages', async (req, res) => {
    try {
        const messages = await db_1.default.chatMessage.findMany({
            orderBy: { createdAt: 'asc' },
        });
        res.json(messages);
    }
    catch (error) {
        console.error('Ошибка загрузки чата:', error);
        res.status(500).json({ error: 'Не удалось загрузить сообщения' });
    }
});
// post  messages
app.post('/messages', async (req, res) => {
    const { text, userName, isGuest } = req.body;
    if (!text || !userName) {
        return res.status(400).json({ error: 'Требуются text и userName' });
    }
    if (text.trim().length > 1000) {
        return res.status(400).json({ error: 'Сообщение слишком длинное (макс. 1000 символов)' });
    }
    try {
        const message = await db_1.default.chatMessage.create({
            data: {
                text: text.trim(),
                userName: userName.trim().substring(0, 100),
                isGuest: Boolean(isGuest),
            },
        });
        res.status(201).json(message);
    }
    catch (error) {
        console.error('Ошибка отправки сообщения:', error);
        res.status(500).json({ error: 'Не удалось отправить сообщение' });
    }
});
app.get('/', (req, res) => {
    res.json({ message: 'Backend is running!!' });
    console.log('Backend is running');
});
app.get('/anonymous', (req, res) => {
    res.json({ message: 'Backend is anonymous ' });
    console.log('Backend is anonymous');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
/*
async function startServer() {
  try {
    // Подключение к БД
    await prisma.$connect();
    console.log('✅ Подключено к базе данных');

    // Запуск Express
    const server = app.listen(3000, () => {
      console.log('🚀 Сервер запущен на http://localhost:3000');
    });

    // Обработка graceful shutdown
    process.on('SIGTERM', () => {
      server.close(() => console.log('Сервер остановлен'));
    });
  } catch (error) {
    console.error('🔥 Критическая ошибка при запуске:', error);
    process.exit(1);
  }
}

startServer();
*/
