// This function fetches products from a fake store API
export const fetchProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data; // array of product objects
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // return empty array if error
  }
};
