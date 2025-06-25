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
        alert(`Return successful! You earned ${data.totalPoints} Green Points 🎉`);
        setOrders(prev => prev.filter(o => o.id !== orderId));
      } else {
        alert(data.message || "Failed to initiate return");
      }
    } catch (err) {
      console.error(err);
      alert("Error initiating return");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-24 p-4">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>

      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No eligible orders found for return.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {orders.map((order) => (
            <div key={order.id} className="border shadow p-4 rounded">
              <img
                src={order.product.imageUrl}
                alt={order.product.name}
                className="h-32 mx-auto object-contain"
              />
              <h3 className="font-semibold mt-2">{order.product.name}</h3>
              <p className="text-sm text-gray-600">{order.product.category}</p>
              <p>₹ {order.product.price}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Status: {order.status}</p>

              <button 
                onClick={() => initiateReturn(order.id)}
                className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                Initiate Packaging Return
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
