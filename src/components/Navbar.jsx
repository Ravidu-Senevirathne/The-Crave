import React from 'react';
import GooeyNav from './GooeyNav';

const Navbar = () => {
  const navItems = [
    { label: "ABOUT", href: "#" },
    { label: "SERVICES", href: "#" },
    { label: "MENU", href: "#" },
    { label: "CONTACT US", href: "#" },
    { label: "PAGES", href: "#" }
  ];

  return (
    <header className="bg-white py-4 px-8 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <span className="font-bold text-2xl text-gray-600 hover:text-orange-500 transition-colors duration-300 cursor-pointer">The Crave</span>
      </div>

      {/* GooeyNav Navigation */}
      <div className="relative h-12 mx-4">
        <GooeyNav
          items={navItems}
          particleCount={12}
          particleDistances={[60, 10]}
          particleR={60}
          initialActiveIndex={0}
          animationTime={500}
          timeVariance={200}
          colors={['#4B5563', '#4B5563', '#4B5563']} // Already gray-600 hex
        />
      </div>

      {/* CTA Button */}
      <button className="bg-orange-500 hover:bg-orange-700  text-white rounded-full px-6 py-2 text-sm font-bold transform transition-all  duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer ">
        SEE MENU
      </button>
    </header>
  );
};

export default Navbar;
