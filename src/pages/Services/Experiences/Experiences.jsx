import React from 'react';

const Experiences = () => {
  return (
    <section className="bg-[#111] text-white w-full px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

        {/* Left Highlight Card */}
        <div
          className="w-full lg:w-[400px] h-[568px] rounded-2xl overflow-hidden shadow-lg"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://i.ibb.co.com/C5m2ywMT/image-7.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="p-6 flex flex-col justify-end h-full">
            <h2 className="text-2xl font-bold mb-4">
              Global Business Solutions by Alraayida
            </h2>
            <p className="text-sm opacity-80">
              Alraayida offers global IT solutions, helping businesses run securely, efficiently, and with innovation.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-8 justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Create experiences, not just products
            </h1>
            <p className="text-sm md:text-base text-gray-300">
              “Create experiences, not just products” means focusing on emotional connection, satisfaction, and long-term value beyond the product’s basic function.
            </p>
          </div>

          {/* 2 Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="w-full h-[368px] rounded-2xl overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://i.ibb.co.com/C5m2ywMT/image-7.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="p-6 flex flex-col justify-end h-full">
                  <h2 className="text-xl font-bold mb-3">
                    Worldwide IT Solutions from Alraayida
                  </h2>
                  <p className="text-sm text-gray-200">
                    Alraayida offers global IT solutions, helping businesses run securely, efficiently, and with innovation.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
