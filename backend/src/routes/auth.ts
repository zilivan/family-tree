// backend/src/routes/auth.ts
import express from "express";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { prisma } from "../lib/prisma.js";
import { sendVerificationCode } from "../utils/email.js";
import { assignSuperAdminRole } from "../middleware/auth.js";
import { z } from "zod";
import { createMarriages } from "../utils/createMarriages.js";
import { dateSchema } from "./persons.js";
import { tempCodeStore } from "../utils/tempCodeStore.js";
import { formatTimeLeft } from "../utils/formatTimeLeft.js";
// --- Валидационные схемы Zod ---
const createPersonSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  patronymic: z.string().optional(),
  email: z
    .string()
    .email("Некорректный формат email")
    .optional()
    .or(z.literal("")),
  birthDate: dateSchema,
  deathDate: dateSchema,
  gender: z.enum(["male", "female", "other"]).optional(),
  phone: z
    .string()
    .min(5, "Слишком короткий номер")
    .regex(/^\+?[\d\s\-()]+$/, "Неверный формат телефона")
    .optional()
    .nullable()
    .or(z.literal("")),
  fatherId: z.string().optional().nullable(), // ← новое
  motherId: z.string().optional().nullable(), // ← новое
  spouseIds: z.array(z.string()).optional(),
  parentLastName: z.string().nullable().optional(), // ← ваше поле
  //photos: z.array(z.string()).optional(),
});

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key";

const generateToken = (
  userId: string,
  isAdmin = false,
  isSuperAdmin = false,
  isBlocked = false,
) => {
  return jwt.sign(
    { id: userId, isAdmin, isSuperAdmin, isBlocked },
    JWT_SECRET,
    { expiresIn: "7d" },
  );
};

// --- Запрос кода (email) ---
router.post("/request-code", async (req, res) => {
  const { email } = req.body;
  const lowCaseEmail = email ? email.toLowerCase().trim() : "";
  if (!email) {
    return res.status(400).json({ error: "Email обязателен" });
  }

  // Проверим, существует ли пользователь с таким email
  let user = await prisma.user.findUnique({
    where: { email: lowCaseEmail },
    include: { person: true },
  });

  if (!user) {
    // Если пользователя нет
    return res
      .status(400)
      .json({ error: "Пользователь с таким Email нет в базе" });
  }

  // Генерируем 6-значный код
  const code = crypto.randomInt(100000, 999999).toString();

  // Сохраняем код в базе
  await prisma.user.update({
    where: { id: user.id },
    data: { verificationCode: code, verifiedAt: null }, // Сбрасываем verifiedAt
  });

  try {
    // Отправляем код на email
    await sendVerificationCode(email, code);
    res.json({
      message: "Код подтверждения отправлен на email",
      personId: user.person?.id || null,
    });
  } catch {
    res.status(500).json({ error: "Не удалось отправить код подтверждения" });
  }
});

// --- Проверка кода ---

router.post("/verify-code", async (req, res) => {
  const { code } = req.body;
  const email = req.body.email ? req.body.email.toLowerCase().trim() : "";
  if (!email || !code) {
    return res.status(400).json({ error: "Email и код обязательны" });
  }

  const user = await prisma.user.findFirst({
    where: {
      email,
      verificationCode: code,
    },
  });

  if (!user) {
    return res.status(400).json({ error: "Неверный код подтверждения" });
  }

  // Помечаем как верифицированного
  await prisma.user.update({
    where: { id: user.id },
    data: { isVerified: true, verifiedAt: new Date() },
  });

  let fullName = null;

  if (user.personId) {
    const person = await prisma.person.findUnique({
      where: { id: user.personId, branch: "base" },
      select: {
        firstName: true,
        lastName: true,
        patronymic: true,
      },
    });

    if (person) {
      fullName = {
        firstName: person.firstName,
        lastName: person.lastName,
        patronymic: person.patronymic,
      };
    }
  }

  const token = generateToken(
    user.id,
    user.isAdmin,
    user.isSuperAdmin,
    user.isBlocked,
  );
  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
      personId: user.personId,
      isSuperAdmin: user.isSuperAdmin,
      isBlocked: user.isBlocked,
      fullName,
    },
  });
});

