import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import image from "../../../../assets/carrerinterface.jpg"

const UiInterface = () => {
  return (
    <div className="bg-[#111] text-white px-6 py-10 md:py-20">
      <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Designing clean, simple, and intuitive user interfaces
          </h1>
          <p className="text-sm sm:text-base md:text-[15px] text-gray-300">
            We build powerful back-end systems for websites, ensuring seamless functionality, high performance, strong security, scalability, and smooth user experiences.
          </p>

          <ul className="space-y-1 list-disc list-inside text-white/90">
            <li>Research & Discovery</li>
            <li>Wireframes & Prototypes</li>
            <li>UI Design</li>
            <li>Usability Testing</li>
          </ul>

          <button className="inline-flex items-center gap-3 px-6 py-3 mt-6 font-semibold text-white transition-all duration-300 bg-blue-700 rounded-full shadow-lg hover:bg-blue-800">
            Work With Us
            <span className="bg-white text-black p-1.5 rounded-full">
              <FaArrowRight size={18} />
            </span>
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full">
          <img
            src={image}
            alt="UI Preview"
            className="object-cover w-full h-auto max-w-md shadow-xl rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default UiInterface;
