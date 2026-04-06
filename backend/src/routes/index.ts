// backend/src/routes/index.ts
import { Router } from "express";
import authRoutes from "./auth.js";
import personRoutes from "./persons.js";
import adminRoutes from "./admin.js";
import chatRoutes from "./chat.js";

const router = Router();

router.use("/api/chat", chatRoutes);
router.use("/api/auth", authRoutes);
router.use("/api/persons", personRoutes);
router.use("/api/admin", adminRoutes);

export default router;
