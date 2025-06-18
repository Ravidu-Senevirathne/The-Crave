// src/pages/Dashboard.js
import React from "react";
import SideBar from "../../components/Admin/SideBar";
import DashboardCard from "../../components/Admin/DashboardCard";
import RecentOrdersTable from "../../components/Admin/RecentOrdersTable";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DashboardCard title="Total Orders" value="1,234" change="+10%" />
          <DashboardCard title="Average Order Value" value="$45.67" change="+5%" />
          <DashboardCard title="Customer Satisfaction" value="95%" change="+2%" />
        </div>

        {/* Recent Orders */}
        <RecentOrdersTable />
      </div>
    </div>
  );
};

export default Dashboard;