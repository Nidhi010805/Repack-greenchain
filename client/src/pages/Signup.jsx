import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      return alert("Please fill in all fields");
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-gray-900 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-300 text-center">
          Create Your RePack Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-200">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-200">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-200">Sign up as</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none"
            >
              <option value="user">User</option>
              <option value="retailer">Retailer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
          Already have an account? <a href="/login" className="text-blue-600">Login</a>
        </p>
      </motion.div>
    </div>
  );
}
