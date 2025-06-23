import { Router } from "express";
import { createReturn, getMyReturns } from "../controllers/returnController.js";
import  authMiddleware  from "../middleware/authMiddleware.js";

const router = Router();

router.post("/create", authMiddleware, createReturn);
router.get("/my", authMiddleware, getMyReturns);

export default router;
