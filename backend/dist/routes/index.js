"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/routes/index.ts
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const persons_1 = __importDefault(require("./persons"));
const admin_1 = __importDefault(require("./admin"));
const router = (0, express_1.Router)();
router.use('/auth', auth_1.default);
router.use('/api/persons', persons_1.default);
router.use('/api/admin', admin_1.default);
exports.default = router;