// --- Вход ВРЕМЕННЫЙ ---
router.post("/anonymous", (req, res) => {
  const anonymousCode: { code: string } = req.body;
  if (!anonymousCode) {
    return res.status(400).json({ error: "Код не указан" });
  }

  const tempCodeData = tempCodeStore.verify(anonymousCode);

  if (tempCodeData) {
    const token = generateToken("anonymous");

    return res.json({
      token,
      user: {
        id: `temp-${Date.now()}`,
        isAdmin: false,
        isAnonymous: true,
        expiresAt: new Date(tempCodeData.expiresAt).toISOString(),
      },
      timeLeft: formatTimeLeft(tempCodeData.expiresAt),
      message: `Вход выполнен. Доступ действителен до ${new Date(tempCodeData.expiresAt).toLocaleString("ru-RU")}`,
    });
  }

  if (anonymousCode.code === process.env.ANONIM_CODE) {
    const token = generateToken("anonymous");
    res.json({
      token,
      user: { id: "anonymous", isAdmin: false, isAnonymous: true },
    });
  }
  return res.status(403).json({ error: "Неверный код" });
});

// --- НОВАЯ РЕГИСТРАЦИЯ (ФИО + дата + email) ---
router.post("/register", assignSuperAdminRole, async (req, res) => {
  const data = createPersonSchema.parse(req.body);
  const { email, spouseIds, ...newPerson } = data;
  const lowCaseEmail = email ? email.toLowerCase().trim() : "";
  const isSuperAdmin = req.canBeSuperAdmin === true;
  const isAdmin = req.canBeAdmin === true;
  const { firstName, lastName, patronymic } = newPerson;

  if (!email || !firstName || !lastName || !patronymic) {
    return res.status(400).json({ error: "Все поля обязательны" });
  }
  let user = await prisma.user.findUnique({
    where: { email: lowCaseEmail },
  });

  if (user) {
    // Если пользователь есть
    return res
      .status(400)
      .json({ error: "Пользователь с таким Email существует в  базе" });
  }

  try {
    // Ищем ПОДТВЕРЖДЕННУЮ персону
    const confirmedPerson = await prisma.person.findFirst({
      where: {
        firstName,
        lastName,
        patronymic,
        status: "CONFIRMED",
      },
    });

    if (confirmedPerson) {
      // ✅ Персона найдена — создаём пользователя

      const user = await prisma.user.create({
        data: {
          email: lowCaseEmail,
          personId: confirmedPerson.id,
          isSuperAdmin,
          isAdmin,
        },
      });

      const code = crypto.randomInt(100000, 999999).toString();
      await prisma.user.update({
        where: { id: user.id },
        data: { verificationCode: code },
      });

      await sendVerificationCode(email, code);
      return res.json({
        message: "Код отправлен на email",
        status: "CONFIRMED",
      });
    }

    // ❌ Создаём PENDING-запрос

    const personStatus = isSuperAdmin ? "CONFIRMED" : "PENDING";
    const personBranch = isSuperAdmin ? "base" : "edit";

    const pendingPerson = await prisma.person.create({
      data: {
        ...newPerson,
        branch: personBranch,
        status: personStatus,
      },
    });

    if (newPerson.gender && spouseIds && spouseIds.length > 0) {
      createMarriages(pendingPerson.id, spouseIds, newPerson.gender);
    }
    if (isSuperAdmin) {
      const user = await prisma.user.create({
        data: {
          email: lowCaseEmail,
          personId: pendingPerson.id,
          isSuperAdmin,
          isAdmin,
        },
      });

      const code = crypto.randomInt(100000, 999999).toString();
      await prisma.user.update({
        where: { id: user.id },
        data: { verificationCode: code },
      });

      await sendVerificationCode(email, code);
      return res.json({
        message: "Код отправлен на email",
        status: "CONFIRMED",
      });
    }

    await prisma.pendingRegistration.create({
      data: { email: lowCaseEmail, personId: pendingPerson.id },
    });

    return res.json({
      message: "Запрос отправлен администратору",
      status: "PENDING",
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Неизвестная ошибка";
    //console.error("Ошибка регистрации:", error);
    res.status(500).json({ error: message });
  }
});

export default router;
