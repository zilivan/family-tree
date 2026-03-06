import {prisma} from "../lib/prisma";

export const createMarriages = async (
  personId: string,
  spouseIds: string[],
  gender: string,
) => {
  if (!spouseIds || spouseIds.length === 0) {
    return;
  }
  for (const spouseId of spouseIds) {
    if (gender === "male") {
      // Текущая персона — муж, spouseId — жена
      await prisma.marriage.create({
        data: {
          husbandId: personId,
          wifeId: spouseId,
          branch: "edit",
          status: "PENDING",
        },
      });
    } else {
      // Текущая персона — жена, spouseId — муж
      await prisma.marriage.create({
        data: {
          husbandId: spouseId,
          wifeId: personId,
          branch: "edit",
          status: "PENDING",
        },
      });
    }
  }
};
