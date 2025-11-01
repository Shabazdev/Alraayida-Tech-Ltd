import React from 'react';

import image from "../../../assets/carrerinterface.jpg"

const WeFrom = () => {
    return (
      <div className="bg-[#0f0f0f]">
        <div className="px-4 py-12 mx-auto text-white md:px-10 max-w-7xl">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-between gap-10 mb-16 lg:flex-row">
            {/* Text */}
            <div className="max-w-2xl">
              <h1 className="mb-4 text-3xl font-extrabold md:text-5xl">
                We Are From
              </h1>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                At Alrayida, we believe in a collaborative and transparent
                approach. We work closely with our clients, understanding their
                unique needs and challenges, and tailor solutions that drive
                success. Our team combines creativity, technology, and strategic
                thinking to deliver results that exceed expectations.
              </p>
            </div>

            {/* Image */}
            <div className="w-full lg:w-[500px] flex-shrink-0">
              <img
                src={image}
                alt="We Are From"
                className="object-cover w-full shadow-lg rounded-xl"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-14">
            {/* Stat Item 1 */}
            <div className="flex flex-col items-start gap-6 md:flex-row md:gap-10">
              <h1 className="text-4xl font-bold text-white min-w-[120px]">
                250+
              </h1>
              <div>
                <h2 className="mb-2 text-lg font-semibold">
                  Project Completed
                </h2>
                <p className="max-w-4xl text-sm text-gray-400 md:text-base">
                  With over 250+ projects completed globally, Alrayida has a
                  proven track record of building world-class websites,
                  software, and brands. Our expertise and dedication to
                  excellence empower businesses to thrive in the digital world.
                </p>
              </div>
            </div>

            {/* Stat Item 2 */}
            <div className="flex flex-col items-start gap-6 md:flex-row md:gap-10">
              <h1 className="text-4xl font-bold text-white min-w-[120px]">
                100%
              </h1>
              <div>
                <h2 className="mb-2 text-lg font-semibold">Success Rate</h2>
                <p className="max-w-4xl text-sm text-gray-400 md:text-base">
                  We take pride in our 100% success rate, consistently
                  delivering exceptional results that exceed client expectations
                  and drive business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WeFrom;
