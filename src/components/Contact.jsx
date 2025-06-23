import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-8 mt-8 sm:mt-12 border border-gray-100">
      <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Contact" className="h-12 w-12 sm:h-20 sm:w-20 mx-auto mb-2 sm:mb-4" />
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-blue-700">Contact Us</h2>
      <form className="flex flex-col gap-3 sm:gap-4">
        <input className="px-3 sm:px-4 py-2 rounded border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" />
        <input className="px-3 sm:px-4 py-2 rounded border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Email" />
        <textarea className="px-3 sm:px-4 py-2 rounded border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Message" rows={4} />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact; 