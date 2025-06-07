// src/components/Admin/FilterBar.jsx
import React from 'react';

const FilterBar = ({ activeItems, setActiveItems }) => {
  return (
    <div className="flex space-x-2 mb-4">
      <button
        onClick={() => setActiveItems(true)}
        className={`px-4 py-1 rounded ${activeItems ? 'bg-gray-200' : ''}`}
      >
        All Items
      </button>
       <button
        onClick={() => setActiveItems(true)}
        className={`px-4 py-1 rounded ${activeItems ? 'bg-gray-200' : ''}`}
      >
        Active Items
      </button>
      <button
        onClick={() => setActiveItems(false)}
        className={`px-4 py-1 rounded ${activeItems ? 'bg-gray-200' : ''}`}
      >
        Inactive Items
      </button>
    </div>
  );
};

export default FilterBar;