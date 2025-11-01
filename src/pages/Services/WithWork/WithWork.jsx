import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa6';

import image from "../../../assets/carrerinterface.jpg"

const WithWork = () => {
  return (
    <section className="bg-[#111] text-white py-10 px-4">
      <div className="flex flex-col items-center justify-between gap-6 mx-auto max-w-7xl md:flex-row">
        {/* Image Section - Always on the Left */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-start">
          <img
            src={image}
            alt="Backend Illustration"
            className="w-[422px] h-[494px] rounded-xl shadow-lg lg:w-full"
          />
        </div>

        {/* Text Section - Always on the Right */}
        <div className="w-full md:w-[50%] text-start">
          <h1 className="mb-5 text-3xl font-extrabold leading-tight md:text-5xl">
            We build powerful <br />
            Back-End systems <br />
            For Websites
          </h1>
          <p className="mb-6 text-base text-gray-300 md:text-lg">
            We build powerful back-end systems for websites, ensuring seamless
            functionality, high performance, strong security, scalability, and
            smooth user experiences.
          </p>

          <a
            href="https://calendly.com/alraayida/alraayida-tech-ltd-atlconsulation"
            target='_blank'
            className="inline-flex items-center gap-3 px-6 py-3 text-base font-semibold text-white transition-all duration-300 bg-blue-700 rounded-full shadow-lg hover:bg-blue-800 md:text-lg"
          >
            Work With Us
            <span className="p-1 text-black bg-white rounded-full">
              <FaArrowRight size={20}></FaArrowRight>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WithWork;
