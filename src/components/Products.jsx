import React from "react";
import { motion } from "framer-motion";

const productList = [
  { name: "Product 1", desc: "A great product for your needs." },
  { name: "Product 2", desc: "Another awesome product." },
  { name: "Product 3", desc: "Best seller item!" },
];

const Products = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Products" className="h-12 w-12 mb-2 sm:mb-4" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-blue-700">Our Products</h2>
        <p className="text-gray-600 text-center max-w-xl text-sm sm:text-base">Browse our curated selection of products designed to make your life easier and more enjoyable.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {productList.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 border border-gray-100"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Product Icon" className="h-8 w-8 mb-1 sm:mb-2" />
            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-blue-600">{p.name}</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products; 