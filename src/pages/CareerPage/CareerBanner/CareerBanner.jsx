import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import careerinterface from "../../../assets/carrerinterface.jpg";

const CareerBanner = () => {
    return (
      <div className="fixed relative z-10 w-full -mt-24 overflow-hidden text-white shadow-xl rounded-2xl">
        <div className="mx-auto max-w-7xl">
          {/* Background Image with Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-75 "
            style={{
              backgroundImage:
                "linear-gradient( rgba(10, 22, 30, 0.6)), url('https://i.postimg.cc/c4MXSmgQ/image-34.png')",
            }}
          ></div>

          {/* Content Overlay */}
          <div className="relative z-10 px-4 py-20 mt-16 sm:px-8 lg:px-16">
            <div className="flex items-center justify-between font-sans text-start max-sm:flex-col">
              <div>
                <h1 className="text-4xl md:text-[75px] font-extrabold max-w-3xl  leading-tight drop-shadow-md">
                  Career with Alraayida Tech Ltd
                </h1>
                <p className="max-w-3xl mt-5 text-lg text-white/85 md:text-xl">
                  A curated selection of innovative, impactful, and expertly
                  crafted projects— reflecting our passion, skill, and
                  creativity.
                </p>
              </div>

              {/* image */}
              <div>
                <img src={careerinterface} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CareerBanner;