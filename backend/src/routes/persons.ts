// backend/src/routes/persons.ts
import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { authenticateToken, authorizeSuperAdmin } from "../middleware/auth.js";
import { z, ZodError } from "zod";
import { createMarriages } from "../utils/createMarriages.js";
import { upload } from "../middleware/upload.js";

const router = Router();

// --- Валидационные схемы Zod ---
export const dateSchema = z
  .string()
  .nullable()
  .optional()
  .transform((val) => (val === "" ? null : val))
  .pipe(
    z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Формат даты: ГГГГ-ММ-ДД")
      .nullable()
      .optional(),
  );

const createPersonSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  patronymic: z.string().optional(),
  birthDate: dateSchema,
  deathDate: dateSchema,
  gender: z.enum(["male", "female"]).optional(),
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

const updatePersonSchema = z.object({
  firstName: z.string().min(1, "Имя обязательно").optional(),
  lastName: z.string().min(1, "Фамилия обязательна").optional(),
  patronymic: z.string().optional(),
  birthDate: dateSchema,
  deathDate: dateSchema,
  gender: z.enum(["male", "female"]).optional(),
  phone: z
    .string()
    .min(5, "Слишком короткий номер")
    .regex(/^\+?[\d\s\-()]+$/, "Неверный формат телефона")
    .optional()
    .nullable()
    .or(z.literal("")),
  fatherId: z.string().optional().nullable(), // ← новое
  motherId: z.string().optional().nullable(), // ← новое
  spouseIds: z.array(z.string()).optional(), // ← ваше поле
  // photos: z.array(z.string()).optional(),
});

// --- Получить всех персон ---
router.get("/allperson", authenticateToken, async (req, res) => {
  try {
    const persons = await prisma.person.findMany({
      where: { branch: "base" },
      include: {
        father: true,
        mother: true,
        childrenAsFather: true,
        childrenAsMother: true,
        marriagesAsHusband: {
          include: {
            husband: true,
            wife: true,
          },
        },
        marriagesAsWife: {
          include: {
            husband: true,
            wife: true,
          },
        },
        photos: true,
      },
    });
    res.json(persons);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Ошибка при получении персон";
    //console.error("Ошибка при получении персон:", error);
    res.status(500).json({ error: message });
  }
});
// Получить семью для визуализации

router.get("/family-tree", async (req, res) => {
  try {
    // Получаем всех персон из base-ветки
    const persons = await prisma.person.findMany({
      where: { branch: "base" },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        patronymic: true,
        gender: true,
        fatherId: true,
        motherId: true,
      },
    });

    // Получаем все браки из base-ветки
    const marriages = await prisma.marriage.findMany({
      where: { branch: "base" },
      select: {
        husbandId: true,
        wifeId: true,
      },
    });

    res.json({ persons, marriages });
  } catch (error) {
    console.error("Ошибка загрузки семейного дерева:", error);
    res.status(500).json({ error: "Не удалось загрузить данные" });
  }
});

// --Поиск персон
router.get("/search", async (req, res) => {
  const { q, selectGender = null } = req.query;

  if (!q || typeof q !== "string") {
    return res.json([]);
  }

  try {
    const persons = await prisma.person.findMany({
      where: {
        branch: "base",
        ...(selectGender === "all" ? {} : { gender: selectGender as string }),
        OR: [
          { firstName: { contains: q, mode: "insensitive" } },
          { lastName: { contains: q, mode: "insensitive" } },
        ],
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        patronymic: true,
        birthDate: true,
      },
      take: 10, // максимум 10 результатов
    });

    res.json(persons);
  } catch {
    res.status(500).json([]);
  }
});

// --- Получить список полных имен  по ID ---
router.get("/fullname", async (req, res) => {
  const { ids } = req.query;

  // Валидация и преобразование ids
  let idArray: string[] = [];

  if (Array.isArray(ids)) {
    // Массив строк: ['1', '2', '3']
    idArray = ids.filter((id) => typeof id === "string");
  } else if (typeof ids === "string") {
    // Одна строка: "1,2,3" или "1"
    idArray = ids
      .split(",")
      .map((id) => id.trim())
      .filter((id) => id.length > 0);
  }

  if (idArray.length === 0) {
    return res.json([]);
  }

  try {
    const persons = await prisma.person.findMany({
      where: {
        id: { in: idArray },
        branch: "base",
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        patronymic: true,
      },
    });

    const personMap = new Map(persons.map((p) => [p.id, p]));
    const ordered = idArray.map((id) => personMap.get(id)).filter(Boolean);

    res.json(ordered);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Ошибка при получении персон";
    //console.error("Ошибка при получении персоны:", error);
    res.status(500).json({ error: message });
  }
});

