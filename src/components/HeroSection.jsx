import React from "react";
import heroVideo from "../assets/hero-video.mp4";

const HeroSection = () => {
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
      <div className="relative z-10 text-center px-4 text-white">
        <h1 className="text-4xl font-bold mb-4">Delicious Food & Wonderful Eating Experience</h1>
        <p className="text-xl mb-8">Indulge in our mouthwatering dishes crafted with love.</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Order Now 
        </button>
      </div>
    </section>
  );
};

export default HeroSection;