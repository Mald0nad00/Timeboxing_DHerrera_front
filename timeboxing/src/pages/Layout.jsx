// Layout.jsx
// Reusable layout with sidebar
// Wraps all authenticated pages (Dashboard, Planner, etc.)

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Planner", path: "/planner" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-xl hidden md:flex flex-col p-6">
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-indigo-600">
            TimeBoxing
          </h2>
          <p className="text-sm text-gray-400">
            Student Planner
          </p>
        </div>

        <nav className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 rounded-xl transition ${
                location.pathname === item.path
                  ? "bg-indigo-100 text-indigo-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-10">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition">
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
};

export default Layout;