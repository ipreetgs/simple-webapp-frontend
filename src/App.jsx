// src/App.jsx
import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import Blog from "./components/Blog";
import Chat from "./components/Chat";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Signup from "./components/Signup";

export const NotificationContext = createContext();

function NotificationPanel({ message, type, onClose }) {
  if (!message) return null;
  return (
    <div className={`fixed top-0 left-0 w-full z-[60] flex justify-center transition-all duration-300 ${type === "error" ? "bg-red-500" : "bg-blue-600"}`}>
      <div className="text-white px-6 py-3 flex items-center gap-4 w-full max-w-2xl">
        <span className="flex-1">{message}</span>
        <button onClick={onClose} className="text-white font-bold text-xl leading-none">&times;</button>
      </div>
    </div>
  );
}

function App() {
  const [notification, setNotification] = useState({ message: "", type: "info" });
  const showNotification = (message, type = "info") => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: "", type: "info" }), 4000);
  };
  const closeNotification = () => setNotification({ message: "", type: "info" });

  return (
    <NotificationContext.Provider value={showNotification}>
      <NotificationPanel message={notification.message} type={notification.type} onClose={closeNotification} />
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="container mx-auto px-4 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </NotificationContext.Provider>
  );
}

export default App;
