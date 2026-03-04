"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerificationCode = void 0;
//re_JiN3joZW_5XoUVyK9LdxjmbtjCtKzJs9Z
// backend/src/utils/email.ts
const resend_1 = require("resend");
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
const sendVerificationCode = async (email, code) => {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev', // <-- Можно заменить на ваш домен позже
            to: email,
            subject: 'Код подтверждения для входа',
            html: `<p>Ваш код подтверждения: <strong>${code}</strong></p>`,
        });
        console.log(`Код ${code} отправлен на ${email} через Resend`);
    }
    catch (error) {
        console.error('Ошибка при отправке email:', error);
        throw new Error('Не удалось отправить email');
    }
};
exports.sendVerificationCode = sendVerificationCode;
