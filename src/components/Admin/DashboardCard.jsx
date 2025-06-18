// src/components/DashboardCard.js
import React from "react";

const DashboardCard = ({ title, value, change }) => {
  return (
    <div className="bg-accent p-4 rounded shadow-md w-full md:w-1/3 mr-4 mb-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <p className="text-sm text-green-500 mt-1">{change}</p>
    </div>
  );
};

export default DashboardCard;