import { useEffect, useState } from "react";
import ReturnForm from "../components/ReturnForm";

export default function MyReturns() {
  const [returns, setReturns] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReturns = () => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/return/my", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        setReturns(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(fetchReturns, []);

  return (
    <div className="max-w-4xl mx-auto mt-24 p-6">
      <h1 className="text-2xl font-bold mb-6 text-green-700">Return Your Packaging</h1>

      {/* Return Form */}
      <ReturnForm onSuccess={fetchReturns} />

      <hr className="my-6" />

      <h2 className="text-xl font-semibold mb-4">Your Return History</h2>

      {loading ? (
        <p>Loading your returns...</p>
      ) : returns.length === 0 ? (
        <p className="text-gray-500">No returns yet. Start returning packaging to earn Green Points!</p>
      ) : (
        <ul className="space-y-3">
          {returns.map(r => (
            <li key={r.id} className="bg-white shadow rounded p-4 flex justify-between">
              <div>
                <p className="font-medium">{r.product.name} (x{r.quantity})</p>
                <p className="text-sm text-gray-500">Returned on {new Date(r.returnedAt).toLocaleDateString()}</p>
              </div>
              <span className="text-green-600 font-medium">+{r.points} Points</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
