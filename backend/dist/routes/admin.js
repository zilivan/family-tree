"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/admin.ts
const express_1 = require("express");
const db_1 = __importDefault(require("../db"));
const auth_1 = require("../middleware/auth");
const email_1 = require("../utils/email");
const crypto_1 = __importDefault(require("crypto"));
const inspector_1 = require("inspector");
const applyMarriages_1 = require("../utils/applyMarriages");
const router = (0, express_1.Router)();
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';
// Получить все ожидающие подтверждения персоны
router.get('/pending-persons', auth_1.authenticateAdmin, async (req, res) => {
    try {
        const pendingPersons = await db_1.default.person.findMany({
            where: {
                status: 'PENDING',
                pendingRegistration: { isNot: null }
            },
            include: {
                pendingRegistration: true,
            },
            orderBy: { createdAt: 'desc' },
        });
        res.json(pendingPersons);
    }
    catch (error) {
        inspector_1.console.error('Ошибка загрузки ожидающих персон:', error);
        res.status(500).json({ error: 'Не удалось загрузить список' });
    }
});
// Подтвердить персону
router.post('/confirm-person/:id', auth_1.authenticateAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        // Проверяем, существует ли персона в статусе PENDING
        const person = await db_1.default.person.findUnique({
            where: { id, status: 'PENDING' },
        });
        if (!person) {
            return res.status(404).json({ error: 'Персона не найдена или уже подтверждена' });
        }
        // Получаем email из pendingRegistration
        const pendingReg = await db_1.default.pendingRegistration.findUnique({
            where: { personId: id },
        });
        // Обновляем статус персоны
        await db_1.default.person.update({
            where: { id },
            data: { status: 'CONFIRMED',
                branch: 'base',
                modeStatus: 'CREATE',
            },
        });
        await (0, applyMarriages_1.applyMarriages)(person.id, person.id, person.gender || 'male');
        if (!pendingReg) {
            return (res.json({
                message: 'Персона подтверждена',
            }));
        }
        // Создаём пользователя
        const user = await db_1.default.user.create({
            data: {
                email: pendingReg.email,
                personId: id,
                isVerified: true,
                phone: person.phone ? person.phone : null,
            },
        });
        // Генерируем код подтверждения
        const code = crypto_1.default.randomInt(100000, 999999).toString();
        await db_1.default.user.update({
            where: { id: user.id },
            data: { verificationCode: code },
        });
        // Отправляем код
        await (0, email_1.sendVerificationCode)(pendingReg.email, code);
        // Удаляем запись из pending
        await db_1.default.pendingRegistration.delete({
            where: { personId: id },
        });
        res.json({
            message: 'Пользователь  подтвержден, код отправлен на email',
            email: pendingReg.email
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Пользователь  не подтвержден' });
    }
});
router.post('/apply-person/:id', auth_1.authenticateAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        // Находим редактируемую версию
        const editPerson = await db_1.default.person.findFirst({
            where: { id, branch: 'edit' },
        });
        if (!editPerson) {
            return res.status(404).json({ error: 'Редактируемая версия не найдена' });
        }
        // Проверяем, есть ли основная версия
        if (editPerson.modeStatus === "EDIT" && editPerson.modeStatusEditId) {
            const basePerson = await db_1.default.person.findFirst({
                where: { id: editPerson.modeStatusEditId, branch: 'base' },
            });
            if (!basePerson) {
                return res.status(404).json({ error: 'Основная персона не найдена' });
            }
            // Обновляем основную версию
            await db_1.default.person.update({
                where: { id: basePerson.id },
                data: {
                    ...editPerson,
                    id: undefined,
                    branch: 'base',
                    modeStatus: 'CREATE',
                    status: 'CONFIRMED',
                    createdAt: undefined,
                    updatedAt: undefined,
                },
            });
            // 2. Применяем браки
            await (0, applyMarriages_1.applyMarriages)(editPerson.id, basePerson.id, editPerson.gender || 'male');
            await db_1.default.person.delete({ where: { id: editPerson.id } });
            return res.json({ message: 'Изменения применены' });
        }
        const newPerson = await db_1.default.person.create({
            data: {
                ...editPerson,
                id: undefined,
                branch: 'base',
                modeStatus: 'CREATE',
                status: 'CONFIRMED',
                createdAt: undefined,
                updatedAt: undefined,
            },
        });
        await (0, applyMarriages_1.applyMarriages)(editPerson.id, newPerson.id, editPerson.gender || 'male');
        await db_1.default.person.delete({ where: { id: editPerson.id } });
        // Удаляем редактируемую версию
        res.json({ message: 'Новая персона создана' });
    }
    catch (error) {
        inspector_1.console.error('Ошибка применения изменений:', error);
        res.status(500).json({ error: "Ошибка обработки запроса" });
    }
});
// Получить все персоны в ветке edit
router.get('/edit-persons', auth_1.authenticateAdmin, async (req, res) => {
    try {
        const editPersons = await db_1.default.person.findMany({
            where: { branch: 'edit' },
            include: {
                photos: true,
                creator: { select: { email: true } }, // кто создал
            },
            orderBy: { createdAt: 'desc' },
        });
        res.json(editPersons);
    }
    catch (error) {
        inspector_1.console.error('Ошибка загрузки редактируемых персон:', error);
        res.status(500).json({ error: 'Не удалось загрузить список' });
    }
});
// Отклонить изменения (удалить из edit)
router.delete('/reject-person/:id', auth_1.authenticateAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        // Удаляем ВСЕ старые браки этой редактируемой персоны
        await db_1.default.marriage.deleteMany({
            where: {
                OR: [
                    { husbandId: id, branch: 'edit' },
                    { wifeId: id, branch: 'edit' }
                ]
            }
        });
        await db_1.default.person.delete({
            where: { id, branch: 'edit' },
        });
        res.json({ message: 'Изменения отклонены' });
    }
    catch (error) {
        inspector_1.console.error('Ошибка отклонения изменений:', error);
        res.status(500).json({ error: 'Не удалось отклонить изменения' });
    }
});
// Получить всех пользователей (опционально)
router.get('/users', auth_1.authenticateAdmin, async (req, res) => {
    try {
        const users = await db_1.default.user.findMany({
            select: {
                id: true,
                email: true,
                isAdmin: true,
                isVerified: true,
                isSuperAdmin: true,
                isBlocked: true,
                createdAt: true,
                personId: true,
            }
        });
        const usersWithFullName = await Promise.all(users.map(async (user) => {
            let fullName = null;
            if (user.personId) {
                const person = await db_1.default.person.findUnique({
                    where: { id: user.personId, branch: 'base' },
                    select: { firstName: true, lastName: true, patronymic: true }
                });
                if (person) {
                    fullName = {
                        firstName: person.firstName,
                        lastName: person.lastName,
                        patronymic: person.patronymic
                    };
                }
            }
            return { ...user, fullName };
        }));
        res.json(usersWithFullName);
    }
    catch (error) {
        inspector_1.console.error('Ошибка загрузки пользователей:', error);
        res.status(500).json({ error: 'Не удалось загрузить пользователей' });
    }
});
router.patch('/users/:userId/block', auth_1.authorizeSuperAdmin, async (req, res) => {
    const { userId } = req.params;
    const { isBlocked } = req.body;
    try {
        await db_1.default.user.update({
            where: { id: userId },
            data: { isBlocked }
        });
        res.json({ success: true });
    }
    catch (error) {
        inspector_1.console.error('Ошибка блокировки пользователя:', error);
        res.status(500).json({ error: 'Не удалось обновить пользователя' });
    }
});
router.patch('/users/:userId/admin', auth_1.authorizeSuperAdmin, async (req, res) => {
    const { userId } = req.params;
    const { isAdmin } = req.body;
    try {
        await db_1.default.user.update({
            where: { id: userId },
            data: { isAdmin }
        });
        res.json({ success: true });
    }
    catch (error) {
        inspector_1.console.error('Ошибка изменения прав администратора:', error);
        res.status(500).json({ error: 'Не удалось обновить пользователя' });
    }
});
router.delete('/users/:userId', auth_1.authorizeSuperAdmin, async (req, res) => {
    const { userId } = req.params;
    try {
        // Удаляем связанные данные (опционально)
        await db_1.default.person.deleteMany({
            where: { userId }
        });
        await db_1.default.user.delete({
            where: { id: userId }
        });
        res.json({ success: true });
    }
    catch (error) {
        inspector_1.console.error('Ошибка удаления пользователя:', error);
        res.status(500).json({ error: 'Не удалось удалить пользователя' });
    }
});
exports.default = router;
