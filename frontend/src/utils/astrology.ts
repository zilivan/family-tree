export function calculateZodiacSign(birthDate: Date): string {
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1; // getMonth() возвращает 0–11

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Овен";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Телец";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
    return "Близнецы";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Рак";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Лев";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Дева";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Весы";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
    return "Скорпион";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
    return "Стрелец";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
    return "Козерог";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
    return "Водолей";
  return "Рыбы";
}

export function calculateChineseZodiac(birthDate: Date): string {
  const year = birthDate.getFullYear();
  const animals = [
    "Крыса",
    "Бык",
    "Тигр",
    "Кролик",
    "Дракон",
    "Змея",
    "Лошадь",
    "Коза",
    "Обезьяна",
    "Петух",
    "Собака",
    "Свинья",
  ];
  // 1900 — год Крысы (индекс 0)
  const index = (year - 1900) % 12;
  return animals[index >= 0 ? index : index + 12];
}

export function calculateNumerology(birthDate: Date): number {
  const y = birthDate.getFullYear();
  const m = birthDate.getMonth() + 1;
  const d = birthDate.getDate();
  const sum = y + m + d;
  let num = sum;
  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  return num;
}
