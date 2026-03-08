//re_JiN3joZW_5XoUVyK9LdxjmbtjCtKzJs9Z       re_JiN3joZW_5XoUVyK9LdxjmbtjCtKzJs9Z

import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

/*
export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;
*/
export const resend = new Resend("re_JiN3joZW_5XoUVyK9LdxjmbtjCtKzJs9Z");

export const sendVerificationCode = async (email: string, code: string) => {
  if (!resend) {
    console.warn(
      "⚠️ RESEND_API_KEY не задан, код подтверждения не отправлен:",
      { email, code },
    );
    return;
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // <-- Можно заменить на ваш домен позже
      to: email,
      subject: "Код подтверждения для входа",
      html: `<p>Ваш код подтверждения: <strong>${code}</strong></p>`,
    });
    // console.log(`Код ${code} отправлен на ${email} через Resend`);
  } catch {
    // console.error("Ошибка при отправке email:", error);
    throw new Error("Не удалось отправить email");
  }
};
