import React from "react";

import { HiEmojiHappy } from "react-icons/hi";

import image from "../../assets/carrerinterface.jpg"

const WhyChooseUs = () => {
  return (
    <section className="px-6 py-12 text-white bg-black lg:px-16">
      <div className="grid items-center grid-cols-1 gap-10 mx-auto lg:grid-cols-2 max-w-7xl">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <button className="btn bg-white text-black shadow-[0_0_25px_8px_rgba(255,255,255,0.6)] rounded-full border border-white/30 px-6 py-2 mb-4 hover:shadow-[0_0_35px_12px_rgba(0,149,255,0.8)] transition-all duration-300 backdrop-blur">
            Why Choose Us
          </button>
          <h2 className="text-4xl font-bold leading-snug">
            Simple. Smooth. Efficient. <br />
            It's how we build.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-gray-300">
            We are Alraayida Tech Ltd. We design, develop, and deliver
            high-quality responsive websites. We ensure pixel-perfect results
            for our client’s needs, driven by efficiency and quality.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">▌</span> Integrated Team
              Collaboration
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">▌</span> Comprehensive Support
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">▌</span> AI-driven Design
              Innovation
            </li>
          </ul>
        </div>
        {/* Right: Images and Stat */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img
              src={image}
              alt="Team work"
              className="object-cover w-full h-48 shadow-lg rounded-2xl"
            />
          </div>
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center h-48 p-6 text-white shadow-lg bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-2xl">
              <h2 className="text-3xl font-bold">
                <HiEmojiHappy />
              </h2>
              <p className="text-sm">Happy client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;