
// src/pages/Cart.jsx
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  return (
    <div className="pt-24 px-6 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cartItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
