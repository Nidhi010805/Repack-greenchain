// Backend Final Code (userRoutes.js)
import express from "express";
import { PrismaClient } from "@prisma/client";
import authMiddleware from "../middleware/authMiddleware.js";
import multer from "multer";
import bcrypt from "bcryptjs";

const router = express.Router();
const prisma = new PrismaClient();
const upload = multer({ dest: "uploads/" }); // folder for storing uploaded photos

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
        profilePhoto: true,
      },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    const [totalReturns, totalOrders, totalApproved, totalRejected] = await Promise.all([
      prisma.returnPackaging.count({ where: { userId: req.user.id } }),
      prisma.order.count({ where: { userId: req.user.id } }),
      prisma.returnPackaging.count({ where: { userId: req.user.id, status: "approved" } }),
      prisma.returnPackaging.count({ where: { userId: req.user.id, status: "rejected" } }),
    ]);

    res.json({ ...user, totalReturns, totalOrders, totalApproved, totalRejected });
  } catch (error) {
    console.error("Profile API Error:", error);
    res.status(500).json({ error: "Something went wrong", details: error.message });
  }
});


// Update Profile Route (Name, Email, Mobile)
router.put("/update", authMiddleware, async (req, res) => {
  const { name, mobile, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Name and Email required" });
  try {
    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: { name, mobile, email },
      select: {
        id: true,
        name: true,
        email: true,
        mobile: true,
        greenPoints: true,
        profilePhoto: true,
      },
    });
    res.json({ message: "Profile updated", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Update failed", details: error.message });
  }
});

// Change Password Route
router.post("/change-password", authMiddleware, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword)
    return res.status(400).json({ error: "All fields required" });
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return res.status(401).json({ error: "Incorrect current password" });
    const hashed = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({ where: { id: req.user.id }, data: { password: hashed } });
    res.json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong", details: error.message });
  }
});

// Profile Photo Upload Route
router.post("/upload-photo", authMiddleware, upload.single("photo"), async (req, res) => {
  try {
    await prisma.user.update({
      where: { id: req.user.id },
      data: { profilePhoto: req.file.filename },
    });
    res.json({ message: "Profile photo updated", filename: req.file.filename });
  } catch (error) {
    res.status(500).json({ error: "Photo upload failed", details: error.message });
  }
});

export default router;
