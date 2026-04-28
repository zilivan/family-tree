export interface TempCodeData {
  code: string; // 6-значный код, например "482915"
  expiresAt: number; // timestamp истечения
  durationDays: 1 | 2 | 3;
  createdAt: number;
}

let activeCode: TempCodeData | null = null;

export const tempCodeStore = {
  generate: (durationDays: 1 | 2 | 3): TempCodeData => {
    const code = Math.floor(100000 + Math.random() * 900000).toString(); // 100000–999999
    const now = Date.now();

    activeCode = {
      code,
      durationDays,
      createdAt: now,
      expiresAt: now + durationDays * 24 * 60 * 60 * 1000,
    };

    return activeCode;
  },

  getActive: (): TempCodeData | null => {
    if (activeCode && activeCode.expiresAt <= Date.now()) {
      //console.log(`⏰ Код ${activeCode.code} истёк, очищаем`);
      activeCode = null;
      return null;
    }
    return activeCode;
  },

  verify: (inputCode: { code: string }): TempCodeData | null => {
    const current = tempCodeStore.getActive();

    if (current?.code === inputCode.code) {
      if (!current) return null;
      return current;
    }

    return null;
  },

  clear: () => {
    activeCode = null;
  },
};
