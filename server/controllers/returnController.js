import prisma from "../db/prismaClient.js";

// Points calculation logic
const calculatePoints = (material, size) => {
  if (material === "Plastic") {
    if (size === "Small") return 1;
    if (size === "Medium") return 3;
    if (size === "Large") return 5;
  }

  if (material === "Paper") {
    if (size === "Small") return 2;
    if (size === "Medium") return 4;
    if (size === "Large") return 6;
  }

  if (material === "Cardboard") {
    if (size === "Small") return 3;
    if (size === "Medium") return 5;
    if (size === "Large") return 7;
  }

  return 1; // Default fallback
};

// Return create karne wala function
export const createReturn = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id;

  try {
    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) return res.status(404).json({ message: "Product not found" });

    const perUnitPoints = calculatePoints(product.material, product.size);
    const totalPoints = perUnitPoints * quantity;

    const newReturn = await prisma.return.create({
      data: {
        userId,
        productId,
        quantity,
        points: totalPoints,
      },
    });

    await prisma.user.update({
      where: { id: userId },
      data: { greenPoints: { increment: totalPoints } },
    });

    res.status(201).json({ message: "Return processed successfully", newReturn, totalPoints });
  } catch (error) {
    res.status(500).json({ message: "Failed to process return", error: error.message });
  }
};

// User ke sabhi returns nikalne wala function
export const getMyReturns = async (req, res) => {
  try {
    const returns = await prisma.return.findMany({
      where: { userId: req.user.id },
      include: { product: true },
      orderBy: { returnedAt: "desc" },
    });

    res.json(returns);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch returns", error: error.message });
  }
};
