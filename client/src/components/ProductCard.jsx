import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";

export default function ProductCard({ product }) {
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = cart.some((item) => item.id === product.id);
    if (!isAlreadyInCart) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      setAddedToCart(true);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 dark:bg-gray-800">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-1">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{product.brand}</p>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <p className="text-green-800 dark:text-green-400 font-bold text-lg mb-3">
          {product.price}
        </p>

        <div className="flex justify-between items-center">
          <a
            href={product.merchantUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition"
          >
            Buy Now
          </a>

          <Link
            to="/scan-return"
            state={{ initialProduct: product.id }}
            className="px-3 py-1 text-green-600 border border-green-600 text-sm rounded hover:bg-green-50 transition"
          >
            Return
          </Link>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-1 px-3 py-1 text-sm rounded transition ${
              addedToCart
                ? "bg-green-100 text-green-700 border border-green-600"
                : "text-blue-600 border border-blue-600 hover:bg-blue-50"
            }`}
          >
            <ShoppingCart size={16} />
            {addedToCart ? "Added" : "Add to Cart"}
          </button>

          <button
            className="flex items-center gap-1 px-3 py-1 text-sm text-red-500 border border-red-500 rounded hover:bg-red-50 transition"
            title="Add to Wishlist"
          >
            <Heart size={16} />
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
