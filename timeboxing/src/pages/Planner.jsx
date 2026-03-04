// Planner.js
// Timeboxing planner view
// Left side: Brain dump (unfinished tasks)
// Right side: Daily agenda divided into 30-minute blocks
// Top-left: Priority tasks of the day

import React, { useState } from "react";
import Layout from "../pages/Layout";

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 6; hour < 22; hour++) {
    slots.push(`${hour}:00`);
    slots.push(`${hour}:30`);
  }
  return slots;
};

const Planner = () => {
  const [brainDump, setBrainDump] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priorities, setPriorities] = useState([]);

  const timeSlots = generateTimeSlots();

  // Add task to brain dump list
  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setBrainDump([...brainDump, newTask]);
    setNewTask("");
  };

  // Move task to priority section
  const addToPriority = (task) => {
    setPriorities([...priorities, task]);
    setBrainDump(brainDump.filter((t) => t !== task));
  };

  return (
    <Layout>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Daily Timeboxing Planner
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Priority Tasks */}
          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-red-500 mb-4">
              🔥 Priority Tasks
            </h2>

            {priorities.length === 0 && (
              <p className="text-gray-400 text-sm">
                No priority tasks yet.
              </p>
            )}

            <ul className="space-y-2">
              {priorities.map((task, index) => (
                <li
                  key={index}
                  className="bg-red-100 text-red-700 px-3 py-2 rounded-lg text-sm"
                >
                  {task}
                </li>
              ))}
            </ul>
          </div>

          {/* Brain Dump */}
          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              🧠 Brain Dump
            </h2>

            {/* Input */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Add unfinished task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                onClick={handleAddTask}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition duration-200 shadow-md"
              >
                Add
              </button>
            </div>

            {/* Task List */}
            <ul className="space-y-2">
              {brainDump.map((task, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg text-sm"
                >
                  <span>{task}</span>
                  <button
                    onClick={() => addToPriority(task)}
                    className="text-xs bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
                  >
                    Prioritize
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE - AGENDA */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md overflow-y-auto max-h-[80vh]">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            📅 Daily Agenda (30 min blocks)
          </h2>

          <div className="grid grid-cols-1 divide-y">
            {timeSlots.map((time, index) => (
              <div
                key={index}
                className="flex items-center h-14 px-4 hover:bg-blue-50 transition"
              >
                <span className="w-20 text-gray-500 font-medium">
                  {time}
                </span>
                <input
                  type="text"
                  placeholder="Assign task..."
                  className="flex-1 border-none focus:outline-none text-sm bg-transparent"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Planner;