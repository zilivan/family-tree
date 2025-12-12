// backend/src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';

interface AuthenticatedRequest extends Request {
  userId?: string;
  isAdmin?: boolean;
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Токен отсутствует' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; isAdmin: boolean };
    req.userId = decoded.id;
    req.isAdmin = decoded.isAdmin;
    next();
  } catch {
    res.status(401).json({ error: 'Неверный токен' });
  }
};

export const authenticateAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  authenticateToken(req, res, () => {
    if (!req.isAdmin) {
      return res.status(403).json({ error: 'Требуется админ' });
    }
    next();
  });
};