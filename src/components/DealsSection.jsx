// src/components/DealsSection.js
import React from 'react';

const DealsSection = () => {
  // Sample deal data
  const deals = [
    {
      id: 1,
      name: 'Spicy Meat Feast',
      description: 'A spicy blend of pepperoni, jalapeños, and red onions on a crispy crust.',
      price: 'LKR 2,500.00',
      imageUrl: 'https://th.bing.com/th/id/OIP.o34aro1Z_DkRXVNwOhuC_AHaFj?r=0&rs=1&pid=ImgDetMain',
      backgroundColor: 'bg-red-500',
    },
    {
      id: 2,
      name: 'Cheesy Lovers Pair',
      description: 'Double the cheese with extra mozzarella and cheddar on a golden crust.',
      price: 'LKR 2,250.00',
      imageUrl: 'https://th.bing.com/th/id/OIP.oIPInsyYq2UtfvjdkdaHBgHaEK?r=0&pid=ImgDet&w=208&h=117&c=7&dpr=1.5',
      backgroundColor: 'bg-yellow-500',
    },
  ];

  return (
    <section className="bg-white py-16">
      {/* Header */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Hot Pizza, Hotter Deals</h1>
        <p className="text-gray-600 mb-8">
          Discover our exclusive pizza deals — perfect for every craving!
        </p>
      </div>

      {/* Deals Cards */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className={`p-4 rounded-lg shadow-md ${deal.backgroundColor} text-white`}
          >
            {/* Pizza Image */}
            <img
              src={deal.imageUrl}
              alt={deal.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            {/* Deal Name */}
            <h2 className="text-xl font-bold mb-2">{deal.name}</h2>

            {/* Description */}
            <p className="text-white mb-4">{deal.description}</p>

            {/* Price and Order Button */}
            <div className="flex items-center justify-between">
              <button className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-full hover:bg-black transition duration-300 cursor-pointer">
                ORDER NOW
              </button>
              <span>{deal.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsSection;