import React from 'react';
import './Ourwork.css';

import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.jpg'
import project4 from '../../assets/project4.jpg'
import project5 from "../../assets/project5.jpg";
import project6 from "../../assets/project6.jpg";
import project7 from "../../assets/project7.jpg";
import project8 from "../../assets/project8.png";
import project9 from "../../assets/project9.jpg";
import project10 from "../../assets/project10.jpg";
import project11 from "../../assets/project11.png";
import project12 from "../../assets/project12.jpg";
import project13 from "../../assets/project13.jpg";
import project14 from "../../assets/project14.jpg";
import project15 from "../../assets/project15.jpg";
import project16 from "../../assets/project16.jpg";

const imageColumns = [
  [
    project1,
    project2,
    project3,
    project4,
  ],
  [
    project5,
    project6,
    project7,
    project8,
  ],
  [
    project9,
    project10,
    project11,
    project12,
  ],
  [
    project13,
    project14,
    project15,
    project16,
  ],
];

const Ourwork = () => {
  return (
    <div className="relative py-20 mx-auto text-white bg-black max-w-7xl">
      <div className="relative z-10 mb-16 text-center">
        <button className="btn bg-white text-black shadow-[0_0_25px_8px_rgba(255,255,255,0.6)] rounded-full border border-white/30 px-6 py-2 mb-4 hover:shadow-[0_0_35px_12px_rgba(0,149,255,0.8)] transition-all duration-300 backdrop-blur">
          Project View
        </button>

        <h1 className="text-4xl font-bold tracking-wide max-sm:text-2xl">
          Explore Our <span className="text-blue-500">Work</span>
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-6 px-6 max-sm:grid-cols-2">
        {imageColumns.map((column, colIndex) => (
          <div
            key={colIndex}
            className={`vertical-marquee column-${
              colIndex % 2 === 0 ? "up" : "down"
            } relative`}
          >
            <div className="fade-overlay-top" />
            <div className="fade-overlay-bottom" />
            <div className="marquee-content">
              {[...column, ...column].map((img, i) => (
                <div
                  key={i}
                  className="w-full h-40 mb-6 overflow-hidden border shadow-md rounded-xl bg-white/10 border-white/10"
                >
                  <img
                    src={img}
                    alt={`Work ${colIndex}-${i}`}
                    className="object-cover w-full h-full "
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourwork;
