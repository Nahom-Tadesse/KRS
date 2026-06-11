import React from 'react';

const Hero = ({ activeTab }) => {
  return (
    /* FIXED: Added 'hidden md:block' class. The Hero image box now completely unmounts on mobile screens and unlocks only on medium devices and up */
    <section className="hidden md:block max-w-7xl mx-auto px-6 mt-8 animate-fade-in-up [animation-delay:100ms]">
      <div className="relative h-[450px] rounded-[40px] overflow-hidden bg-gradient-to-br from-[#2ecc71] via-[#36D95D] to-[#007F18] group shadow-inner flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {activeTab !== 'Home' && (
          <span className="text-white text-sm md:text-lg font-bold tracking-wider bg-black/20 backdrop-blur-md px-6 py-3 rounded-full uppercase text-center select-none animate-fade-in-up">
            {activeTab} Property Images Showcase
          </span>
        )}
      </div>
    </section>
  );
};

export default Hero;
