"use strict";
// backend/src/middleware/auth.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeSuperAdmin = exports.authenticateAdmin = exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Токен отсутствует' });
    }
    jsonwebtoken_1.default.verify(token, JWT_SECRET, (err, user) => {
        if (err)
            return res.status(403).json({ error: 'Неверный токен' });
        req.userId = user.id;
        req.isAdmin = user.isAdmin;
        req.isSuperAdmin = user.isSuperAdmin;
        next();
    });
};
exports.authenticateToken = authenticateToken;
const authenticateAdmin = (req, res, next) => {
    (0, exports.authenticateToken)(req, res, () => {
        if (!req.isAdmin && !req.isSuperAdmin) {
            return res.status(403).json({ error: 'Требуется админ' });
        }
        next();
    });
};
exports.authenticateAdmin = authenticateAdmin;
const authorizeSuperAdmin = (req, res, next) => {
    (0, exports.authenticateToken)(req, res, () => {
        if (!req.isSuperAdmin) {
            return res.status(403).json({ error: 'Требуются права суперадмина' });
        }
        next();
    });
};
exports.authorizeSuperAdmin = authorizeSuperAdmin;
