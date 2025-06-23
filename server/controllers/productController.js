import prisma from "../db/prismaClient.js";

// All products fetch API
export const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};
