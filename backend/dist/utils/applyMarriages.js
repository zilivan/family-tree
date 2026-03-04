"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMarriages = void 0;
const db_1 = __importDefault(require("../db"));
const applyMarriages = async (editPersonId, // ID редактируемой персоны
basePersonId, // ID основной персоны
gender // пол основной персоны
) => {
    // 1. Находим все редактируемые браки текущей персоны
    const editMarriages = await db_1.default.marriage.findMany({
        where: {
            OR: [
                { husbandId: editPersonId, branch: 'edit' },
                { wifeId: editPersonId, branch: 'edit' }
            ]
        }
    });
    //if (editMarriages.length === 0)  return; // Нет браков для применения
    // 2. Удаляем все текущие браки в base-ветке
    await db_1.default.marriage.deleteMany({
        where: {
            OR: [
                { husbandId: basePersonId, branch: 'base' },
                { wifeId: basePersonId, branch: 'base' }
            ]
        }
    });
    // 3. Создаём новые браки в base-ветке
    for (const editMarriage of editMarriages) {
        if (gender === 'male') {
            // Основная персона — муж
            await db_1.default.marriage.create({
                data: {
                    husbandId: basePersonId,
                    wifeId: editMarriage.wifeId, // жена из edit-брака
                    branch: 'base',
                    status: 'CONFIRMED',
                }
            });
        }
        else {
            // Основная персона — жена
            await db_1.default.marriage.create({
                data: {
                    husbandId: editMarriage.husbandId, // муж из edit-брака
                    wifeId: basePersonId,
                    branch: 'base',
                    status: 'CONFIRMED',
                }
            });
        }
    }
    // 4. Удаляем редактируемые браки
    await db_1.default.marriage.deleteMany({
        where: {
            OR: [
                { husbandId: editPersonId, branch: 'edit' },
                { wifeId: editPersonId, branch: 'edit' }
            ]
        }
    });
};
exports.applyMarriages = applyMarriages;
