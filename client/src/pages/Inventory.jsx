import React, { useEffect, useState } from "react";
import { getTopProducts } from "../services/api";

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getTopProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div className="p-4 rounded-lg shadow mt-6 mx-4">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Top Purchased Products</h2>
      <ul className="space-y-2">
        {products.length > 0 ? products.map((product, index) => (
          <li key={product.id} className="flex justify-between border-b pb-2">
            <span>{index + 1}. {product.name}</span>
            <span className="text-gray-600 text-sm">{product.purchasedCount} bought</span>
          </li>
        )) : <p>No data available yet.</p>}
      </ul>
    </div>
  );
};

export default Inventory;