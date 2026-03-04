import prisma from "../db";

export const applyMarriages = async (
  editPersonId: string, // ID редактируемой персоны
  basePersonId: string, // ID основной персоны
  gender: string, // пол основной персоны
) => {
  // 1. Находим все редактируемые браки текущей персоны
  const editMarriages = await prisma.marriage.findMany({
    where: {
      OR: [
        { husbandId: editPersonId, branch: "edit" },
        { wifeId: editPersonId, branch: "edit" },
      ],
    },
  });
  //if (editMarriages.length === 0)  return; // Нет браков для применения

  // 2. Удаляем все текущие браки в base-ветке
  await prisma.marriage.deleteMany({
    where: {
      OR: [
        { husbandId: basePersonId, branch: "base" },
        { wifeId: basePersonId, branch: "base" },
      ],
    },
  });

  // 3. Создаём новые браки в base-ветке
  for (const editMarriage of editMarriages) {
    if (gender === "male") {
      // Основная персона — муж
      await prisma.marriage.create({
        data: {
          husbandId: basePersonId,
          wifeId: editMarriage.wifeId, // жена из edit-брака
          branch: "base",
          status: "CONFIRMED",
        },
      });
    } else {
      // Основная персона — жена
      await prisma.marriage.create({
        data: {
          husbandId: editMarriage.husbandId, // муж из edit-брака
          wifeId: basePersonId,
          branch: "base",
          status: "CONFIRMED",
        },
      });
    }
  }

  // 4. Удаляем редактируемые браки
  await prisma.marriage.deleteMany({
    where: {
      OR: [
        { husbandId: editPersonId, branch: "edit" },
        { wifeId: editPersonId, branch: "edit" },
      ],
    },
  });
};
