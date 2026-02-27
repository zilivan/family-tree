// src/types/index.ts
export interface User {
  id: string;
  email?: string;
  name: string;
  isAnonymous: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  isBlocked: boolean;
  isVerified: boolean;
  personId: string;
  fullName: {
    lastName: string;
    firstName: string;
    patronymic: string;
  };
}

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  patronymic: string | null; // ISO string или null
  parentLastName: string | null; // ISO string или null
  birthDate: string | null; // ISO string или null
  deathDate: string | null; // ISO string или null
  gender: string | null;
  phone: string | null;
  userId?: string | null; // для проверки прав редактирования
  branch?: "base" | "edit";
  photos: Photo[];
  fatherId: string | null;
  motherId: string | null;
  father: Person | null;
  mother: Person | null;
  childrenAsFather: Person[];
  childrenAsMother: Person[];
  modeStatus: "CREATE" | "EDIT" | "NEW";
  spouseIds: string[];
  spousesWithChildren: Person[];
  isLocked: boolean;
};

export type Photo = {
  id: string;
  url: string; // полный URL или относительный путь (например, "/uploads/abc.jpg")
  isDeleted: boolean;
};

export type Marriage = {
  id: string;
  husbandId: string;
  wifeId: string;
  startDate: string | null;
  endDate: string | null;
  place: string | null;
};