// --- Получить персону по ID ---
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { branch = "base" } = req.query; // ← Получаем ветку из query-параметра
  try {
    const person = await prisma.person.findUnique({
      where: { id, branch: branch as string }, // ← Фильтрация по ветке
      include: {
        father: true,
        mother: true,
        childrenAsFather: true,
        childrenAsMother: true,
        marriagesAsHusband: {
          include: {
            husband: true,
            wife: true,
          },
        },
        marriagesAsWife: {
          include: {
            husband: true,
            wife: true,
          },
        },
        photos: true, // ← Добавляем фото
      },
    });

    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }
    // Преобразуем браки в массив ID супругов
    const spouseIds: string[] = [];

    // Если персона — муж, её жёны находятся в marriagesAsHusband
    for (const marriage of person.marriagesAsHusband) {
      if (marriage.wifeId) {
        spouseIds.push(marriage.wifeId);
      }
    }

    // Если персона — жена, её мужья находятся в marriagesAsWife
    for (const marriage of person.marriagesAsWife) {
      if (marriage.husbandId) {
        spouseIds.push(marriage.husbandId);
      }
    }
    //  Загружаем полные данные супругов со ВСЕМИ их детьми
    const spousesWithChildren = await Promise.all(
      spouseIds.map(async (spouseId) => {
        const spouse = await prisma.person.findUnique({
          where: { id: spouseId, branch: branch as string },
          include: {
            childrenAsFather: true,
            childrenAsMother: true,
          },
        });
        return spouse;
      }),
    );

    // Формируем ответ в соответствии с типом Person
    const responsePerson = {
      ...person,
      spouseIds, // ← добавляем вычисленное поле
      spousesWithChildren: spousesWithChildren.filter(Boolean), // ← полные данные супругов с детьми
      // Убеждаемся, что даты в формате ISO string
      birthDate: person.birthDate ? person.birthDate.toISOString() : null,
      deathDate: person.deathDate ? person.deathDate.toISOString() : null,
    };

    res.json(responsePerson);
  } catch (error) {
    console.error("Ошибка при получении персоны:", error);
    res.status(500).json({ error: "Failed to fetch person" });
  }
});

// --- Создать новую персону (только авторизованный пользователь) ---
// POST /api/persons
router.post("/", authenticateToken, async (req, res) => {
  if (req.body.isBlocked) {
    return res.status(403).json({ error: "Пользователь заблокирован" });
  }

  const data = createPersonSchema.parse(req.body);
  const { spouseIds, ...validatedData } = data;

  try {
    //  Определяем parentLastName для новой персоны
    let parentLastName: string | null = null;

    // Если пол "female" и есть отец — берем его фамилию
    if (validatedData.gender === "female" && validatedData.fatherId) {
      const father = await prisma.person.findUnique({
        where: { id: validatedData.fatherId, branch: "base" },
        select: { lastName: true },
      });

      parentLastName = father?.lastName || null;
    }
    // Во всех остальных случаях — null
    else {
      parentLastName = null;
    }

    // ВСЕГДА создаём в редактируемой ветке
    const newPerson = await prisma.person.create({
      data: {
        ...validatedData,
        parentLastName,
        branch: "edit",
        status: "PENDING",
        modeStatus: "NEW",
        createdById: req.userId,
        birthDate: validatedData.birthDate
          ? new Date(validatedData.birthDate)
          : null,
        deathDate: validatedData.deathDate
          ? new Date(validatedData.deathDate)
          : null,

        // fatherId и motherId передаются как есть
      },
    });
    // Создаём браки, если указаны spouseIds

    if (validatedData.gender && spouseIds && spouseIds.length > 0) {
      createMarriages(newPerson.id, spouseIds, validatedData.gender);
    }

    res.status(201).json(newPerson);
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json({ error: "Неверные данные", details: error.issues });
    }

    res.status(500).json({ error: "Ошибка авторицации" });
  }
});

