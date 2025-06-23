import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/api/user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-24 px-4">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Welcome, {user.name}</h1>

      {/* Account Details */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Account Information</h2>
          <p><span className="font-medium">Email:</span> {user.email}</p>
          <p><span className="font-medium">Mobile:</span> {user.mobile || "Not Provided"}</p>
          <p><span className="font-medium">Green Points:</span> {user.greenPoints}</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-2">Membership Level</h2>
          <p className="text-2xl font-bold text-green-600">
            {user.greenPoints >= 100 ? "🌍 Green Warrior" : user.greenPoints >= 50 ? "🌱 Silver Member" : "🌿 Bronze Member"}
          </p>
          <p className="text-sm text-gray-500 mt-2">Contribute more to unlock badges</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <Card title="My Orders" desc={`${user.totalOrders || 0} orders placed`} onClick={() => navigate("/my-orders")} />
        <Card title="Returns" desc={`${user.totalReturns || 0} returns processed`} onClick={() => navigate("/my-returns")} />
        <Card title="Rewards" desc={`${user.greenPoints} points available`} onClick={() => navigate("/my-rewards")} />
        <Card title="Settings" desc="Manage account info" onClick={() => navigate("/user/settings")} />
      </div>

      {/* Referral & Offers */}
      <div className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Refer & Earn</h2>
        <p className="text-gray-600 mb-4">Invite your friends and earn 50 Green Points for each signup!</p>
        <div className="flex items-center">
          <input
            type="text"
            value={`https://repack.com/invite/${user.id}`}
            readOnly
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md"
          />
          <button
            className="px-4 bg-green-600 text-white rounded-r-md hover:bg-green-700"
            onClick={() => {
              navigator.clipboard.writeText(`https://repack.com/invite/${user.id}`);
              alert("Referral link copied!");
            }}
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}

function Card({ title, desc, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="cursor-pointer bg-white shadow p-6 rounded-lg hover:ring-2 ring-green-300 text-center"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500">{desc}</p>
    </motion.div>
  );
}
