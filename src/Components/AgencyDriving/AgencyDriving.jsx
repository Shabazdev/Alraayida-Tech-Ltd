import React from "react";
import { MdDone } from "react-icons/md";
import "./App.css"; // Make sure to include fire text & bg CSS

const AgencyDriving = () => {
  const listItems = [
    "Success Rate 100%",
    "Project Completed 100%",
    "Tech Partners 13+",
  ];

  return (
    <div className="relative overflow-hidden animated-bw-bg text-white py-20 px-4">
      <div className="max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Text Section */}
        <div className="md:max-w-4xl animate-fadeInUp">
          <h1 className="text-xl md:text-4xl font-bold leading-snug">
            Alraayida Tech Ltd Agency Driving Excellence with{" "}
            <span className="text-blue-500">Dedication and Innovation</span>
          </h1>

          <p className="opacity-70 mt-4">
            We are Alraayida Tech Ltd. We design, develop, and deliver the
            highest-quality responsive websites. We promise pixel-perfect
            results and blend innovation with expertise to redefine what's
            possible.
          </p>

          <ul className="mt-6 space-y-4 text-lg">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <MdDone className="bg-blue-600 w-5 h-5 rounded-full mx-2" />
                <span className="fire-hover-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-[400px] animate-fadeIn">
          <img
            src="https://i.ibb.co.com/qFxvrJrB/about-01-1.png"
            alt="Agency"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AgencyDriving;
