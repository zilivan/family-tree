// backend/src/routes/index.ts
import { Router } from 'express';
import authRoutes from './auth';
import personRoutes from './persons'; // <-- Подключаем

const router = Router();

router.use('/auth', authRoutes);
router.use('/persons', personRoutes); // <-- Добавляем маршруты для персон

export default router;