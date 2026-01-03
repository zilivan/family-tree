import type { Person, Photo } from "../types";

// Фото
const photo1: Photo = {
  id: "ph1",
  url: "/family-tree/assets/grandFather.webp",
};
const photo2: Photo = { id: "ph2", url: "/family-tree/assets/girl.webp" };
const photo3: Photo = { id: "ph3", url: "/family-tree/assets/guy.webp" };
const photo4: Photo = { id: "ph4", url: "/family-tree/assets/man.webp" };
const photo5: Photo = { id: "ph5", url: "/family-tree/assets/women.webp" };

// Персоны
const husband1: Person = {
  id: "p1",
  firstName: "Иван",
  lastName: "Сидоров",
  patronynicName: "Петрович",
  birthDate: "1980-03-15T00:00:00.000Z",
  deathDate: null,
  gender: "male",
  phone: "+79991234567",
  parentId: "p10", // его родители — где-то выше
  userId: "u1", // владелец — пользователь u1
  branch: "base",
  photoUrls: [photo1, photo4, photo3],
};
/*
const husband2: Person = {
  id: "p6",
  firstName: "Сергей",
  lastName: "Иванов",
  patronynicName: "Петрович",
  birthDate: "1990-03-15T00:00:00.000Z",
  deathDate: null,
  gender: "male",
  phone: "+79",
  parentId: "p16", // его родители — где-то выше
  userId: null, // владелец — пользователь u1
  branch: "base",
  photoUrls: [photo3],
};
*/
const wife1: Person = {
  id: "p2",
  firstName: "Мария",
  lastName: "Иванова",
  patronynicName: "Петровна",
  birthDate: "1982-07-22T00:00:00.000Z",
  deathDate: null,
  gender: "female",
  phone: "+79999876543",
  parentId: null,
  userId: null, // не привязана к пользователю
  branch: "base",
  photoUrls: [photo2, photo5],
};

const wife2: Person = {
  id: "p5",
  firstName: "Елена",
  lastName: "Сидорова",
  patronynicName: "Дмитреевна",
  birthDate: "1985-11-03T00:00:00.000Z",
  deathDate: null,
  gender: "female",
  phone: "+79001112233",
  parentId: null,
  userId: null,
  branch: "edit",
  photoUrls: [],
};

const child1: Person = {
  id: "p3",
  firstName: "Анна",
  lastName: "Иванова",
  patronynicName: "Сергеевна",
  birthDate: "2005-11-30T00:00:00.000Z",
  deathDate: "2015-10-12T00:00:00.000Z",
  gender: "female",
  phone: null,
  parentId: "p1", // её отец — Иван
  userId: null,
  branch: "base",
  photoUrls: [photo3, photo4, photo3],
};

const child2: Person = {
  id: "p4",
  firstName: "Сергей",
  lastName: "Иванов",
  patronynicName: "Сергеевич",
  birthDate: "2008-02-14T00:00:00.000Z",
  deathDate: null,
  gender: "male",
  phone: null,
  parentId: "p1",
  userId: null,
  branch: "base",
  photoUrls: [photo4],
};

// Браки
/*
const marriage1: Marriage = {
  id: "m1",
  husbandId: "p1",
  wifeId: "p2",
  startDate: "2004-06-10T00:00:00.000Z",
  endDate: null,
  place: "Москва",
};

const marriage2: Marriage = {
  id: "m2",
  husbandId: "p1",
  wifeId: "p5",
  startDate: "2015-09-20T00:00:00.000Z",
  endDate: null,
  place: "Санкт-Петербург",
};
*/
export interface FamilyNode {
  husband: Person;
  wife: Person;
  otherPartnersHusband: Person[];
  otherPartnersWife: Person[]; // для ←/→ навигации
  children: Person[];
  parentId: string | null;
}

export const mockFamilyNode: FamilyNode = {
  husband: husband1,
  wife: wife1,
  otherPartnersHusband: [wife2], // Иван был женат ещё на Елене
  otherPartnersWife: [],
  children: [child1, child2],
  parentId: "p10", // ID семьи родителей Ивана
};
