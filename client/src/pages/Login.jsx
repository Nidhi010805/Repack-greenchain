import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please fill in all fields");
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        // ✅ Navigate based on actual backend role
        if (data.role?.toLowerCase() === "retailer") {
          navigate("/retailer/dashboard");
        } else {
          navigate("/user/dashboard");
        }
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Try again.");
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
          Login to RePack
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-200">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-blue-600">Sign up</a>
        </p>
      </motion.div>
    </div>
  );
}
