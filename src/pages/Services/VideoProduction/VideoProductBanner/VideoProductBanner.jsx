import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const VideoProductBanner = () => {
    return (
            <div className="relative fixed -mt-24 rounded-2xl  w-full text-white overflow-hidden shadow-xl z-10">
              {/* Background Image with Gradient Overlay */}
              <div
                className="absolute opacity-75 inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient( rgba(18, 33, 84, 0.3)), url('https://i.ibb.co.com/gZT6YnTv/image-15.png')",
                }}
              ></div>
        
              {/* Content Overlay */}
              <div className="relative z-10 mt-16 px-4 py-20 sm:px-8 lg:px-16">
                <div className="text-center font-sans">
                  <h1 className="text-4xl md:text-[75px] font-extrabold max-w-5xl mx-auto leading-tight drop-shadow-md">
                  video Production Services
                  At Alraayida It Solutions
                  </h1>
                  <p className="mt-5 mx-auto max-w-2xl text-white/85 text-lg md:text-xl">
                    A curated selection of innovative, impactful, and expertly crafted projects—
                    reflecting our passion, skill, and creativity.
                  </p>
                </div>
        
                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-12">
                  <button className="flex items-center h-[55px] justify-center gap-3 bg-blue-700 hover:bg-blue-800 transition-all duration-300 text-white font-semibold rounded-full px-8 py-4 w-[350px] text-lg shadow-lg">
                    Book Consultation
                    <span className='border p-2 rounded-full bg-white text-black'>
                      <FaArrowRight size={20} />
                    </span>
                  </button>
        
                  <button className="flex  items-center justify-center gap-3 border border-white/80 text-white font-semibold rounded-full px-8 py-4 w-[350px] text-lg hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-300 shadow-lg">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
    );
};

export default VideoProductBanner;