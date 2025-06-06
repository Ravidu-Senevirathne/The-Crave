// src/components/FeaturesSection.js
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-white py-16">
      {/* Header */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-1xl font-bold mb-8">
          Faster Food Delivery Service
        </h1>
        <h1 className="text-4xl font-bold mb-8">
          Fast, Reliable, and Delicious —<br />
          That’s Our Promise
        </h1>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column (Cards) */}
        <div>
          {/* Card 1: 100% Natural */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                🌿
              </span>
              <h2 className="text-xl font-bold">100% Natural</h2>
            </div>
            <p className="text-gray-700">
              We believe great taste starts with great ingredients. That's why every meal we deliver is made using 100% natural, fresh, and high-quality ingredients — with no artificial flavors or preservatives. Enjoy food that's not only delicious, but also better for your health.
            </p>
          </div>

          {/* Card 2: Optimal Weight Loss */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                💪
              </span>
              <h2 className="text-xl font-bold">Optimal Weight Loss</h2>
            </div>
            <p className="text-gray-700">
              Our menu includes balanced, portion-controlled meals designed to support optimal weight loss. Packed with nutrients, low in empty calories, and always satisfying — we make healthy eating simple, delicious, and sustainable.
            </p>
          </div>

          {/* Card 3: Diet Health Service */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                🏥
              </span>
              <h2 className="text-xl font-bold">Diet Health Service</h2>
            </div>
            <p className="text-gray-700">
              Our Diet Health Service is designed to help you eat smarter, not harder. Whether you're managing calories, we offer meals tailored to your health goals — all crafted with fresh ingredients and delivered with care. Healthy living has never been this easy or this tasty.
            </p>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="flex justify-center items-center">
          <img
            src="src\assets\food.jpeg"
            alt="Sushi Plate"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;