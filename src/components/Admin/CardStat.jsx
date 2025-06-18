import React from "react";

const CardStat = ({ title, value, change }) => (
  <div className="bg-[#f6f6f0] p-4 rounded-md shadow w-full max-w-xs">
    <p className="text-gray-600">{title}</p>
    <h2 className="text-2xl font-semibold">{value}</h2>
    <p className="text-green-600 text-sm">{change}</p>
  </div>
);

export default CardStat;
