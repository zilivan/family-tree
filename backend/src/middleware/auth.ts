import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

interface JwtPayload {
  id: string;
  isAdmin?: boolean;
  isSuperAdmin?: boolean;
  isBlocked?: boolean;
}
declare global {
  namespace Express {
    interface Request {
      userId?: string;
      isAdmin?: boolean;
      isSuperAdmin?: boolean;
      isBlocked?: boolean;
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Токен отсутствует" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Неверный токен" });
    const user = decoded as JwtPayload;
    req.userId = user.id;
    req.isAdmin = user.isAdmin;
    req.isSuperAdmin = user.isSuperAdmin;
    next();
  });
};

export const authenticateAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  authenticateToken(req, res, () => {
    if (!req.isAdmin && !req.isSuperAdmin) {
      return res.status(403).json({ error: "Требуется админ" });
    }

    next();
  });
};

export const authorizeSuperAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return async () => {
    const userFromDb = await prisma.user.findUnique({
      where: { id: req.userId },
    });
    if (!userFromDb) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    authenticateToken(req, res, () => {
      if (!req.isSuperAdmin) {
        return res.status(403).json({ error: "Требуются права суперадмина" });
      }
      if (userFromDb.isSuperAdmin !== req.isSuperAdmin) {
        return res.status(403).json({ error: "Требуются права суперадмина" });
      }

      next();
    });
  };
};
