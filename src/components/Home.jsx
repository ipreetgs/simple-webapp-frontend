// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-white">
      {/* Hero Section */}
      <div className="w-full max-w-5xl flex flex-col items-center justify-center px-4 py-12 sm:py-16 space-y-6 sm:space-y-8">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-2 text-blue-700 text-center">Welcome to Our Interactive Web App</h1>
        <img src="https://undraw.co/api/illustrations/undraw_online_connection_6778.svg" alt="Hero Illustration" className="h-32 sm:h-48 w-auto max-w-xs mx-auto mb-2 sm:mb-4" />
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 text-center max-w-2xl">
          Explore products, chat live, and read fresh blogs. Powered by React & Flask.
        </p>
        <Link
          to="/products"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg transition"
        >
          View Products
        </Link>
      </div>
      {/* Features Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-4">
        {[
          {
            icon: "💬",
            title: "Live Chat",
            desc: "Connect instantly with our support team and other users.",
          },
          {
            icon: "🛒",
            title: "Shop Products",
            desc: "Browse and purchase from our curated product selection.",
          },
          {
            icon: "📰",
            title: "Read Blogs",
            desc: "Stay updated with the latest news and articles.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border border-gray-100 hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-blue-600">{f.title}</h3>
            <p className="text-gray-600 text-center">{f.desc}</p>
          </div>
        ))}
      </div>
      {/* Testimonials Section */}
      <div className="w-full max-w-3xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex items-center gap-4">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="text-gray-700 mb-2">“This app made my workflow so much easier!”</p>
              <div className="text-sm text-blue-600 font-semibold">- Alex</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 flex items-center gap-4">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="text-gray-700 mb-2">“Beautiful design and super fast navigation.”</p>
              <div className="text-sm text-blue-600 font-semibold">- Priya</div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="w-full max-w-xl mx-auto mt-16 mb-12 px-4 text-center">
        <h3 className="text-xl font-bold mb-4 text-blue-700">Ready to get started?</h3>
        <Link
          to="/signup"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition"
        >
          Create an Account
        </Link>
      </div>
    </div>
  );
}
