import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogBanner = () => {
  return (
    <div className="fixed relative z-10 w-full -mt-24 overflow-hidden text-white shadow-xl rounded-2xl">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-75"
        style={{
          backgroundImage:
            "linear-gradient( rgba(18, 33, 84, 0.3)), url('https://i.ibb.co.com/YBvCSX7s/image-33.png')",
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10 px-4 py-20 mt-16 sm:px-8 lg:px-16">
        <div className="font-sans text-center">
          <h1 className="text-4xl md:text-[75px] font-extrabold max-w-3xl mx-auto leading-tight drop-shadow-md">
            Keep Informed With the latest Updates
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-lg text-white/85 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            molestias quis autem nisi maxime labore excepturi iste temporibus.
            Delectus, animi!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-5 mt-12 md:flex-row">
          <Link
            to="/calendly"
            target="_blank"
            className="flex items-center text-sm h-[55px] justify-center gap-3 bg-blue-700 hover:bg-blue-800 transition-all duration-300 text-white font-semibold rounded-full px-8 py-4 w-[350px] text-lg shadow-lg"
          >
            Book Consultation
            <span className="p-2 text-black bg-white border rounded-full">
              <FaArrowRight size={20} />
            </span>
          </Link>

          <Link
            to="/contactUs"
            className="flex text-sm items-center justify-center gap-3 border border-white/80 text-white font-semibold rounded-full px-8 py-4 w-[350px] text-lg hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-300 shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
