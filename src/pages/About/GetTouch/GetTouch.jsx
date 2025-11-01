import React, { useState } from "react";
import { motion } from "framer-motion";


const countries = [
  { code: "+880", name: "Bangladesh", flag: "https://flagcdn.com/w40/bd.png" },
  { code: "+91", name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { code: "+1", name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { code: "+44", name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "+92", name: "Pakistan", flag: "https://flagcdn.com/w40/pk.png" },
  { code: "+966", name: "Saudi Arabia", flag: "https://flagcdn.com/w40/sa.png" },
];

const GetTouch = () => {
  const [selected, setSelected] = useState(countries[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="bg-[#111]">
      <h1 className="text-white py-10 text-center md:text-5xl text-2xl">Get in  touch</h1>
      <div className="font-sans bg-[#111]  flex items-center justify-center px-4 py-10">

        <div className="hero-content flex-col lg:flex-row-reverse gap-12 w-full max-w-6xl">



          {/* Floating Image */}
          <motion.div
            className="w-full max-w-sm"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <img
              src="https://i.ibb.co.com/whxt7KYp/Dark-Green-Techno-AI-School-Academy-Invitation-Instagram-Post-2-1.png"
              alt="Contact Illustration"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Contact Form */}
          <div className="md:w-full border bg-transparent p-8 rounded-2xl shadow-lg w-full space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent text-white border-b border-gray-600 py-3 px-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition"
              />
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent text-white border-b border-gray-600 py-3 px-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>

            <input
              type="text"
              placeholder="Your Country"
              className="bg-transparent text-white border-b border-gray-600 py-3 px-2 w-full placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition"
            />

            {/* Updated Phone Input with Flag Dropdown */}
            <div className="flex items-center border border-gray-600 rounded-lg px-3 py-2 bg-transparent relative">
              <div className="relative w-48">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center justify-between w-full text-white text-sm rounded-md px-2 py-1 focus:outline-none"
                >
                  <div className="flex items-center bg-transparent space-x-2">
                    <img src={selected.flag} alt={selected.name} className="w-5 h-4 rounded-sm" />
                    <span>{selected.name}</span>
                    <span>({selected.code})</span>
                  </div>
                  <span>▼</span>
                </button>

                {showDropdown && (
                  <div className="absolute z-10 bg-black text-white mt-1 w-full rounded shadow-lg max-h-52 overflow-auto">
                    {countries.map((country) => (
                      <div
                        key={country.code}
                        onClick={() => {
                          setSelected(country);
                          setShowDropdown(false);
                        }}
                        className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-900 cursor-pointer"
                      >
                        <img src={country.flag} alt={country.name} className="w-5 h-4 rounded-sm" />
                        <span className="text-sm">{country.name}</span>
                        <span className="text-xs text-gray-500">{country.code}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="bg-transparent flex-1 ml-3 text-white placeholder-gray-400 focus:outline-none text-sm"
              />
            </div>

            <select className="bg-transparent text-white border-b border-gray-600 py-3 px-2 w-full placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition">
              <option>Select a Subject</option>
              <option className="bg-black">Web Development</option>
              <option className="bg-black">Digital Marketing</option>
              <option className="bg-black">Ui/ux Design</option>
              <option className="bg-black">Graphics Design</option>
              <option className="bg-black">Software Development</option>
              <option className="bg-black">Video Production</option>
              <option className="bg-black">Branding</option>
              <option className="bg-black">Crm and Sass Development</option>
            </select>

            <textarea
              placeholder="Your message"
              className="bg-transparent text-white border-b border-gray-600 py-3 px-2 w-full h-28 resize-none placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition"
            ></textarea>

            <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 py-3 rounded-xl text-white font-medium shadow-md hover:shadow-xl transition-all duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
