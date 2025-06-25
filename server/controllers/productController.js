import prisma from "../db/prismaClient.js";

// Sab products fetch API with image, price, description
export const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        category: true,
        material: true,
        size: true,
        pointsPerUnit: true,
        price: true,
        description: true,
        imageUrl: true,
      },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};
