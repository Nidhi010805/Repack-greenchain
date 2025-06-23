import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await prisma.user.findUnique({ where: { id: decoded.id } });
    next();
  } catch {
    return res.status(401).json({ error: "Invalid Token" });
  }
};

export default authMiddleware;
