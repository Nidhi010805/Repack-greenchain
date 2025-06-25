import { Link, useLocation } from "react-router-dom";
import { Bell } from "lucide-react";

export default function PublicNavbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold tracking-tight text-green-700">
          RePack<span className="text-blue-600">Green</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link to="/" className={`hover:text-blue-600 ${location.pathname === "/" ? "text-blue-600 font-semibold" : ""}`}>Home</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <button className="hover:text-blue-600"><Bell /></button>
          <Link to="/login" className="hover:text-blue-600">Login</Link>
          <Link to="/signup" className="hover:text-blue-600">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
