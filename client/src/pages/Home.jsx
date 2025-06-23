import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    setRole(userRole);
  }, []);

  const handleCTAClick = () => {
    if (!role) navigate("/signup");
    else if (role === "user") navigate("/user/dashboard");
    else if (role === "retailer") navigate("/retailer/dashboard");
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen grid md:grid-cols-2 place-items-center gap-12 px-6 md:px-24 py-32 bg-gradient-to-br from-green-100 to-blue-200 dark:from-gray-800 dark:to-gray-700">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left z-10"
        >
          <h1 className="text-6xl font-extrabold text-green-900 dark:text-green-300 leading-tight">
            RePack <span className="text-blue-600">GreenChain</span>
          </h1>
          <p className="mt-6 text-xl text-gray-700 dark:text-gray-200 max-w-xl">
            Return packaging. Earn rewards. Power the green economy. We simplify sustainable returns for a better planet.
          </p>
          <button
            onClick={handleCTAClick}
            className="mt-10 px-8 py-4 bg-green-700 text-white text-lg font-medium rounded-full hover:bg-green-800 transition-all shadow-lg"
          >
            {role ? "Go to Dashboard" : "Join the Movement"}
          </button>
        </motion.div>

        <motion.img
          src="/illustration-repack.png"
          alt="Eco Illustration"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl z-10"
        />
      </section>

      {/* Features Section */}
      <section className="py-28 px-6 md:px-24 bg-white dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-center text-green-900 dark:text-green-300 mb-16">
          Why RePack GreenChain?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {["Return Packaging", "Earn Rewards", "AI Suggestions"].map((title, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-10 rounded-3xl shadow-xl text-center"
            >
              <div className="text-5xl mb-6">{["📦", "🎁", "🤖"][index]}</div>
              <h3 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-md">
                {[
                  "Scan and return used packaging via QR codes.",
                  "Redeem points for eco-friendly rewards.",
                  "Receive smarter packaging recommendations."
                ][index]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-28 px-6 md:px-24 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-center text-green-900 dark:text-green-300 mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {["Scan & Return", "Retailer Approves", "Earn & Track"].map((title, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-xl border dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-6">{index + 1}</div>
              <h3 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-3">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-md">
                {[
                  "Use the app to scan packaging and drop it off.",
                  "Retailer verifies return at their GreenPoint.",
                  "User earns eco-points and sees impact stats."
                ][index]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-28 bg-green-100 dark:bg-green-900 text-center px-6">
        <h2 className="text-4xl font-bold text-green-900 dark:text-white mb-14">
          Together, We've Achieved:
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-3xl font-semibold text-green-800 dark:text-green-200">
          <div>
            ♻️ <CountUp end={12000} duration={3} separator="," /> items returned
          </div>
          <div>
            🌍 <CountUp end={8} duration={2.5} decimals={1} /> tons CO₂ saved
          </div>
          <div>
            🎁 <CountUp end={5000} duration={3} separator="," /> rewards redeemed
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-white dark:bg-gray-900 text-center px-6">
        <h2 className="text-4xl font-bold text-green-800 dark:text-green-300 mb-16">
          What Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {["Aarav", "Meera"].map((name, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md"
            >
              <p className="text-xl italic text-gray-700 dark:text-gray-200">
                “{
                  [
                    "RePack made me love recycling. Simple & rewarding!",
                    "Now I know my returns actually make a difference!"
                  ][index]
                }”
              </p>
              <div className="mt-6 font-semibold text-green-700 dark:text-green-300">– {name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-blue-50 dark:bg-blue-900 py-32 px-6 text-center overflow-hidden">
  {/* Background animation/blur effect */}
  <div className="absolute inset-0 bg-gradient-to-tr from-green-100/30 to-blue-200/30 dark:from-green-800/30 dark:to-blue-800/30 blur-2xl opacity-40 pointer-events-none" />

  <div className="relative z-10 max-w-3xl mx-auto">
    <h2 className="text-5xl font-extrabold text-blue-800 dark:text-white leading-tight mb-6">
      Ready to make an impact?
    </h2>
    <p className="text-2xl text-gray-700 dark:text-gray-200 mb-10 font-medium">
      Start returning. Start earning. Start saving the planet.
    </p>
    <button
      onClick={handleCTAClick}
      className="px-10 py-4 bg-green-600 text-white text-lg rounded-full hover:bg-green-700 transition-all shadow-xl hover:scale-105 active:scale-100"
    >
      {role === "user"
        ? "Continue Your Eco Journey"
        : role === "retailer"
        ? "Manage GreenPoint"
        : "Get Started with RePack"}
    </button>
  </div>
</section>

    </div>
  );
}