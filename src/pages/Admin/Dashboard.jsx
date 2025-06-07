// src/components/Dashboard.jsx
import React, { useState } from 'react';
import Header from '../../components/Admin/Header';
import FilterBar from '../../components/Admin/FilterBar';
import ItemCategories from '../../components/Admin/ItemCategories';
import MenuTable from '../../components/Admin/MenuTable';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeItems, setActiveItems] = useState(true);

  const menuItems = [
    { id: 1, name: 'French Fries', price: '$4.99', category: 'Sides', availability: 'Active' },
    { id: 2, name: 'Chicken Caesar Salad', price: '$11.99', category: 'Salads', availability: 'Active' },
    { id: 3, name: 'New York Strip', price: '$19.99', category: 'Entrees', availability: 'Active' },
    { id: 4, name: 'Cheeseburger', price: '$8.99', category: 'Burgers', availability: 'Active' },
    { id: 5, name: 'Apple Pie', price: '$5.99', category: 'Desserts', availability: 'Active' },
    { id: 6, name: 'Onion Rings', price: '$5.99', category: 'Sides', availability: 'Active' },
    { id: 7, name: 'Garden Salad', price: '$7.99', category: 'Salads', availability: 'Active' },
    { id: 8, name: 'Buffalo Wings', price: '$9.99', category: 'Appetizers', availability: 'Active' },
    { id: 9, name: 'Spaghetti & Meatballs', price: '$12.99', category: 'Entrees', availability: 'Active' },
    { id: 10, name: 'Chocolate Cake', price: '$6.99', category: 'Desserts', availability: 'Active' },
  ];

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeItems ? item.availability === 'Active' : !item.availability || item.availability === 'Inactive')
  );

  return (
    <div className="p-4">
        <Header />
      <h1 className="text-2xl font-bold mb-4">Menu Management</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded px-4 py-2 w-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters: All Items / Inactive Items */}
      <FilterBar activeItems={activeItems} setActiveItems={setActiveItems} />

      {/* Categories Buttons */}
      <ItemCategories />

      {/* Table */}
      <MenuTable items={filteredItems} />
    </div>
  );
};

export default Dashboard;