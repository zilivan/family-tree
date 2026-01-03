import type { Person, Photo } from "../types";

// Фото

const photo_p1_1: Photo = { id: "ph11", url: "/family-tree/assets/p1-1.jpg" };
const photo_p1_2: Photo = { id: "ph12", url: "/family-tree/assets/p1-2.jpg" };
const photo_p1_3: Photo = { id: "ph13", url: "/family-tree/assets/p1-3.jpg" };

const photo_p2_1: Photo = { id: "ph21", url: "/family-tree/assets/p2-1.jpg" };
const photo_p2_2: Photo = { id: "ph22", url: "/family-tree/assets/p2-2.jpg" };

const photo_p3_1: Photo = { id: "ph31", url: "/family-tree/assets/p3-1.jpg" };
const photo_p3_2: Photo = { id: "ph32", url: "/family-tree/assets/p3-2.jpg" };
const photo_p3_3: Photo = { id: "ph33", url: "/family-tree/assets/p3-3.jpg" };

const photo_p4_1: Photo = { id: "ph41", url: "/family-tree/assets/p4-1.jpg" };
const photo_p4_2: Photo = { id: "ph42", url: "/family-tree/assets/p4-2.jpg" };
const photo_p4_3: Photo = { id: "ph43", url: "/family-tree/assets/p4-3.jpg" };

const photo_p5_1: Photo = { id: "ph51", url: "/family-tree/assets/p5-1.jpg" };
const photo_p5_2: Photo = { id: "ph52", url: "/family-tree/assets/p5-2.jpg" };
const photo_p5_3: Photo = { id: "ph53", url: "/family-tree/assets/p5-3.jpg" };
const photo_p5_4: Photo = { id: "ph54", url: "/family-tree/assets/p5-4.jpg" };

const photo_p6_1: Photo = { id: "ph61", url: "/family-tree/assets/p6-1.jpg" };
const photo_p6_2: Photo = { id: "ph62", url: "/family-tree/assets/p6-2.jpg" };
const photo_p6_3: Photo = { id: "ph63", url: "/family-tree/assets/p6-3.jpg" };

// Персоны
const husband1: Person = {
  id: "p1",
  firstName: "Иван",
  lastName: "Демидович",
  parentLastName:null,
  patronynicName: "Семенович",
  birthDate: "1911-01-01T00:00:00.000Z",
  deathDate: "1992-01-01T00:00:00.000Z",
  gender: "male",
  phone: null,
  parentId: "p10", // его родители — где-то выше
  userId: "u1", // владелец — пользователь u1
  branch: "base",
  photoUrls: [photo_p1_1, photo_p1_2, photo_p1_3],
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
  firstName: "Ольга",
  lastName:"Демидович",
  parentLastName:"Калько",
  patronynicName: "Константиновна",
  birthDate: "1915-01-01T00:00:00.000Z",
  deathDate: "2001-01-01T00:00:00.000Z",
  gender: "female",
  phone: null,
  parentId: null,
  userId: null, // не привязана к пользователю
  branch: "base",
  photoUrls: [photo_p2_1, photo_p2_2],
};
/*
const wife2: Person = {
  id: "p10",
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
};*/

const child1: Person = {
  id: "p3",
  firstName: "Константин",
  lastName: "Демидович",
   parentLastName:null,
  patronynicName: "Иванович",
  birthDate: "1951-01-01T00:00:00.000Z",
  deathDate: null,
  gender: "male",
  phone: null,
  parentId: "p1", // её отец — Иван
  userId: null,
  branch: "base",
  photoUrls: [photo_p3_1, photo_p3_2, photo_p3_3],
};

const child2: Person = {
  id: "p4",
  firstName: "Иван",
  lastName: "Демидович",
  parentLastName:null,
  patronynicName: "Иванович",
  birthDate: "1938-01-01T00:00:00.000Z",
  deathDate: "1968-01-01T00:00:00.000Z",
  gender: "male",
  phone: null,
  parentId: "p1",
  userId: null,
  branch: "base",
  photoUrls: [photo_p4_1, photo_p4_2, photo_p4_3],
};
const child3: Person = {
  id: "p5",
  firstName: "Лариса",
  lastName: "Жданок",
  parentLastName:"Демидович",
  patronynicName: "Ивановна",
  birthDate: "1939-01-01T00:00:00.000Z",
  deathDate: "2004-10-23T00:00:00.000Z",
  gender: "female",
  phone: null,
  parentId: "p1",
  userId: null,
  branch: "base",
  photoUrls: [photo_p5_1, photo_p5_2, photo_p5_3, photo_p5_4],
};
const child4: Person = {
  id: "p6",
  firstName: "Раиса",
  lastName: "Павлова",
  parentLastName:"Демидович",
  patronynicName: "Ивановна",
  birthDate: "1941-11-07T00:00:00.000Z",
  deathDate: null,
  gender: "male",
  phone: "+375299228668",
  parentId: "p1",
  userId: null,
  branch: "base",
  photoUrls: [photo_p6_1, photo_p6_2, photo_p6_3],
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
  otherPartnersHusband: [], // Иван был женат ещё на Елене
  otherPartnersWife: [],
  children: [child1, child2, child3, child4],
  parentId: "p10", // ID семьи родителей Ивана
};