// --- Обновить персону (только авторизованный пользователь) ---
// PUT /api/persons/:id
router.put("/:id", authenticateToken, async (req, res) => {
  if (req.body.isBlocked) {
    return res.status(403).json({ error: "Пользователь заблокирован" });
  }

  const { id } = req.params;
  const branch = "base";
  const data = updatePersonSchema.parse(req.body);
  const { spouseIds, ...validatedData } = data;
  try {
    const basePerson = await prisma.person.findUnique({
      where: { id, branch },
    });

    if (!basePerson) {
      return res.status(404).json({ error: "Персоне не найдена" });
    }

    let editPerson = await prisma.person.findFirst({
      where: {
        modeStatusEditId: id,
        branch: "edit",
      },
    });

    const birthDate = validatedData.birthDate
      ? new Date(validatedData.birthDate)
      : null;
    const deathDate = validatedData.deathDate
      ? new Date(validatedData.deathDate)
      : null;

    if (editPerson) {
      editPerson = await prisma.person.update({
        where: { id: editPerson.id },
        data: {
          ...validatedData,
          modeStatus: "EDIT",
          birthDate,
          deathDate,
        },
      });
      // Удаляем ВСЕ старые браки этой редактируемой персоны
      await prisma.marriage.deleteMany({
        where: {
          OR: [
            { husbandId: editPerson.id, branch: "edit" },
            { wifeId: editPerson.id, branch: "edit" },
          ],
        },
      });
      if (editPerson.gender && spouseIds) {
        createMarriages(editPerson.id, spouseIds, editPerson.gender);
      }
    } else {
      editPerson = await prisma.person.create({
        data: {
          ...basePerson,

          ...validatedData,

          id: undefined,
          branch: "edit",
          status: "PENDING",
          modeStatus: "EDIT",
          modeStatusEditId: id,
          birthDate,
          deathDate,
          createdAt: undefined,
          updatedAt: undefined,
        },
      });
      // Создаём браки для новой копии
      if (editPerson.gender && spouseIds) {
        createMarriages(editPerson.id, spouseIds, editPerson.gender);
      }
    }

    return res.json(editPerson);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        error: "Неверный формат данных",
        details: error.issues,
      });
    }
    // console.error("Ошибка при обновлении персоны:", error);
    res.status(500).json({ error: "Ошибка обновления персоны" });
  }
});
// --- Удалить аккаунт   ---

router.delete("/delete-account/:id", authenticateToken, async (req, res) => {
  const userId = req.userId;

  const { id } = req.params;

  try {
    if (id !== userId) {
      return res.status(400).json({
        error: "Требуется явное подтверждение удаления аккаунта",
      });
    }

    await prisma.user.delete({
      where: { id: userId },
    });
    res.status(200).json({ success: true, message: "Пользователь удален" });
  } catch {
    res.status(500).json({ error: "Не удалось удалить пользователя" });
  }
});

// --- Удалить персону (только администратор) ---
router.delete("/delete-user/:id", authorizeSuperAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    // Получаем персону со всеми связями
    const person = await prisma.person.findUnique({
      where: { id },
      include: {
        childrenAsFather: true,
        childrenAsMother: true,
        marriagesAsHusband: true,
        marriagesAsWife: true,
      },
    });

    if (!person) {
      return res.status(404).json({ error: "Персона не найдена" });
    }

    // 🔹 Проверка на детей
    const hasChildren =
      person.childrenAsFather.length > 0 || person.childrenAsMother.length > 0;

    // 🔹 Проверка на супругов
    const hasSpouses =
      person.marriagesAsHusband.length > 0 || person.marriagesAsWife.length > 0;

    // 🔹 Если есть дети ИЛИ супруги — запрещаем удаление
    if (hasChildren || hasSpouses) {
      const errors = [];
      if (hasChildren) errors.push("есть дети");
      if (hasSpouses) errors.push("есть супруги");

      return res.status(400).json({
        error: `Невозможно удалить персону: ${errors.join(" и ")}`,
      });
    }

    // Удаляем персону
    await prisma.person.delete({
      where: { id },
    });

    res.status(200).json({ success: true, message: "Персона удалена" });
  } catch {
    //console.error("Ошибка при удалении персоны:", error);
    res.status(500).json({ error: "Ошибка удаления персоны" });
  }
});

// Получить семью

