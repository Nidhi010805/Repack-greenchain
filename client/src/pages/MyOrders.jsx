import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");

      try {
        const res = await fetch("http://localhost:5000/api/order/my", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) setOrders(data);
        else alert(data.message || "Failed to fetch orders");
      } catch (err) {
        console.error(err);
        alert("Error fetching orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  const initiateReturn = async (orderId) => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    const order = orders.find((o) => o.id === orderId);
    const status = order?.returnPackaging?.status;

    if (status === "pending") {
      alert("Return already initiated and pending approval.");
      return;
    }

    if (status === "approved") {
      alert("Return already approved, cannot initiate again.");
      return;
    }

    // Allow initiation if status is 'rejected' or undefined (no return yet)
    try {
      const res = await fetch("http://localhost:5000/api/returnpackaging/initiate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ orderId }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(`Return successful! You earned ${data.totalPoints || 0} Green Points 🎉`);

        // Update the orders state: set returnPackaging.status to 'pending'
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === orderId
              ? { ...order, returnPackaging: { status: "pending" } }
              : order
          )
        );
      } else {
        alert(data.message || "Failed to initiate return");
      }
    } catch (err) {
      console.error(err);
      alert("Error initiating return");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center animate-fadeIn">My Orders</h2>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-500 mt-20 text-lg">No eligible orders found for return.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {orders.map((order) => {
            const returnStatus = order.returnPackaging?.status;

            return (
              <div
                key={order.id}
                className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={order.product.imageUrl}
                  alt={order.product.name}
                  className="h-40 w-full object-contain mb-4"
                />
                <h3 className="font-semibold text-lg mb-1">{order.product.name}</h3>
                <p className="text-gray-600 mb-1">{order.product.category}</p>
                <p className="text-green-700 font-semibold mb-2">₹ {order.product.price}</p>
                <p className="mb-1">Quantity: {order.quantity}</p>
                <p className="mb-4">
                  Status:{" "}
                  <span
                    className={`capitalize font-semibold ${
                      returnStatus === "approved"
                        ? "text-green-600"
                        : returnStatus === "pending"
                        ? "text-yellow-600"
                        : returnStatus === "rejected"
                        ? "text-red-600"
                        : "text-gray-700"
                    }`}
                  >
                    {returnStatus || order.status}
                  </span>
                </p>

                {/* Show button only if no return or rejected */}
                {(returnStatus !== "approved" && returnStatus !== "pending") && (
                  <button
                    onClick={() => initiateReturn(order.id)}
                    className="w-full py-2 rounded text-white font-semibold transition-colors duration-300 bg-green-600 hover:bg-green-700"
                  >
                    Initiate Packaging Return
                  </button>
                )}

                {/* Disabled button if pending */}
                {returnStatus === "pending" && (
                  <button
                    disabled
                    className="w-full py-2 rounded text-white font-semibold bg-gray-400 cursor-not-allowed"
                  >
                    Return Initiated
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
      `}</style>
    </div>
  );
}
