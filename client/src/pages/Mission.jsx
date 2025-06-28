import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function OurMission() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white to-green-50 overflow-hidden">

      {/* Subtle Background Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-2xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl backdrop-blur-xl border border-green-100 p-12 rounded-3xl relative z-10"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full shadow-lg">
            <Leaf size={32} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-500 to-green-700 text-transparent bg-clip-text mb-4">
          Our Mission
        </h2>

        {/* Decorative Underline */}
        <div className="flex justify-center mb-6">
          <div className="h-1 w-24 bg-green-500 rounded-full"></div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          We aim to redefine sustainable retail by enabling easy packaging returns and rewarding customers for responsible actions — building a greener, circular economy together.
        </motion.p>
      </motion.div>
    </section>
  );
}
