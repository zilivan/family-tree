import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { authenticateAdmin, authorizeSuperAdmin } from "../middleware/auth.js";
import { sendVerificationCode } from "../utils/email.js";
import crypto from "crypto";

import { console } from "inspector";
import { applyMarriages } from "../utils/applyMarriages.js";

const router = Router();
//const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key";

// Получить все ожидающие подтверждения персоны
router.get("/pending-persons", authenticateAdmin, async (req, res) => {
  try {
    const pendingPersons = await prisma.person.findMany({
      where: {
        status: "PENDING",

        pendingRegistration: { isNot: null },
      },
      include: {
        pendingRegistration: true,
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(pendingPersons);
  } catch (error) {
    console.error("Ошибка загрузки ожидающих персон:", error);
    res.status(500).json({ error: "Не удалось загрузить список" });
  }
});

// Подтвердить персону
router.post("/confirm-person/:id", authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    // Проверяем, существует ли персона в статусе PENDING
    const person = await prisma.person.findUnique({
      where: { id, status: "PENDING" },
    });

    if (!person) {
      return res
        .status(404)
        .json({ error: "Персона не найдена или уже подтверждена" });
    }

    // Получаем email из pendingRegistration
    const pendingReg = await prisma.pendingRegistration.findUnique({
      where: { personId: id },
    });

    // Обновляем статус персоны
    await prisma.person.update({
      where: { id },
      data: { status: "CONFIRMED", branch: "base", modeStatus: "CREATE" },
    });
    await applyMarriages(person.id, person.id, person.gender || "male");

    if (!pendingReg) {
      return res.json({
        message: "Персона подтверждена",
      });
    }

    // Создаём пользователя
    const user = await prisma.user.create({
      data: {
        email: pendingReg.email,
        personId: id,
        isVerified: true,
        phone: person.phone ? person.phone : null,
      },
    });

    // Генерируем код подтверждения
    const code = crypto.randomInt(100000, 999999).toString();
    await prisma.user.update({
      where: { id: user.id },
      data: { verificationCode: code },
    });

    // Отправляем код
    await sendVerificationCode(pendingReg.email, code);

    // Удаляем запись из pending
    await prisma.pendingRegistration.delete({
      where: { personId: id },
    });

    res.json({
      message: "Пользователь  подтвержден, код отправлен на email",
      email: pendingReg.email,
    });
  } catch {
    res.status(500).json({ error: "Пользователь  не подтвержден" });
  }
});

router.post("/apply-person/:id", authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    // Находим редактируемую версию
    const editPerson = await prisma.person.findFirst({
      where: { id, branch: "edit" },
    });

    if (!editPerson) {
      return res.status(404).json({ error: "Редактируемая версия не найдена" });
    }

    // Проверяем, есть ли основная версия
    if (editPerson.modeStatus === "EDIT" && editPerson.modeStatusEditId) {
      const basePerson = await prisma.person.findFirst({
        where: { id: editPerson.modeStatusEditId, branch: "base" },
      });

      if (!basePerson) {
        return res.status(404).json({ error: "Основная персона не найдена" });
      }

      // Обновляем основную версию
      await prisma.person.update({
        where: { id: basePerson.id },
        data: {
          ...editPerson,
          id: undefined,
          branch: "base",
          modeStatus: "CREATE",
          status: "CONFIRMED",
          createdAt: undefined,
          updatedAt: undefined,
        },
      });

      // 2. Применяем браки
      await applyMarriages(
        editPerson.id,
        basePerson.id,
        editPerson.gender || "male",
      );

      await prisma.person.delete({ where: { id: editPerson.id } });

      return res.json({ message: "Изменения применены" });
    }
    const newPerson = await prisma.person.create({
      data: {
        ...editPerson,
        id: undefined,
        branch: "base",
        modeStatus: "CREATE",
        status: "CONFIRMED",
        createdAt: undefined,
        updatedAt: undefined,
      },
    });

    await applyMarriages(
      editPerson.id,
      newPerson.id,
      editPerson.gender || "male",
    );

    await prisma.person.delete({ where: { id: editPerson.id } });

    // Удаляем редактируемую версию

    res.json({ message: "Новая персона создана" });
  } catch (error) {
    console.error("Ошибка применения изменений:", error);
    res.status(500).json({ error: "Ошибка обработки запроса" });
  }
});

// Получить все персоны в ветке edit
router.get("/edit-persons", authenticateAdmin, async (req, res) => {
  try {
    const editPersons = await prisma.person.findMany({
      where: { branch: "edit" },
      include: {
        photos: true,
        creator: { select: { email: true } }, // кто создал
      },
      orderBy: { createdAt: "desc" },
    });
    res.json(editPersons);
  } catch (error) {
    console.error("Ошибка загрузки редактируемых персон:", error);
    res.status(500).json({ error: "Не удалось загрузить список" });
  }
});

// Отклонить изменения (удалить из edit)
router.delete("/reject-person/:id", authenticateAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    // Удаляем ВСЕ старые браки этой редактируемой персоны
    await prisma.marriage.deleteMany({
      where: {
        OR: [
          { husbandId: id, branch: "edit" },
          { wifeId: id, branch: "edit" },
        ],
      },
    });

    await prisma.person.delete({
      where: { id, branch: "edit" },
    });
    res.json({ message: "Изменения отклонены" });
  } catch (error) {
    console.error("Ошибка отклонения изменений:", error);
    res.status(500).json({ error: "Не удалось отклонить изменения" });
  }
});

// Получить всех пользователей (опционально)
router.get("/users", authenticateAdmin, async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        isAdmin: true,
        isVerified: true,
        isSuperAdmin: true,
        isBlocked: true,
        createdAt: true,
        personId: true,
      },
    });

    const usersWithFullName = await Promise.all(
      users.map(async (user) => {
        let fullName = null;

        if (user.personId) {
          const person = await prisma.person.findUnique({
            where: { id: user.personId, branch: "base" },
            select: { firstName: true, lastName: true, patronymic: true },
          });

          if (person) {
            fullName = {
              firstName: person.firstName,
              lastName: person.lastName,
              patronymic: person.patronymic,
            };
          }
        }
        return { ...user, fullName };
      }),
    );

    res.json(usersWithFullName);
  } catch (error) {
    console.error("Ошибка загрузки пользователей:", error);
    res.status(500).json({ error: "Не удалось загрузить пользователей" });
  }
});

router.patch("/users/:userId/block", async (req, res) => {
  const { userId } = req.params;
  const { isBlocked } = req.body;

  try {
    await prisma.user.update({
      where: { id: userId },
      data: { isBlocked },
    });
    res.json({ success: true });
  } catch (error) {
    console.error("Ошибка блокировки пользователя:", error);
    res.status(500).json({ error: "Не удалось обновить пользователя" });
  }
});

router.patch("/users/:userId/admin", async (req, res) => {
  const { userId } = req.params;
  const { isAdmin } = req.body;

  try {
    await prisma.user.update({
      where: { id: userId },
      data: { isAdmin },
    });
    res.json({ success: true });
  } catch (error) {
    console.error("Ошибка изменения прав администратора:", error);
    res.status(500).json({ error: "Не удалось обновить пользователя" });
  }
});

router.delete("/users/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    // Удаляем связанные данные (опционально)
    await prisma.person.deleteMany({
      where: { userId },
    });

    await prisma.user.delete({
      where: { id: userId },
    });
    res.json({ success: true });
  } catch (error) {
    console.error("Ошибка удаления пользователя:", error);
    res.status(500).json({ error: "Не удалось удалить пользователя" });
  }
});

export default router;
