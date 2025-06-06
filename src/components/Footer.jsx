// src/components/Footer.js
import React, { useState } from 'react';

const Footer = () => {
  // State for email input
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add your form submission logic here
  };

  return (
    <footer className="bg-gray-800 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-brown-500"></span>
            <span className="ml-2 text-white font-bold">The Crave</span>
          </div>
          <p className="text-white">
            Food cear delivers fresh, healthy, and delicious meals straight to your doorstep daily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="list-none">
            <li className="mb-2"><a href="#" className="text-white hover:text-orange-500">Home</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:text-orange-500">About</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:text-orange-500">Menu</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-white font-bold mb-4">Contact Info</h3>
          <p className=" text-white mb-2">123 Bridge Street Nowhere Land, LA 12345 United States</p>
          <p className=" text-white mb-2">+1-234-567-8901</p>
          <p>foodcear@gmail.com</p>
        </div>

        {/* More Section */}
        <div>
          <h3 className="text-white font-bold mb-4">More</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;