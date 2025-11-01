import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import careerinterface from "../../../assets/carrerinterface.jpg"

const CarrerInterface = () => {
    return (
      <div className="bg-[#111] text-white px-6 py-10 md:py-20">
        <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2">
          {/* Text Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Benefits and workplace culture highlights.
            </h1>
            <p className="text-sm sm:text-base md:text-[15px] text-gray-300">
              We craft targeted, high-converting ad campaigns that drive
              traffic, increase leads, and maximize ROI through strategic
              digital advertising solutions.
            </p>

            <ul className="space-y-1 list-disc list-inside text-white/90">
              <li>Competitive salary</li>
              <li>Flexible Work-Hours</li>
              <li>Health and wellness benefits</li>
              <li>Modern office environment</li>
              <li>Fast-paced startup</li>
              <li>Innovative team culture</li>
            </ul>

            <a
              href="https://calendly.com/alraayida/alraayida-tech-ltd-atlconsulation"
              target='_blank'
              className="inline-flex items-center gap-3 px-6 py-3 mt-6 font-semibold text-white transition-all duration-300 bg-blue-700 rounded-full shadow-lg hover:bg-blue-800"
            >
              Work With Us
              <span className="bg-white text-black p-1.5 rounded-full">
                <FaArrowRight size={18} />
              </span>
            </a>
          </div>

          {/* Image Section */}
          <div className="flex justify-center w-full">
            <img
              src={careerinterface}
              alt="UI Preview"
              className="object-cover w-full h-auto max-w-md shadow-xl rounded-xl"
            />
          </div>
        </div>
      </div>
    );
};

export default CarrerInterface;