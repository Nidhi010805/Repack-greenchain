import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/api/product/all")
      .then(res => res.json())
      .then(setProducts)
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-20 p-6">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
