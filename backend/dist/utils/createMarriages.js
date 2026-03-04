"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMarriages = void 0;
const db_1 = __importDefault(require("../db"));
const createMarriages = async (personId, spouseIds, gender) => {
    if (!spouseIds || spouseIds.length === 0) {
        return;
    }
    for (const spouseId of spouseIds) {
        if (gender === 'male') {
            // Текущая персона — муж, spouseId — жена
            await db_1.default.marriage.create({
                data: {
                    husbandId: personId,
                    wifeId: spouseId,
                    branch: 'edit',
                    status: 'PENDING',
                }
            });
        }
        else {
            // Текущая персона — жена, spouseId — муж
            await db_1.default.marriage.create({
                data: {
                    husbandId: spouseId,
                    wifeId: personId,
                    branch: 'edit',
                    status: 'PENDING',
                }
            });
        }
    }
};
exports.createMarriages = createMarriages;
