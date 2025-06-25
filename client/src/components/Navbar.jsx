import { useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import LikesIcon from "./LikesIcon";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, User, Bell, LogOut } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    setIsLoggedIn(!!token);
    setUserRole(role);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setProfileOpen(false);
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

          <Link to="/" className={`hover:text-blue-600 ${location.pathname === "/" ? "text-blue-600 font-semibold" : ""}`}>
            Home
          </Link>

          {userRole !== "retailer" && (
            <>
              <Link to="/products" className={`hover:text-blue-600 ${location.pathname === "/products" ? "text-blue-600 font-semibold" : ""}`}>
                Products
              </Link>

              <Link to="/cart" className="hover:text-blue-600">
                <CartIcon />
              </Link>

              {isLoggedIn && (
                <Link to="/likes" className="hover:text-blue-600">
                  <LikesIcon />
                </Link>
              )}
            </>
          )}

          {isLoggedIn && (
            <>
              <div className="relative">
                <button onClick={() => setNotificationsOpen(!notificationsOpen)} className="hover:text-blue-600">
                  <Bell />
                </button>
                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md text-sm z-10">
                    <div className="p-3 font-semibold border-b">Notifications</div>
                    <ul className="max-h-60 overflow-y-auto">
                      <li className="px-4 py-2 hover:bg-gray-100">♻️ You earned 20 green points!</li>
                      <li className="px-4 py-2 hover:bg-gray-100">🎁 New rewards added.</li>
                      <li className="px-4 py-2 hover:bg-gray-100">📦 Your return was processed.</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative">
                <button onClick={() => setProfileOpen(!profileOpen)} className="hover:text-blue-600">
                  <User />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-sm z-10">
                    <Link
                      to={userRole === "retailer" ? "/retailer/dashboard" : "/user/dashboard"}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>

                    {userRole === "user" && (
                      <>
                        <Link to="/my-returns" className="block px-4 py-2 hover:bg-gray-100">My Returns</Link>
                        <Link to="/my-rewards" className="block px-4 py-2 hover:bg-gray-100">My Rewards</Link>
                      </>
                    )}

                    {userRole === "retailer" && (
                      <>
                        <Link to="/retailer/inventory" className="block px-4 py-2 hover:bg-gray-100">Inventory</Link>
                        <Link to="/retailer/orders" className="block px-4 py-2 hover:bg-gray-100">Orders</Link>
                      </>
                    )}

                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

          {!isLoggedIn && (
            <>
              <Link to="/login" className="hover:text-blue-600">Login</Link>
              <Link to="/signup" className="hover:text-blue-600">Sign Up</Link>
            </>
          )}
        </div>

        <button className="md:hidden text-green-700" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md space-y-3">
          <Link to="/" onClick={() => setOpen(false)} className="block py-2">Home</Link>

          {userRole !== "retailer" && (
            <>
              <Link to="/products" onClick={() => setOpen(false)} className="block py-2">Products</Link>
              <Link to="/cart" onClick={() => setOpen(false)} className="block py-2">Cart</Link>
              {isLoggedIn && (
                <Link to="/likes" onClick={() => setOpen(false)} className="block py-2">Likes</Link>
              )}
            </>
          )}

          {isLoggedIn && (
            <>
              <Link to={userRole === "retailer" ? "/retailer/dashboard" : "/user/dashboard"} onClick={() => setOpen(false)} className="block py-2">
                Dashboard
              </Link>

              {userRole === "user" && (
                <>
                  <Link to="/my-returns" onClick={() => setOpen(false)} className="block py-2">My Returns</Link>
                  <Link to="/my-rewards" onClick={() => setOpen(false)} className="block py-2">My Rewards</Link>
                </>
              )}

              {userRole === "retailer" && (
                <>
                  <Link to="/retailer/inventory" onClick={() => setOpen(false)} className="block py-2">Inventory</Link>
                  <Link to="/retailer/orders" onClick={() => setOpen(false)} className="block py-2">Orders</Link>
                </>
              )}

              <button onClick={handleLogout} className="block w-full text-left py-2">Logout</button>
            </>
          )}

          {!isLoggedIn && (
            <>
              <Link to="/login" onClick={() => setOpen(false)} className="block py-2">Login</Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="block py-2">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
