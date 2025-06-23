import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyReturns() {
  const [returns, setReturns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/api/returns/my", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => setReturns(data))
      .catch(err => {
        console.error(err);
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div className="max-w-4xl mx-auto mt-24 px-4">
      <h1 className="text-2xl font-bold mb-6 text-green-700">My Returns</h1>

      {returns.length === 0 ? (
        <p className="text-gray-500">No returns processed yet.</p>
      ) : (
        <div className="space-y-4">
          {returns.map(ret => (
            <div key={ret.id} className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
              <div>
                <h2 className="font-semibold">{ret.product.name}</h2>
                <p className="text-sm text-gray-500">Category: {ret.product.category}</p>
                <p className="text-sm text-gray-500">Quantity: {ret.quantity}</p>
                <p className="text-sm text-gray-500">Returned At: {new Date(ret.returnedAt).toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <p className="text-green-600 font-bold text-lg">+{ret.points} Points</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
