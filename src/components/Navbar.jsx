// src/components/Navbar.jsx
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/chat", label: "Chat" },
];

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-[#FF5A1F]">
            MyApp
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                    isActive 
                      ? "text-[#FF5A1F]" 
                      : "text-gray-600 hover:text-[#FF5A1F]"
                  }`
                }
                {...(link.to === "/" ? { end: true } : {})}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            {user ? (
              <div className="flex items-center space-x-2">
                {user.is_admin && (
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-medium rounded-md ${
                        isActive
                          ? "bg-yellow-100 text-yellow-800"
                          : "text-gray-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    Admin
                  </NavLink>
                )}
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#FF5A1F] transition-colors duration-150"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                      isActive
                        ? "bg-[#FF5A1F] text-white"
                        : "text-[#FF5A1F] hover:bg-orange-50"
                    }`
                  }
                >
                  Sign in
                </NavLink>
                <NavLink
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#FF5A1F] transition-colors duration-150"
                >
                  Sign up
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#FF5A1F] hover:bg-gray-50 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium transition-colors duration-150 ${
                  isActive
                    ? "text-[#FF5A1F]"
                    : "text-gray-600 hover:text-[#FF5A1F] hover:bg-gray-50"
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
              {...(link.to === "/" ? { end: true } : {})}
            >
              {link.label}
            </NavLink>
          ))}
          
          {/* Mobile Auth Buttons */}
          <div className="border-t border-gray-200 pt-4 pb-3">
            {user ? (
              <div className="space-y-1">
                {user.is_admin && (
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      `block px-3 py-2 text-base font-medium ${
                        isActive
                          ? "text-[#FF5A1F]"
                          : "text-gray-600 hover:text-[#FF5A1F] hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Admin
                  </NavLink>
                )}
                <button
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-[#FF5A1F] hover:bg-gray-50"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium ${
                      isActive
                        ? "text-[#FF5A1F]"
                        : "text-gray-600 hover:text-[#FF5A1F] hover:bg-gray-50"
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign in
                </NavLink>
                <NavLink
                  to="/signup"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#FF5A1F] hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
