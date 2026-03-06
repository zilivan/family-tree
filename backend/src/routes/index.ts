// backend/src/routes/index.ts
import { Router } from "express";
import authRoutes from "./auth.js";
import personRoutes from "./persons.js";
import adminRoutes from "./admin.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/api/persons", personRoutes);
router.use("/api/admin", adminRoutes);

export default router;
