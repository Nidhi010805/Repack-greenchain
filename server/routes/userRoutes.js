import express from "express";
import { PrismaClient } from "@prisma/client";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        mobile: true,
        greenPoints: true,
      },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    // ✅ Total Returns count
    const totalReturns = await prisma.return.count({
      where: { userId: req.user.id },
    });

    res.json({ ...user, totalReturns });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong", details: error.message });
  }
});

export default router;
