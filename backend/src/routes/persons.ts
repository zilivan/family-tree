// backend/src/routes/persons.ts
import { Router } from 'express';
import prisma from '../db';
import { authenticateToken, authenticateAdmin } from '../middleware/auth';
import { z ,ZodError} from 'zod';
import { Prisma } from '@prisma/client'; // <-- Теперь можно использовать типы Prisma

const router = Router();

// --- Валидационные схемы Zod ---
const createPersonSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  patronymic: z.string().optional(),
birthDate: z
    .string()
    .nullable()
    .optional()
    .transform((val) => (val === "" ? null : val))
    .pipe(z.string().datetime().nullable().optional()),

  deathDate: z
    .string()
    .nullable()
    .optional()
    .transform((val) => (val === "" ? null : val))
    .pipe(z.string().datetime().nullable().optional()),
  gender: z.enum(['male', 'female']).optional(),
  phone: z.string().optional().nullable(),
  fatherId: z.string().optional().nullable(), // ← новое
  motherId: z.string().optional().nullable(), // ← новое
  
});

const updatePersonSchema = z.object({
  firstName: z.string().min(1, "Имя обязательно").optional(),
  lastName: z.string().min(1, "Фамилия обязательна").optional(),
   patronymic: z.string().optional(),
  birthDate: z
    .string()
    .nullable()
    .optional()
    .transform((val) => (val === "" ? null : val))
    .pipe(z.string().datetime().nullable().optional()),
  deathDate: z
    .string()
    .nullable()
    .optional()
    .transform((val) => (val === "" ? null : val))
    .pipe(z.string().datetime().nullable().optional()),
  gender: z.enum(['male', 'female']).optional(),
  phone: z.string().optional().nullable(),
  fatherId: z.string().optional().nullable(), // ← новое
  motherId: z.string().optional().nullable(), // ← новое
});

