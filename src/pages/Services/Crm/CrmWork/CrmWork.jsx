import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import image from "../../../../assets/carrerinterface.jpg"

const CrmWork = () => {
    return (
        <section className="bg-[#111] text-white py-10 px-4">
            <div className="flex flex-col items-center justify-between gap-6 mx-auto max-w-7xl md:flex-row">
                {/* Image Section - Always on the Left */}
                <div className="w-full md:w-[45%] flex justify-center md:justify-start">
                    <img
                        src={image}
                        alt="Backend Illustration"
                        className="w-[422px] h-[494px] rounded-xl shadow-lg"
                    />
                </div>

                {/* Text Section - Always on the Right */}
                <div className="w-full md:w-[50%] text-start">
                    <h1 className="mb-5 text-3xl font-extrabold leading-tight md:text-5xl">
                        We build scalable <br />
                        secure SaaS <br />
                        applications expertly
                    </h1>
                    <p className="mb-6 text-base text-gray-300 md:text-lg">
                        We build powerful back-end systems for websites, ensuring seamless functionality, high performance, strong security, scalability, and smooth user experiences.
                    </p>

                    <button className="inline-flex items-center gap-3 px-6 py-3 text-base font-semibold text-white transition-all duration-300 bg-blue-700 rounded-full shadow-lg hover:bg-blue-800 md:text-lg">
                        Work With Us
                        <span className="p-1 text-black bg-white rounded-full">

                            <FaArrowRight size={20}></FaArrowRight>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CrmWork;