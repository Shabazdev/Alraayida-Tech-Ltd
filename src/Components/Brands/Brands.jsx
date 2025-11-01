import React from 'react';
import './Brands.css'; // CSS file ta same thakbe

const Brands = () => {
  const brandLogo = "https://i.ibb.co/Ldvnjr3W/Mask-group.png";

  return (
    <div
      className="relative hidden px-6 py-20 overflow-hidden bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpW06PVNWpCe7h-FrN1d4wS0DqjN4bIHxIQ&s')`,
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-0 bg-black/70"></div>

      <div className="relative z-10 mx-auto space-y-12 text-center max-w-7xl">
        <h2 className="text-lg font-bold text-white opacity-50 md:text-4xl drop-shadow-md">
          Trusted by Brands All Over the World
        </h2>

        {/* First Group - Right Scroll */}
        <div className="marquee-container group">
          <div className="flex gap-6 marquee sm:gap-10">
            {Array(12).fill(0).map((_, idx) => (
              <img
                key={idx}
                src={brandLogo}
                alt="Brand"
                className="object-contain h-10 transition-transform duration-300 rounded-lg shadow-md sm:h-12 hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/* Second Group - Left Scroll */}
        <div className="mt-10 marquee-container group">
          <div className="flex gap-6 marquee-reverse sm:gap-10 delay-start">
            {Array(12).fill(0).map((_, idx) => (
              <img
                key={idx}
                src={brandLogo}
                alt="Brand"
                className="object-contain h-10 transition-transform duration-300 rounded-lg shadow-md sm:h-12 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