// --- Получить всех персон ---
router.get('/', async (req, res) => {
   const { branch = 'base' } = req.query;
  try {
    const persons = await prisma.person.findMany({
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
  } catch (error) {
    console.error('Ошибка при получении персон:', error);
    res.status(500).json({ error: 'Failed to fetch persons' });
  }
});
// --Поиск персон
router.get('/search', async (req, res) => {
  const { q, branch = 'base', selectGender = null } = req.query;

  
  if (!q || typeof q !== 'string') {
   
    return res.json([]);
  }

  try {
    const persons = await prisma.person.findMany({
      where: {
        branch: 'base',
        gender:selectGender as string | null,
        OR: [
          { firstName: { contains: q, mode: 'insensitive' } },
          { lastName: { contains: q, mode: 'insensitive' } },
        ],
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        patronymic: true,
        birthDate:true,

      },
      take: 10, // максимум 10 результатов
    });

    res.json(persons);
    
  } catch (error) {
    console.error('Ошибка поиска:', error);
    res.status(500).json([]);
  }
});

// --- Получить список полных имен  по ID ---
router.post('/fullname', async (req, res) => {
  const { ids =[] } = req.body;

const { branch = 'base' } = req.query; // ← Получаем ветку из query-параметра
if ( !Array.isArray(ids) || ids.length === 0 ) {
    return res.json([]);
  }

  try {
    const persons = await prisma.person.findMany({
      where: {
        id: { in: ids },
        branch: 'base'
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        patronymic: true,
      },
    });

    const personMap = new Map(persons.map(p => [p.id, p]));
    const ordered = ids.map(id => personMap.get(id)).filter(Boolean);

    res.json(ordered);
  } catch (error) {
    console.error('Ошибка при получении персоны:', error);
    res.status(500).json({ error: 'Failed to fetch person' });
  }
});


// --- Получить персону по ID ---
router.get('/:id', async (req, res) => {
  const { id } = req.params;
const { branch = 'base' } = req.query; // ← Получаем ветку из query-параметра
  try {
     const person = await prisma.person.findUnique({
      where: {  id,  branch: branch as string },// ← Фильтрация по ветке
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


const data = createPersonSchema.parse(req.body);
const {  ...validatedData} = data;

  try {
    
    // ВСЕГДА создаём в редактируемой ветке
     const newPerson = await prisma.person.create({
      data: {
        ...validatedData,
        branch: 'edit',
        status: 'PENDING',
        modeStatus:'NEW',
        createdById: req.userId,
        birthDate: validatedData.birthDate ? new Date(validatedData.birthDate) : null,
        deathDate: validatedData.deathDate ? new Date(validatedData.deathDate) : null,

        // fatherId и motherId передаются как есть
      },
    });


    res.status(201).json(newPerson);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ error: 'Неверные данные', details: error.issues,});
    }
    
    res.status(500).json({ error: 'Ошибка авторицации' });
  }
});

// --- Обновить персону (только авторизованный пользователь) ---
// PUT /api/persons/:id
router.put('/:id', authenticateToken, async (req, res) => {

  const { id } = req.params;
  const branch = 'base';
 const data = updatePersonSchema.parse(req.body);
  const {...validatedData } = data;
  try {
    const basePerson = await prisma.person.findUnique({
      where: { id, branch },
    });

    if (!basePerson) {
      return res.status(404).json({ error: 'Person not found' });
    }

   

    let editPerson = await prisma.person.findFirst({
      where: { 
        modeStatusEditId: id, 
        branch: 'edit' 
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
          modeStatus: 'EDIT',
          birthDate,
          deathDate,
        },
      });
// Удаляем ВСЕ старые браки этой редактируемой персоны
     await prisma.marriage.deleteMany({
        where: {
          OR: [
            { husbandId: editPerson.id,branch: 'edit' },
            { wifeId: editPerson.id ,branch: 'edit'}
          ]
        }
      });

 

    } else {
     
      editPerson = await prisma.person.create({
        data: {
          
          ...basePerson,
         
          ...validatedData,
         
          id: undefined, 
          branch: 'edit',
          status: 'PENDING',
          modeStatus: 'EDIT',
          modeStatusEditId: id, 
          birthDate,
          deathDate,
          createdAt: undefined,
          updatedAt: undefined,

        },
      });
// Создаём браки для новой копии
 /*    if (husbandId || wifeId) {
      await createMarriages(editPerson.id,husbandId, wifeId,marriageStartDate,marriageEndDate);
    }*/
    }

    return res.json(editPerson);

  } 
  catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: error.issues 
      });
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
      include: { 
        childrenAsFather: true,
         childrenAsMother: true, 
       },
    });



    if (personWithChildren && personWithChildren.childrenAsFather.length > 0 
       && personWithChildren && personWithChildren.childrenAsMother.length > 0 ) {
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
  const { branch  } = req.query;
  let person;
  try {
     if (branch ==='edit') {
      
   person = await prisma.person.findFirst({
      where: { modeStatusEditId: id,  branch: branch as string },
      include: {
        photos: true,
        father: { include: { photos: true } },
        mother: { include: { photos: true } },
        // ← Включаем детей обоих полов
        childrenAsFather: { include: { photos: true } },
        childrenAsMother: { include: { photos: true } },
      },
    });
     }else {


     person = await prisma.person.findFirst({
      where: { id, branch: branch as string },
      include: {
        photos: true,
        father: { include: { photos: true } },
        mother: { include: { photos: true } },
        // ← Включаем детей обоих полов
        childrenAsFather: { include: { photos: true } },
        childrenAsMother: { include: { photos: true } },
      },
    });
}

    if (!person && branch==='edit' ) return res.json({data: null});
    if (!person ) return res.status(404).json({ error: 'Person not found' });


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
    const childrenAsFather = await prisma.person.findMany({
      where: { fatherId: id, branch: branch as string },
      include: { photos: true },
    });
    const childrenAsMother = await prisma.person.findMany({
      where: { motherId: id, branch: branch as string },
      include: { photos: true },
    });

    res.json({
      currentPerson: person,
      husband,
      wife,
      childrenAsFather,
      childrenAsMother,
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


/* async function createMarriages(
  personId: string, 
  husbandId: string | null | undefined, 
  wifeId: string | null | undefined,
  marriageStartDate: Date | null,
  marriageEndDate: Date | null,
) {
  // Если указан муж — создаём брак (жена = personId, муж = husbandId)
  if (husbandId && husbandId.trim()) {
    await prisma.marriage.create({
       data:{
        husbandId: husbandId.trim(),
        wifeId: personId,
        branch: 'edit',
        status: 'PENDING',
      }
    });
  }

  // Если указана жена — создаём брак (муж = personId, жена = wifeId)
  if (wifeId && wifeId.trim()) {
    await prisma.marriage.create({
      data: {
        husbandId: personId,
        wifeId: wifeId.trim(),
        branch: 'edit',
        status: 'PENDING',
      }
    });
  }
}
  */