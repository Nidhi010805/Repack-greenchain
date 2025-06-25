import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function InitiateReturn() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    axios.get("http://localhost:5000/api/order/my", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setOrders(res.data))
    .catch(err => {
      console.error(err);
      alert("Failed to load orders");
    });
  }, [navigate]);

  const initiateReturn = (orderId) => {
    const token = localStorage.getItem("token");
    axios.post("http://localhost:5000/api/returnpackaging/initiate", 
      { orderId },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(() => {
      alert("Return initiated successfully!");
      setOrders(prev => prev.filter(o => o.id !== orderId));
    })
    .catch(err => {
      console.error(err);
      alert(err.response?.data?.message || "Failed to initiate return");
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-24 px-4">
      <h1 className="text-2xl font-bold mb-6">Initiate Packaging Return</h1>
      
      {orders.length === 0 ? (
        <p className="text-gray-500">No eligible orders found for return.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map(order => (
            <li key={order.id} className="p-4 shadow rounded bg-white flex justify-between items-center">
              <div>
                <p className="font-medium">{order.product.name}</p>
                <p>Material: {order.product.material}</p>
                <p>Size: {order.product.size}</p>
              </div>
              <button 
                onClick={() => initiateReturn(order.id)}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                Return
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
