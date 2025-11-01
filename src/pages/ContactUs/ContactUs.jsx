import React, { useEffect, useState } from "react";

const countries = [
  { code: "+880", name: "Bangladesh", flag: "https://flagcdn.com/w40/bd.png" },
  { code: "+91", name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { code: "+1", name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { code: "+44", name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "+92", name: "Pakistan", flag: "https://flagcdn.com/w40/pk.png" },
  { code: "+966", name: "Saudi Arabia", flag: "https://flagcdn.com/w40/sa.png" },
];

const ContactUs = () => {
  const [selected, setSelected] = useState(countries[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100); // Delay ensures component is mounted
  }, []);  

  return (
    <div className="min-h-screen px-6 py-24 font-sans text-white bg-black to-black md:px-16">
      <div className="flex flex-col items-start mx-auto max-w-7xl md:flex-row gap-14">
        {/* Left Section */}
        <div className="space-y-8 md:w-1/2">
          <div>
            <h2 className="mb-2 text-5xl font-bold">Get In Touch</h2>
            <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
          </div>
          <p className="text-lg leading-relaxed text-gray-300">
            Have a question or feedback? Fill out the form below, and we'll get
            back to you as soon as possible.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-indigo-400">
                Location
              </h3>
              <p className="text-gray-400">Bathua, Hathazari, Chattogram</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-400">Email</h3>
              <p className="text-gray-400">
                contact: alraayidatechltd@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-400">Phone</h3>
              <p className="text-gray-400">+8801870594400</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full p-8 space-y-6 bg-transparent shadow-lg md:w-1/2 rounded-2xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="px-2 py-3 placeholder-gray-400 transition bg-transparent border-b border-gray-600 focus:outline-none focus:border-indigo-500"
            />
            <input
              type="email"
              placeholder="Email address"
              className="px-2 py-3 placeholder-gray-400 transition bg-transparent border-b border-gray-600 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <input
            type="text"
            placeholder="Your Country"
            className="w-full px-2 py-3 placeholder-gray-400 transition bg-transparent border-b border-gray-600 focus:outline-none focus:border-indigo-500"
          />

          {/* Updated Phone Input with Flag Dropdown */}
          <div className="relative flex items-center px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg">
            <div className="relative w-48">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center justify-between w-full px-2 py-1 text-sm text-white bg-gray-700 rounded-md focus:outline-none"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={selected.flag}
                    alt={selected.name}
                    className="w-5 h-4 rounded-sm"
                  />
                  <span>{selected.name}</span>
                  <span>({selected.code})</span>
                </div>
                <span>▼</span>
              </button>

              {showDropdown && (
                <div className="absolute z-10 w-full mt-1 overflow-auto text-white bg-black rounded shadow-lg max-h-52">
                  {countries.map((country) => (
                    <div
                      key={country.code}
                      onClick={() => {
                        setSelected(country);
                        setShowDropdown(false);
                      }}
                      className="flex items-center px-3 py-2 space-x-2 cursor-pointer hover:bg-gray-200 hover:text-black"
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-5 h-4 rounded-sm"
                      />
                      <span className="text-sm">{country.name}</span>
                      <span className="text-xs text-gray-500">
                        {country.code}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="flex-1 ml-3 text-sm text-white placeholder-gray-400 bg-transparent focus:outline-none"
            />
          </div>

          <select className="w-full px-2 py-3 text-gray-400 transition bg-transparent border-b border-gray-600 focus:outline-none focus:border-indigo-500">
            <option>Select a Subject</option>
            <option className="bg-black">Web Development</option>
            <option className="bg-black">Digital Marketing</option>
            <option className="bg-black">Ui/ux Design</option>
            <option className="bg-black">Graphics Design</option>
            <option className="bg-black">Video Production</option>
            <option className="bg-black">Branding</option>
            <option className="bg-black">Crm and Sass Development</option>
          </select>

          <textarea
            placeholder="Your message"
            className="w-full px-2 py-3 placeholder-gray-400 transition bg-transparent border-b border-gray-600 resize-none h-28 focus:outline-none focus:border-indigo-500"
          ></textarea>

          <button className="w-full py-3 font-medium text-white transition-all duration-300 shadow-md bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl hover:shadow-xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
