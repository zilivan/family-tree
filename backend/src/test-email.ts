// backend/src/test-email.ts
import "dotenv/config"; // <-- Обязательно, чтобы .env загрузился
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTestEmail() {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // <-- Временный адрес от Resend
      to: "zhdanokivan@xmail.ru", // <-- Замените на ваш настоящий email для теста
      subject: "Тестовое письмо от Family Tree App",
      html: "<p>Если вы это видите, Resend работает корректно!</p>",
    });

    console.log("Email успешно отправлен:", response);
  } catch (error) {
    console.error("Ошибка при отправке email:", error);
  }
}

sendTestEmail();
