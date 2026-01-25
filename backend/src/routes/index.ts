// backend/src/routes/index.ts
import { Router } from 'express';
import  authRoutes from './auth';
import personRoutes from './persons'
import adminRoutes from './admin';


const router = Router();

router.use('/auth', authRoutes);
router.use('/api/persons', personRoutes)
router.use('/api/admin', adminRoutes);

export default router;