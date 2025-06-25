import prisma from "../db/prismaClient.js";

export const createOrder = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || quantity < 1) {
      return res.status(400).json({ message: "Product and valid quantity required" });
    }

    const order = await prisma.order.create({
      data: {
        userId: req.user.id,
        productId,
        quantity,
      },
    });

    res.json({ message: "Order placed successfully", order });
  } catch (err) {
    console.error("Order creation failed:", err.message);
    res.status(500).json({ message: "Order failed" });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      where: { userId: req.user.id },
      include: { product: true },
      orderBy: { orderedAt: "desc" },
    });

    res.json(orders);
  } catch (err) {
    console.error("Failed to fetch orders:", err.message);
    res.status(500).json({ message: "Failed to get orders" });
  }
};
