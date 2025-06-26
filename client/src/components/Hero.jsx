import React from 'react'
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {

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
  <div className="font-sans text-gray-800">
    
    <section className="bg-gradient-to-b  py-20 text-center px-4">
        <div className="absolute top-0 right-0 translate-x-2.5 w-72 h-72 md:w-[400px] md:h-[400px] bg-teal-500/30 rounded-full blur-3xl" />
        <h1 className="text-5xl md:text-5xl font-bold text-teal-600 leading-tight mb-4">
          SMARTER,<span className="text-green-600">GREENER RETAIL</span> <br className="hidden md:block"/> - POWERED BY AI
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-sm md:text-base">
          Forecast demand. Optimize routes. Reduce packaging waste. Track CO₂. 
          Reverse carbon footprint of ecommerce.
        </p>
        <button onClick={handleCTAClick} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold text-sm md:text-base transform transition-transform duration-300 hover:scale-105">{role ? "Go to Dashboard" : "Join Now"}</button>
         <div className="absolute bottom-0 left-0 -translate-x-2.5 w-72 h-72 md:w-[400px] md:h-[400px] bg-teal-500/30 rounded-full blur-3xl" />
      </section>

      <section className="text-center">
        <div className="mt-10 mb-10">
          <img src="/section2.png" alt="GreenChain Illustration" className="mx-auto w-full max-w-4xl" />
        <div className="absolute top-[700px] right-0 translate-x-2.5 bottom-0 w-72 h-72 md:w-[400px] md:h-[400px] bg-teal-500/30 rounded-full blur-3xl" />
        </div>
      </section>

  <section className="py-12 bg-white">
  <div className="absolute top-[1000px] left-0 -translate-x-2.5 w-72 h-72 md:w-[400px] md:h-[400px] bg-teal-500/30 rounded-full blur-3xl" />
  <div className="max-w-6xl mx-auto px-4">
    <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-xl p-12 shadow-md">
    <h2 className="text-[40px] md:text-[50px] font-bold text-start text-teal-600 mb-10">FEATURES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        <div className="flex items-center p-6 gap-4">
        <div className="w-28 h-28 p-3 rounded-lg backdrop-blur-md bg-white/10 border shadow-black-700/50 shadow-md flex items-center justify-center  transform transition-transform duration-300 hover:scale-105">
          <img src="/icon1.png" alt="AI Forecasting" className="w-20 h-20" />
          </div>
          <div>
            <h3 className="font-semibold text-black mb-2">AI-Powered Demand Forecasting</h3>
            <p className="text-sm">Lower emissions via smarter shipping & packaging</p>
          </div>
        </div>

        <div className="flex items-center p-6 gap-4">
        <div className="w-28 h-28 p-3 rounded-lg backdrop-blur-md bg-white/10 border shadow-black-700/50 shadow-md flex items-center justify-center  transform transition-transform duration-300 hover:scale-105">
          <img src="/icon3.png" alt="Route Optimization" className="w-20 h-20" /></div>
          <div>
            <h3 className="font-semibold text-black mb-2">Route Optimization</h3>
            <p className="text-sm">Minimize delivery emissions and lead time</p>
          </div>
          </div>

        <div className="flex items-center p-6 gap-4">
          <div className="w-28 h-28 p-3 rounded-lg backdrop-blur-md bg-white/10 border shadow-black-700/50 shadow-md flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
          <img src="/icon2.png" alt="CO2 Dashboard" className="w-20 h-20" /></div>
          <div>
            <h3 className="font-semibold text-black mb-2">Real-Time CO₂ & Waste Tracking Dashboard</h3>
            <p className="text-sm">Get actionable carbon data & suggestions</p>
          </div>
        </div>

        <div className="flex items-center p-6 gap-4">
          <div className="w-28 h-28 p-3 rounded-lg backdrop-blur-md bg-white/10 border shadow-black-700/50 shadow-md flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
          <img src="/icon4.png" alt="Packaging Return" className="w-20 h-20" /></div>
          <div>
            <h3 className="font-semibold text-black mb-2">Packaging Return & Reward System</h3>
            <p className="text-sm">Gamified incentives for circular ecommerce</p>
          </div>
        </div>

        </div>
      </div>
    </div>
     <div className="absolute top-[1300px] right-0 translate-x-2.5 bottom-0 w-72 h-72 md:w-[400px] md:h-[400px] bg-teal-500/30 rounded-full blur-3xl" />
</section>


      <section className="bg-teal-600 py-12 text-center">
        <h2 className="text-2xl md:text-2xl font-bold text-white mb-6">Together We’ve Achieved :</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="backdrop-blur-lg bg-white/30 rounded-lg p-6 shadow-md w-64 transform transition-transform duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-white">
              <CountUp end={12000} duration={3} separator="," />+</div>
            <div className="text-sm text-white">packages returned</div>
          </div>
          <div className="backdrop-blur-lg bg-white/30 rounded-lg p-6 shadow-md w-64 transform transition-transform duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-white">
              <CountUp end={8} duration={2.5} decimals={1} />+</div>
            <div className="text-sm text-white">tons CO₂ saved</div>
          </div>
        </div>
      </section>

      <section className="pt-24 pb-0 mb-[-40px] px-0">
        <div className="absolute top-[1800px] left-0 -translate-x-2.5 w-72 h-72 md:w-[400px] md:h-[400px] bg-teal-500/30 rounded-full blur-3xl" />
        <div className="flex">
        <img src="/Boxes.png" className='h-80 w-80 pt-20' alt="" />
        <div className="mb-0 text-center w-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">Ready to make an Impact?</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm md:text-base">
          Let’s drive smarter routes, greener deliveries, and circular packaging — CO₂-optimized ecommerce is here.
        </p>
        <button onClick={handleCTAClick} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold text-sm md:text-base transform transition-transform duration-300 hover:scale-105">
          {role === "user"
            ? "Collect more Green Points"
            : role === "retailer"
            ? "Manage Smarty"
            : "Explore more Features"}
        </button>
        </div>
          <img src="/Truck.png" className="h-96 w-96" alt="" />
       </div>
       <div className="absolute top-[2100px] right-0 translate-x-2.5 bottom-0 w-72 h-72 md:w-[400px] md:h-[400px] bg-teal-500/30 rounded-full blur-3xl" />
      </section>

    </div>
  )
}

export default Hero