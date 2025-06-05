import React from "react";

const PromisesSection = () => {
  const promises = [
    {
      icon: "✅",
      title: "100% Natural",
      description: "All our ingredients are sourced fresh and natural.",
    },
    {
      icon: "🍎",
      title: "Optimal Weight Loss",
      description: "Our meals are designed to support your weight loss goals.",
    },
    {
      icon: "🌟",
      title: "Best Health Service",
      description: "We prioritize your health with every meal we serve.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Fast, Reliable, and Delicious — That's Our Promise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <span className="text-3xl text-orange-500">{promise.icon}</span>
              <h3 className="text-xl font-bold mt-2">{promise.title}</h3>
              <p className="text-gray-600 mt-2">{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromisesSection;