// src/components/MenuSection.js
import React from 'react';

const MenuSection = () => {
  // Sample pizza data
  const pizzas = [
    {
      id: 1,
      name: 'Margherita Classic',
      description:
        'A timeless favorite made with fresh mozzarella and hand-torn basil leaves — all on a perfectly crispy crust. Simple, authentic, and full of flavor.',
      price: 'LKR 1,850.00',
      imageUrl: 'https://img.freepik.com/free-photo/close-up-delicious-fast-food_23-2151910279.jpg?ga=GA1.1.1782891138.1747143947&semt=ais_items_boosted&w=740',
    },
    {
      id: 2,
      name: 'Spicy Chicken Inferno',
      description:
        'A bold pizza for those who like it hot. Turn up the heat with juicy grilled chicken, spicy jalapeños, red onions, and a fiery chili sauce blend.',
      price: 'LKR 2,200.00',
      imageUrl: 'https://img.freepik.com/free-photo/mushroom-pizza-with-tomato-sauce-served-round-bamboo-board_114579-1908.jpg?ga=GA1.1.1782891138.1747143947&semt=ais_items_boosted&w=740',
    },
    {
      id: 3,
      name: 'Veggie Delight Supreme',
      description:
        'Loaded with colorful bell peppers, mushrooms, olives, and onions, this veggie-packed pizza delivers freshness in every bite — no meat, all flavor.',
      price: 'LKR 1,500.00',
      imageUrl: 'https://img.freepik.com/free-photo/italian-pizza-with-chicken-salami-zucchini-tomatoes-herbs_2829-10838.jpg?ga=GA1.1.1782891138.1747143947&semt=ais_items_boosted&w=740',
    },
  ];

  return (
    <section className="bg-white py-16">
      {/* Header */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">
          See What’s On The Plate Menu 🔥🔥
        </h1>
        <p className="text-gray-600 mb-8">
          Discover what’s on the plate: our fast food menu serves bold flavors, quick bites, and delicious options for every craving.
        </p>
      </div>

      {/* Pizza Cards */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="bg-white p-4 rounded-lg shadow-md">
            {/* Pizza Image */}
            <img
              src={pizza.imageUrl}
              alt={pizza.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            {/* Pizza Name */}
            <h2 className="text-xl font-bold mb-2">{pizza.name}</h2>

            {/* Description */}
            <p className="text-gray-700 mb-4">{pizza.description}</p>

            {/* Price and Order Button */}
            <div className="flex items-center justify-between">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">
                ORDER NOW
              </button>
              <span className="text-gray-600">from {pizza.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;