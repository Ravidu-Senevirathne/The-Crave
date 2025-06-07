// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span className="text-lg font-bold">The Crave Restaurant</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input type="text" placeholder="Search" className="border rounded px-2 py-1 focus:outline-none focus:border-blue-500" />
          <button type="button" className="absolute right-0 top-0 mt-1 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.817-4.818A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <button className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600">Help</button>
        <button className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0018 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.841c0 1.564-.056 3.128-.167 4.659A6.032 6.032 0 019 18.158v.644l-1.405-1.405A2.032 2.032 0 007 16zm1 0h7a2 2 0 012 2v1a2 2 0 01-2 2h-7a2 2 0 01-2-2v-1a2 2 0 012-2z" />
          </svg>
        </button>
        <div className="flex items-center">
          <img src="https://via.placeholder.com/30"  alt="User Profile" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;