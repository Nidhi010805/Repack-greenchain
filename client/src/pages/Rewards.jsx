import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Rewards() {
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pointsToRedeem, setPointsToRedeem] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    // Fetch user profile
    fetch("http://localhost:5000/api/user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => navigate("/login"));

    // Fetch redeem history
    fetch("http://localhost:5000/api/redeem/history", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => setHistory(data));
  }, [navigate]);

  const handleRedeemCashback = () => {
    const token = localStorage.getItem("token");
    if (!pointsToRedeem || pointsToRedeem <= 0) {
      setMessage("Enter valid points to redeem");
      return;
    }
    fetch("http://localhost:5000/api/redeem/redeem", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        type: "cashback",
        item: `${pointsToRedeem} Points Cashback`,
        pointsUsed: parseInt(pointsToRedeem),
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) return setMessage(data.error);
        setMessage(`Successfully Redeemed ₹${data.cashbackAmount} Cashback`);
        window.location.reload();
      })
      .catch(() => setMessage("Redeem failed"));
  };

  if (loading || !user) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Loading rewards...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-24 p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Your Rewards</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Green Points</h2>
          <p className="text-3xl font-bold text-green-600">{user.greenPoints} 🌿</p>
          <p className="text-sm text-gray-500 mt-2">Earn points by returning packaging</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Total Cashback Earned</h2>
          <p className="text-3xl font-bold text-green-600">₹{user.cashbackEarned}</p>
          <p className="text-sm text-gray-500 mt-2">Your contribution pays off!</p>
        </div>
      </div>

      {/* Redeem Section */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-lg font-semibold mb-4">Redeem Cashback</h2>
        <div className="flex gap-4 items-center">
          <input
            type="number"
            min="1"
            value={pointsToRedeem}
            onChange={(e) => setPointsToRedeem(e.target.value)}
            placeholder="Points to Redeem"
            className="border px-4 py-2 rounded flex-1"
          />
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            onClick={handleRedeemCashback}
          >
            Redeem
          </button>
        </div>
        {message && <p className="text-sm text-red-500 mt-2">{message}</p>}
      </div>

      {/* Redeem History */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Redeem History</h2>
        {history.length === 0 ? (
          <p className="text-gray-500">No redeem history found.</p>
        ) : (
          <ul className="divide-y">
            {history.map((h) => (
              <li key={h.id} className="py-3 flex justify-between">
                <div>
                  <p className="font-medium">{h.item}</p>
                  <p className="text-sm text-gray-500">{h.type} • {new Date(h.createdAt).toLocaleDateString()}</p>
                </div>
                <p className="font-semibold text-green-700">-{h.pointsUsed} points</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
