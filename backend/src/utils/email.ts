//re_JiN3joZW_5XoUVyK9LdxjmbtjCtKzJs9Z
// backend/src/utils/email.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationCode = async (email: string, code: string) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // <-- Можно заменить на ваш домен позже
      to: email,
      subject: "Код подтверждения для входа",
      html: `<p>Ваш код подтверждения: <strong>${code}</strong></p>`,
    });
    console.log(`Код ${code} отправлен на ${email} через Resend`);
  } catch (error) {
    console.error("Ошибка при отправке email:", error);
    throw new Error("Не удалось отправить email");
  }
};
