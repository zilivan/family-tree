// src/types/index.ts

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string | null; // ISO string или null
  patronynicName: string | null; // ISO string или null
  deathDate: string | null; // ISO string или null
  gender: "male" | "female" | "other" | null;
  phone: string | null;
  parentId?: string | null;
  userId?: string | null; // для проверки прав редактирования
  branch?: "base" | "edit";

  // Связи — обычно не приходят по умолчанию, но могут быть включены по запросу
  // marriagessAsHusband: Marriage[];
  // marriagessAsWife: Marriage[];
  // children: Person[]; — не передаём в карточке, только в FamilyView

  // Фото — отдельная связь
  photoUrls: Photo[];
};

export type Photo = {
  id: string;
  url: string; // полный URL или относительный путь (например, "/uploads/abc.jpg")
};

export type Marriage = {
  id: string;
  husbandId: string;
  wifeId: string;
  startDate: string | null;
  endDate: string | null;
  place: string | null;
};
