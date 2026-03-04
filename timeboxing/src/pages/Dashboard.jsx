 // Dashboard.jsx
// Dashboard content only (Layout handles sidebar and main wrapper)

import React from "react";
import { Link } from "react-router-dom";
import Layout from '../pages/Layout';

const Dashboard = () => {
  return (
    <Layout>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Student Productivity Dashboard
        </h1>
        <p className="text-gray-500 mt-2">
          Organize your time. Focus on what matters.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-gray-500">Tasks Completed</h2>
          <p className="text-4xl font-bold text-green-500 mt-3">12</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-gray-500">Pending Tasks</h2>
          <p className="text-4xl font-bold text-yellow-500 mt-3">5</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-gray-500">Focus Hours Today</h2>
          <p className="text-4xl font-bold text-indigo-500 mt-3">4.5h</p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Quick Actions
        </h2>

        <div className="flex gap-4">
          <Link
            to="/planner"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition"
          >
            Start Timeboxing
          </Link>

          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-xl transition">
            View Reports
          </button>
        </div>
      </div>

    </Layout>
  );
};

export default Dashboard;