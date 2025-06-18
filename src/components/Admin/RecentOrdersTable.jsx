// src/components/RecentOrdersTable.js
import React from "react";
import { FiCheckCircle, FiClock, FiXCircle } from "react-icons/fi";

const RecentOrdersTable = () => {
  const orders = [
    { id: "#12345", customer: "Ava Bennett", date: "2024-03-15", status: "Delivered", total: "$52.00" },
    { id: "#12346", customer: "Owen Carter", date: "2024-03-16", status: "Pending", total: "$38.50" },
    { id: "#12347", customer: "Chloe Reed", date: "2024-03-17", status: "Cancelled", total: "$25.75" },
    { id: "#12348", customer: "Ethan Clark", date: "2024-03-18", status: "Delivered", total: "$65.20" },
    { id: "#12349", customer: "Mia Harper", date: "2024-03-19", status: "Pending", total: "$42.90" },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
      <div className="bg-white rounded shadow-md overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">Customer</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.total}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded text-xs flex items-center gap-1 ${
                      order.status === "Delivered"
                        ? "bg-success text-green-800"
                        : order.status === "Pending"
                        ? "bg-warning text-yellow-800"
                        : "bg-danger text-red-800"
                    }`}
                  >
                    {order.status === "Delivered" && <FiCheckCircle />}
                    {order.status === "Pending" && <FiClock />}
                    {order.status === "Cancelled" && <FiXCircle />}
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrdersTable;