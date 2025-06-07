// src/components/Admin/ItemCategories.jsx
import React from 'react';

const ItemCategories = () => {
  return (
    <div className="flex space-x-2 mb-4">
      <button className="px-4 py-1 rounded bg-gray-200">Appetizers</button>
      <button className="px-4 py-1 rounded bg-gray-200">Burgers</button>
      <button className="px-4 py-1 rounded bg-gray-200">Desserts</button>
      <button className="px-4 py-1 rounded bg-gray-200">Entrees</button>
      <button className="px-4 py-1 rounded bg-gray-200">Salads</button>
      <button className="px-4 py-1 rounded bg-gray-200">Sides</button>
    </div>
  );
};

export default ItemCategories;