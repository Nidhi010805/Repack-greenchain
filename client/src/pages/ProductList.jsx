import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product/all")
      .then(res => res.json())
      .then(data => {
        console.log("API Response:", data);
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Unexpected API response:", data);
          setProducts([]);
        }
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setProducts([]);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-20 p-6">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products
            .filter(p => p.imageUrl && p.imageUrl.trim() !== "" && p.price > 0)
            .map(p => (
              <ProductCard key={p.id} product={p} />
            ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
