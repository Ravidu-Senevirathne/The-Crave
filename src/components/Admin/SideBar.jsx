// src/components/Admin/SideBar.jsx
import React from "react";
import { FiHome, FiUsers, FiBook, FiFolder, FiUtensils, FiStar, FiSettings } from "react-icons/fi";

const SideBar = () => {
  const navItems = [
    { icon: FiHome, label: "Dashboard" },
    { icon: FiBook, label: "Orders" },
    { icon: FiUsers, label: "Customers" },
    { icon: FiBook, label: "Menu" },
    { icon: FiFolder, label: "Category" },
    { icon: FiUtensils, label: "Foods" },
    { icon: FiStar, label: "Reviews" },
    { icon: FiSettings, label: "Settings" },
  ];

  return (
    <div className="bg-white p-4 h-screen shadow-md">
      <h2 className="text-lg font-bold mb-4">Restaurant Admin</h2>
      <ul>
        {navItems.map((item, index) => (
          <li key={index} className="flex items-center py-2 px-4 mt-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer">
            <span className="mr-2 text-primary">{React.createElement(item.icon)}</span>
            <span className="text-primary">{item.label}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button className="flex items-center py-2 px-4 mt-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer">
          <FiHome className="mr-2 text-primary" />
          View Site
        </button>
      </div>
    </div>
  );
};

export default SideBar;