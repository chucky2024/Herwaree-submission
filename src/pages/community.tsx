import React from "react";
import { FaHome, FaHistory, FaCog, FaPalette, FaEllipsisH } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const CommunityForum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-purple-600 text-white shadow-md">
        <button className="text-3xl hover:text-pink-300 transition">&#9776;</button>
        <h1 className="text-2xl font-semibold">Community</h1>
        <button className="text-3xl hover:text-pink-300 transition">🔔</button>
      </header>

      {/* Search Bar */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 rounded-lg shadow-sm border-2 border-gray-300 focus:outline-none focus:border-purple-400 transition"
        />
      </div>

      {/* Tabs */}
      <div className="flex justify-around text-purple-700 mb-4">
        {['New', 'All Posts', 'Most Popular', 'Doctors', 'Diet'].map(tab => (
          <button
            key={tab}
            className="px-4 py-2 bg-white rounded-full shadow-sm hover:bg-purple-100 hover:shadow-lg transition"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Post List */}
      <div className="p-4 space-y-6">
        {[1, 2, 3].map((post, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-start space-x-4">
              <img
                src="/path-to-image.jpg"
                alt="User Avatar"
                className="w-14 h-14 rounded-full border-2 border-purple-400"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-purple-700">Admin Coral</h3>
                <p className="text-gray-500 text-sm">09-12-2024 12:04AM</p>
                <h4 className="mt-2 font-bold text-lg text-gray-800">Tips for light period flow</h4>
                <p className="text-gray-600 mt-1">
                  Consult your healthcare provider: Before embarking on any...
                </p>
                <div className="flex space-x-6 mt-4 text-gray-500">
                  <span>📑 54</span>
                  <span>💬 8</span>
                  <span>❤ 10</span>
                </div>
              </div>
              <button className="text-2xl text-gray-400 hover:text-gray-600 transition">...</button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-lg py-4 fixed bottom-0 inset-x-0 flex justify-around text-purple-600 border-t border-gray-200">
        <Link to="/herwaree/calendar" className="flex flex-col items-center text-gray-500 hover:text-purple-700 transition">
          <FaHome className="text-2xl" />
          <span className="text-sm">Home</span>
        </Link>
        <Link to="/history" className="flex flex-col items-center text-gray-500 hover:text-purple-700 transition">
          <FaHistory className="text-2xl" />
          <span className="text-sm">History</span>
        </Link>
        <Link to="/theme" className="flex flex-col items-center text-gray-500 hover:text-purple-700 transition">
          <FaPalette className="text-2xl" />
          <span className="text-sm">Theme</span>
        </Link>
        <Link to="/herwaree/settings" className="flex flex-col items-center text-gray-500 hover:text-purple-700 transition">
          <FaCog className="text-2xl" />
          <span className="text-sm">Settings</span>
        </Link>
        <Link to="/herwaree/more" className="flex flex-col items-center text-gray-500 hover:text-purple-700 transition">
          <FaEllipsisH className="text-2xl" />
          <span className="text-sm">More</span>
        </Link>
      </footer>
    </div>
  );
};

export default CommunityForum;