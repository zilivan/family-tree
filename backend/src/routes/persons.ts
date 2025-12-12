// backend/src/routes/persons.ts
import { Router } from 'express';
import prisma from '../db';
import { authenticateToken, authenticateAdmin } from '../middleware/auth';
import { z } from 'zod';
import { Prisma } from '@prisma/client'; // <-- Теперь можно использовать типы Prisma

const router = Router();

// --- Валидационные схемы Zod ---
const createPersonSchema = z.object({
  firstName: z.string().min(1, "Имя обязательно"),
  lastName: z.string().min(1, "Фамилия обязательна"),
  birthDate: z.string().datetime().optional().nullable(),
  deathDate: z.string().datetime().optional().nullable(),
  gender: z.enum(['male', 'female', 'other']).optional(),
  phone: z.string().optional().nullable(),
  photoUrl: z.string().url().optional().nullable(),
  parentId: z.string().optional().nullable(), // ID родителя (если есть)
});

const updatePersonSchema = z.object({
  firstName: z.string().min(1, "Имя обязательно").optional(),
  lastName: z.string().min(1, "Фамилия обязательна").optional(),
  birthDate: z.string().datetime().optional().nullable(),
  deathDate: z.string().datetime().optional().nullable(),
  gender: z.enum(['male', 'female', 'other']).optional(),
  phone: z.string().optional().nullable(),
  photoUrl: z.string().url().optional().nullable(),
  parentId: z.string().optional().nullable(),
});

// --- Получить всех персон ---
router.get('/', async (req, res) => {
   const { branch = 'base' } = req.query;
  try {
    const persons = await prisma.person.findMany({
      include: {
        parent: true, // Включить информацию о родителе
        children: true, // Включить информацию о детях
        marriages: {
          include: {
            husband: true,
            wife: true,
          },
        },
        photos: true,
      },
    });
    res.json(persons);
  } catch (error) {
    console.error('Ошибка при получении персон:', error);
    res.status(500).json({ error: 'Failed to fetch persons' });
  }
});

// --- Получить персону по ID ---
router.get('/:id', async (req, res) => {
  const { id } = req.params;
const { branch = 'base' } = req.query; // ← Получаем ветку из query-параметра
  try {
     const person = await prisma.person.findUnique({
      where: { id, branch: branch as string }, // ← Фильтрация по ветке
      include: {
        parent: true,
        children: true,
        marriages: {
          include: {
            husband: true,
            wife: true,
          },
        },
        photos: true, // ← Добавляем фото
      },
    });

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    res.json(person);
  } catch (error) {
    console.error('Ошибка при получении персоны:', error);
    res.status(500).json({ error: 'Failed to fetch person' });
  }
});

// --- Создать новую персону (только авторизованный пользователь) ---
// POST /api/persons
router.post('/', authenticateToken, async (req, res) => {
  try {
    const validatedData = createPersonSchema.parse(req.body);

    // ВСЕГДА создаём в редактируемой ветке
    const newPerson = await prisma.person.create({
      data: {
        ...validatedData,
        branch: 'edit',
        userId: req.userId, // ← привязка к пользователю
        birthDate: validatedData.birthDate ? new Date(validatedData.birthDate) : null,
        deathDate: validatedData.deathDate ? new Date(validatedData.deathDate) : null,
      },
    });

    res.status(201).json(newPerson);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation failed', details: error.errors });
    }
    console.error('Ошибка при создании персоны:', error);
    res.status(500).json({ error: 'Failed to create person' });
  }
});

// --- Обновить персону (только авторизованный пользователь) ---
// PUT /api/persons/:id
router.put('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { branch = 'base' } = req.query; // ← для поиска исходной персоны

  try {
    const person = await prisma.person.findUnique({
      where: { id, branch: branch as string },
    });
    if (!person) return res.status(404).json({ error: 'Person not found' });

    // Только владелец или админ
    if (req.userId !== person.userId && !req.isAdmin) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const validatedData = updatePersonSchema.parse(req.body);

    // Создаём или обновляем КОПИЮ в ветке 'edit'
    const existingInEdit = await prisma.person.findFirst({
      where: { id, branch: 'edit' },
    });

    if (existingInEdit) {
      // Обновляем существующую редактируемую копию
      const updated = await prisma.person.update({
        where: { id: existingInEdit.id },
        data: {
          ...validatedData,
          birthDate: validatedData.birthDate ? new Date(validatedData.birthDate) : null,
          deathDate: validatedData.deathDate ? new Date(validatedData.deathDate) : null,
        },
      });
      return res.json(updated);
    } else {
      // Создаём новую запись в 'edit' как копию из 'base'
      const copy = await prisma.person.create({
        data: {
          ...person,
          id: undefined, // ← Prisma сам сгенерирует новый cuid()
          branch: 'edit',
          userId: req.userId,
          createdAt: undefined,
          updatedAt: undefined,
        },
      });
      return res.json(copy);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation failed', details: error.errors });
    }
    console.error('Ошибка при обновлении персоны:', error);
    res.status(500).json({ error: 'Failed to update person' });
  }
});



// --- Удалить персону (только администратор) ---
router.delete('/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    // Проверим, есть ли у персоны дети
    const personWithChildren = await prisma.person.findUnique({
      where: { id },
      include: { children: true },
    });

    if (personWithChildren && personWithChildren.children.length > 0) {
      return res.status(400).json({ error: 'Cannot delete person with children' });
    }

    await prisma.person.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Ошибка при удалении персоны:', error);
    res.status(500).json({ error: 'Failed to delete person' });
  }
});

// Получить семью

router.get('/:id/family', async (req, res) => {
  const { id } = req.params;
  const { branch = 'base' } = req.query;

  try {
    const person = await prisma.person.findUnique({
      where: { id, branch: branch as string },
      include: { photos: true },
    });

    if (!person) return res.status(404).json({ error: 'Person not found' });

    // Браки
    const marriagesAsHusband = await prisma.marriage.findMany({
      where: { husbandId: id, husband: { branch: branch as string } },
      include: { wife: { include: { photos: true } } },
    });

    const marriagesAsWife = await prisma.marriage.findMany({
      where: { wifeId: id, wife: { branch: branch as string } },
      include: { husband: { include: { photos: true } } },
    });

    let husband = null;
    let wife = null;

    if (marriagesAsHusband.length > 0) wife = marriagesAsHusband[0].wife;
    if (marriagesAsWife.length > 0) husband = marriagesAsWife[0].husband;

    // Дети
    const children = await prisma.person.findMany({
      where: { parentId: id, branch: branch as string },
      include: { photos: true },
    });

    res.json({
      currentPerson: person,
      husband,
      wife,
      children,
      branch,
    });
  } catch (error) {
    console.error('Error fetching family:', error);
    res.status(500).json({ error: 'Failed to fetch family' });
  }
});




// --- Загрузить фото для персоны (только авторизованный пользователь) ---
router.post('/:id/upload-photo', authenticateToken, async (req, res) => {
  // Multer middleware должен быть подключен отдельно, например, в server.ts
  // или использовать upload.single('photo') здесь, но тогда он будет только для этого маршрута.
  // Лучше вынести в server.ts и создать отдельный маршрут, как в шаге 3.

  // Пока просто заглушка. Смотри шаг 6.
  res.status(501).json({ error: 'Маршрут не реализован. Используйте /api/upload-photo для загрузки.' });
});


export default router;