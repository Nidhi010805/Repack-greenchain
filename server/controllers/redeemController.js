import prisma from "../db/prismaClient.js";

// Redeem Logic - Cashback or Product
export const redeemPoints = async (req, res) => {
  const { type, item, pointsUsed } = req.body;

  if (!type || !item || !pointsUsed) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });

    if (user.greenPoints < pointsUsed) {
      return res.status(400).json({ error: "Not enough Green Points" });
    }

    // Deduct Points
    await prisma.user.update({
      where: { id: req.user.id },
      data: { greenPoints: { decrement: pointsUsed } },
    });

    // Record History
    await prisma.redeemHistory.create({
      data: {
        userId: req.user.id,
        item,
        type, // "cashback" or "product"
        pointsUsed,
      },
    });

    res.json({ message: "Redeem successful", remainingPoints: user.greenPoints - pointsUsed });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Get Redeem History
export const getRedeemHistory = async (req, res) => {
  try {
    const history = await prisma.redeemHistory.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: "desc" },
    });
    res.json(history);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch history" });
  }
};
