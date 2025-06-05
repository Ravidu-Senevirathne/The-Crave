// src/components/ComboSection.js
import React from 'react';

const ComboSection = () => {
  return (
    <section className="bg-gray-800 text-white py-15">
      {/* Container */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side (Text and Button) */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          {/* Title */}
          <h2 className="text-2xl font-bold mb-4">Meat Feast Combo</h2>

          {/* Items List */}
          <ul className="list-disc pl-5 mb-4">
            <li>1 Medium Meat Lover's Feast</li>
            <li>1 Medium BBQ Blaze</li>
          </ul>

          {/* Order Now Button */}
          <button className="bg-transparent border-4 border-white border-dashed text-white px-4 py-2 rounded-full hover:translate-x-5 transition-transform duration-300 ease-in-out hover:bg-amber-600 hover:border-none">
            ORDER NOW
          </button>
        </div>

        {/* Right Side (Images and Price) */}
        <div className="md:w-1/2">
          {/* Pizza Images */}
          <div className="flex overflow-hidden rounded-lg shadow-lg space-x-2.5">
            <img
              src="https://img.freepik.com/premium-photo/close-up-fresh-tasty-pizza_219193-3224.jpg?ga=GA1.1.1782891138.1747143947&semt=ais_items_boosted&w=740"
              alt="Meat Lover's Feast"
              className="w-1/2 h-full object-cover"
            />
            <img
              src="https://img.freepik.com/premium-photo/floating-pizzas-surrounded-by-flames-front-burning-oven-different-toppings-sparks-smoke_346316-70.jpg?ga=GA1.1.1782891138.1747143947&semt=ais_items_boosted&w=740"
              alt="BBQ Blaze"
              className="w-1/2 h-auto object-cover"
            />
          </div>

          {/* Price and Savings */}
          <div className="mt-4 text-right">
            <p className="text-xl font-bold">$21.99 - Save $4</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComboSection;