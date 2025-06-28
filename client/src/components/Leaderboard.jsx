import { useEffect, useState } from "react";
import axios from "axios";
import { Crown } from "lucide-react";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/leaderboard");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-700">🏆 Green Champions</h2>

      {/* Top 3 Layout */}
     <div className="flex justify-center gap-8 mb-12 flex-wrap">
  {users.slice(0, 3).map((user, index) => (
    <div key={user.id} className="flex flex-col items-center">
      <div className="relative">
        <img
          src={
            user.profilePhoto
              ? `http://localhost:5000/uploads/${user.profilePhoto}`
              : `https://ui-avatars.com/api/?name=${user.name}`
          }
          alt="Profile"
          className={`w-24 h-24 md:w-28 md:h-28 rounded-full border-4 ${
            index === 0 ? "border-yellow-400" : "border-green-300"
          } shadow-md`}
        />
        {index === 0 && (
          <Crown className="absolute -top-4 left-1/2 -translate-x-1/2 text-yellow-500" size={28} />
        )}
      </div>
      <h3 className="mt-2 font-semibold text-green-800">{user.name}</h3>
      <p className="text-green-600 font-bold">{user.greenPoints} pts</p>
    </div>
  ))}
</div>


      {/* Other Users List */}
      <div className="max-w-xl mx-auto space-y-4">
        {users.slice(3).map((user, index) => (
          <div key={user.id} className="bg-green-50 border border-green-200 p-3 rounded-lg flex items-center gap-3 shadow hover:bg-green-100 transition">
            <img
  src={
    user.profilePhoto
      ? `http://localhost:5000/uploads/${user.profilePhoto}`
      : `https://ui-avatars.com/api/?name=${user.name}`
  }
  alt="Profile"
  className="w-10 h-10 rounded-full"
/>

            <div className="flex-1">
              <h4 className="font-semibold text-green-800">{user.name}</h4>
              <p className="text-green-600 text-sm">{user.greenPoints} pts</p>
            </div>
            <span className="text-gray-500 font-medium">#{index + 4}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