router.get("/:id/family", async (req, res) => {
  const { id } = req.params;
  const { branch } = req.query;
  let person;
  try {
    const ACTIVE_PHOTOS = { where: { isDeleted: false } };
    if (branch === "edit") {
      person = await prisma.person.findFirst({
        where: { modeStatusEditId: id, branch: branch as string },
        include: {
          photos: ACTIVE_PHOTOS,
          father: { include: { photos: ACTIVE_PHOTOS } },
          mother: { include: { photos: ACTIVE_PHOTOS } },
          // ← Включаем детей обоих полов
          childrenAsFather: { include: { photos: ACTIVE_PHOTOS } },
          childrenAsMother: { include: { photos: ACTIVE_PHOTOS } },
        },
      });
    } else {
      person = await prisma.person.findFirst({
        where: { id, branch: branch as string },
        include: {
          photos: ACTIVE_PHOTOS,
          father: { include: { photos: ACTIVE_PHOTOS } },
          mother: { include: { photos: ACTIVE_PHOTOS } },
          // ← Включаем детей обоих полов
          childrenAsFather: { include: { photos: ACTIVE_PHOTOS } },
          childrenAsMother: { include: { photos: ACTIVE_PHOTOS } },
        },
      });
    }

    if (!person && branch === "edit") return res.json({ data: null });
    if (!person) return res.status(404).json({ error: "Person not found" });

    // Браки
    const marriagesAsHusband = await prisma.marriage.findMany({
      where: { husbandId: id, husband: { branch: branch as string } },
      include: { wife: { include: { photos: ACTIVE_PHOTOS } } },
    });

    const marriagesAsWife = await prisma.marriage.findMany({
      where: { wifeId: id, wife: { branch: branch as string } },
      include: { husband: { include: { photos: ACTIVE_PHOTOS } } },
    });

    // Формируем единый массив супругов
    const spouses = [
      ...marriagesAsWife.map((m) => m.husband), // мужья
      ...marriagesAsHusband.map((m) => m.wife), // жёны
    ].filter(Boolean); // убираем null/undefined

    // Добавляем детей каждому супругу
    const spousesWithChildren = await Promise.all(
      spouses.map(async (spouse) => {
        const childrenAsFather = await prisma.person.findMany({
          where: { fatherId: spouse.id, branch: branch as string },
          include: { photos: ACTIVE_PHOTOS },
        });

        const childrenAsMother = await prisma.person.findMany({
          where: { motherId: spouse.id, branch: branch as string },
          include: { photos: ACTIVE_PHOTOS },
        });

        return {
          ...spouse,
          childrenAsFather,
          childrenAsMother,
        };
      }),
    );

    // Дети
    const childrenAsFather = await prisma.person.findMany({
      where: { fatherId: id, branch: branch as string },
      include: { photos: ACTIVE_PHOTOS },
    });
    const childrenAsMother = await prisma.person.findMany({
      where: { motherId: id, branch: branch as string },
      include: { photos: ACTIVE_PHOTOS },
    });

    res.json({
      currentPerson: person,
      childrenAsFather,
      childrenAsMother,
      branch,
      marriagesAsHusband,
      marriagesAsWife,
      spouses: spousesWithChildren,
    });
  } catch {
    //console.error("Error fetching family:", error);
    res.status(500).json({ error: "Ошибка запроса семьи" });
  }
});

router.patch("/:personId/lock", authorizeSuperAdmin, async (req, res) => {
  const { personId } = req.params;
  const { isLocked } = req.body;

  await prisma.person.update({
    where: { id: personId },
    data: { isLocked },
  });

  res.json({ success: true });
});

// --- Загрузить фото для персоны (только авторизованный пользователь) ---
router.post(
  "/:id/photos",
  authenticateToken,
  upload.single("photo"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "Файл не загружен" });
      }

      const { id } = req.params;

      const relativePath = `${req.file.filename}`;

      // Сохраняем в БД
      const photo = await prisma.photo.create({
        data: {
          url: relativePath, // ← Только относительный путь
          personId: id,
          isDeleted: false,
        },
      });

      const serverUrl = process.env.SERVER_URL || "http://localhost:3000";
      const photoUrl = `${serverUrl}/upload/photos/${relativePath}`;

      res.json({
        id: photo.id,
        photoUrl, // Полный URL для отображения
        filename: req.file.filename,
      });
    } catch (error: unknown) {
      // Логируем реальную ошибку для диагностики
      if (error instanceof Error) {
        console.error("Ошибка загрузки фото:", error.message);
      } else {
        console.error("Ошибка загрузки фото:", error);
      }

      res.status(500).json({ error: "Не удалось загрузить фото" });
    }
  },
);

router.delete(
  "/:personId/photos/:photoId",
  authenticateToken,
  async (req, res) => {
    try {
      const { personId, photoId } = req.params;

      // Удаляем из базы
      await prisma.photo.update({
        where: {
          id: photoId,
          personId: personId,
        },
        data: {
          isDeleted: true,
          deletedAt: new Date(),
        },
      });
      // Опционально: удалить из Supabase (раскомментируйте, если нужно)
      // await deletePhotoFromSupabase(photo.url);

      res.json({ success: true, message: "Фото перемещено в корзину" });
    } catch {
      //console.error("Ошибка удаления фото:", error);
      res.status(500).json({ error: "Не удалось удалить фото" });
    }
  },
);

// Востановление из базы
router.post(
  "/:personId/photos/:photoId/restore",
  authenticateToken,
  async (req, res) => {
    try {
      const { personId, photoId } = req.params;

      await prisma.photo.update({
        where: {
          id: photoId,
          personId: personId,
        },
        data: {
          isDeleted: false,
          deletedAt: null,
        },
      });

      res.json({ success: true, message: "Фото восстановлено" });
    } catch {
      //console.error("Ошибка восстановления фото:", error);
      res.status(500).json({ error: "Не удалось восстановить фото" });
    }
  },
);

export default router;
