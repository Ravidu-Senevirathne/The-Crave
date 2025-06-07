// src/components/MenuTable.jsx
import React from 'react';

const MenuTable = ({ items }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2">Name</th>
          <th className="border-b p-2">Price</th>
          <th className="border-b p-2">Category</th>
          <th className="border-b p-2">Availability</th>
          <th className="border-b p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="bg-white hover:bg-gray-100">
            <td className="border-b p-2">{item.name}</td>
            <td className="border-b p-2">{item.price}</td>
            <td className="border-b p-2">{item.category}</td>
            <td className="border-b p-2">
              <span className="bg-gray-200 px-2 py-1 rounded text-sm">{item.availability}</span>
            </td>
            <td className="border-b p-2">
              <button className="text-blue-500 cursor-pointer">Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MenuTable;