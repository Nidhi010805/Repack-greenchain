import { Link, useNavigate, useLocation } from "react-router-dom";
import { Bell, User, LogOut } from "lucide-react";
import CartIcon from "../CartIcon";
import LikesIcon from "../LikesIcon";
import { useState } from "react";

export default function UserNavbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold tracking-tight text-green-700">
          RePack<span className="text-blue-600">Green</span>
        </Link>

        <form onSubmit={handleSearch} className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products or info..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-400"
          />
        </form>

        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link to="/" className={`hover:text-blue-600 ${location.pathname === "/" ? "text-blue-600 font-semibold" : ""}`}>Home</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/cart" className="hover:text-blue-600"><CartIcon /></Link>
          <Link to="/likes" className="hover:text-blue-600"><LikesIcon /></Link>

          <button className="hover:text-blue-600"><Bell /></button>

          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)} className="hover:text-blue-600"><User /></button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-sm z-10">
                <Link to="/user/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                <Link to="/my-returns" className="block px-4 py-2 hover:bg-gray-100">My Returns</Link>
                <Link to="/my-rewards" className="block px-4 py-2 hover:bg-gray-100">My Rewards</Link>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
