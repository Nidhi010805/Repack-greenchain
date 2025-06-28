import express from "express";
import { getNotifications, markAsRead, deleteNotification } from "../controllers/notificationController.js";
import  verifyToken  from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getNotifications);
router.patch("/:id/read", verifyToken, markAsRead);
router.delete("/:id", verifyToken, deleteNotification);

export default router;
