import React, { useEffect } from "react";
import heroVideo from "../assets/hero-video.mp4";

const HeroSection = () => {
  useEffect(() => {
    // Add animation classes after component mounts
    const content = document.querySelector('.hero-content');
    content.classList.add('animate-fade-in');
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-content relative z-10 text-center px-4 text-white w-full max-w-4xl mx-auto opacity-0 transition-all duration-1000 ease-out">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 transform transition-all duration-700 hover:scale-105">
          Delicious Food & Wonderful Eating Experience
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Indulge in our mouthwatering dishes crafted with love.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="w-full sm:w-auto cursor-pointer bg-orange-500 rounded-3xl hover:bg-orange-700 text-white font-bold py-3 px-8 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            See Menu
          </button>
          <button className="w-full sm:w-auto cursor-pointer bg-transparent border-white border-2 rounded-3xl hover:bg-gray-900 text-white font-bold py-3 px-8 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Order Now
          </button>
        </div>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40 z-[1]"></div>
    </section>
  );
};

export default HeroSection;