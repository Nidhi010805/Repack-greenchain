import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function LikesPage() {
  const [likes, setLikes] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/likes/my", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLikes(res.data);
      } catch (err) {
        console.error("Failed to fetch likes", err);
      }
    };

    if (token) fetchLikes();
  }, [token]);

  if (!token)
    return (
      <div className="text-center mt-20 text-gray-600 text-lg">
        Please login to view your liked products.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Heading with spacing below navbar */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">❤️ Your Liked Products</h1>
        <p className="text-gray-500 mt-2">All products you marked as favourite</p>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4">
        {likes.length === 0 ? (
          <div className="text-center text-gray-500 text-lg mt-20">
            You haven't liked any products yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {likes.map((like) =>
              like.product ? (
                <ProductCard
                  key={like.id}
                  product={like.product}
                  showDelete={true}
                  onDelete={() =>
                    setLikes((prev) => prev.filter((l) => l.productId !== like.product.id))
                  }
                />
              ) : (
                <div key={like.id}>Product data unavailable</div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
