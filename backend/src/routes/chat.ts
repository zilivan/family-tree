import express from "express";
import { prisma } from "../lib/prisma.js";

const router = express.Router();

// get  messages
router.get("/messages", async (req, res) => {
  try {
    const messages = await prisma.chatMessage.findMany({
      orderBy: { createdAt: "asc" },
    });
    res.json(messages);
  } catch {
    //console.error("Ошибка загрузки чата:", error);
    res.status(500).json({ error: "Не удалось загрузить сообщения" });
  }
});

// post  messages
router.post("/messages", async (req, res) => {
  const { text, userName, isGuest } = req.body;

  if (!text || !userName) {
    return res.status(400).json({ error: "Требуются text и userName" });
  }

  if (text.trim().length > 1000) {
    return res
      .status(400)
      .json({ error: "Сообщение слишком длинное (макс. 1000 символов)" });
  }

  try {
    const message = await prisma.chatMessage.create({
      data: {
        text: text.trim(),
        userName: userName.trim().substring(0, 100),
        isGuest: Boolean(isGuest),
      },
    });
    res.status(201).json(message);
  } catch {
    //console.error("Ошибка отправки сообщения:", error);
    res.status(500).json({ error: "Не удалось отправить сообщение" });
  }
});
export default router;
