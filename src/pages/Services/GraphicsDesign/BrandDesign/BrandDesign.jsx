import React from 'react';

const BrandDesign = () => {
  return (
    <div className="bg-[#111] text-white py-16 px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Brand Identity & Visual Design Services at <br className="hidden md:block" />
          <span>Alraayida IT Solution</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Showcase of our projects: a curated selection of innovative, impactful, and expertly
          crafted works reflecting our passion, skill, and creativity.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto  rounded-2xl  shadow-xl border border-gray-800">
        {[
          "https://www.zentexx.com/assets/graphicsProducts1-GUVJwo5R.svg",
          "https://www.zentexx.com/assets/graphicsProducts2-z63gBrMJ.svg",
          "https://www.zentexx.com/assets/graphicsProducts4-B_O1N1cQ.svg",
        ].map((src, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center bg-[#1a1a1a] rounded-xl p-4 hover:scale-105 transition-transform duration-300 shadow-md"
          >
           <div>
           <img
              src={src}
              alt={`Graphics ${idx + 1}`}
              className="rounded-lg w-full max-w-sm object-contain"
            />
          
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDesign;
