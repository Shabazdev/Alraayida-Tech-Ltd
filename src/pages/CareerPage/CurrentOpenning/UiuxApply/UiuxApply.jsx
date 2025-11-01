import React, { useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import UiBanner from './UiBanner';

const UiuxApply = () => {

    useEffect(() => {
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }, 100); // Delay ensures component is mounted
        }, []);  
    
    return (
        <div>
            <UiBanner></UiBanner>
            <div className="bg-[#0c0c0c] text-white min-h-screen py-12 px-4 md:px-16 font-sans">
                <div className="grid gap-12 mx-auto max-w-7xl md:grid-cols-3">
                    {/* Left Column: Job Summary */}
                    <div className="p-6 space-y-6 shadow-lg rounded-xl">
                        <div>
                            <h3 className="flex items-center gap-2 mb-1 text-lg font-semibold text-gray-300"> <IoLocationSharp></IoLocationSharp>Location</h3>
                            <p className="text-gray-400">Chittagong, Bangladesh (On-site)</p>
                        </div>

                        <hr className='py-2 border-white opacity-55' />
                        <div>
                            <h3 className="mb-1 text-lg font-semibold text-gray-300">💼 Employment Type</h3>
                            <p className="text-gray-400">Full-time</p>
                        </div>

                           <hr className='py-2 border-white opacity-55' />

                        <div>
                            <h3 className="mb-1 text-lg font-semibold text-gray-300">🧾 Position</h3>
                            <p className="text-gray-400">UI/UX Designer</p>
                        </div>
                           <hr className='py-2 border-white opacity-55' />
                        <div>
                            <h3 className="mb-1 text-lg font-semibold text-gray-300">💰 Salary</h3>
                            <p className="text-gray-400">Competitive (Market Standard)</p>
                        </div>
                           <hr className='py-2 border-white opacity-55' />
                    </div>

                    {/* Right Column: Job Description */}
                    <div className="space-y-10 md:col-span-2">
                        {/* Description */}
                        <div>
                            <h2 className="mb-3 text-2xl font-bold">Job Description</h2>
                            <p className="leading-relaxed text-gray-300">
                                We are seeking a talented and creative UI/UX Designer to join our team in Chattogram.
                                The ideal candidate will focus on UI design with solid UX understanding.
                                You will design intuitive, visually appealing interfaces while ensuring seamless user experiences.
                            </p>
                        </div>

                        {/* Responsibilities */}
                        <div>
                            <h2 className="mb-3 text-2xl font-bold">Key Responsibilities</h2>
                            <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                <li>Design user-friendly interfaces for web & mobile apps aligned with brand identity.</li>
                                <li>Collaborate with product managers and developers on design execution.</li>
                                <li>Create wireframes, prototypes, and high-fidelity mockups.</li>
                                <li>Ensure consistency across design systems and UI elements.</li>
                                <li>Conduct and analyze UX research and usability tests.</li>
                                <li>Stay current on design trends and industry best practices.</li>
                                <li>Align strategies with marketing and business objectives.</li>
                                <li>Analyze campaign results and present actionable insights.</li>
                            </ul>
                        </div>

                        {/* Skills */}
                        <div>
                            <h2 className="mb-3 text-2xl font-bold">Required Skills & Experience</h2>
                            <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                <li>Proven experience with portfolio of UI projects.</li>
                                <li>Proficiency in Adobe XD, Figma, Sketch, etc.</li>
                                <li>Solid knowledge of UX principles and interaction design.</li>
                                <li>Experience with basic UX research methods.</li>
                                <li>Understanding of HTML/CSS for dev collaboration.</li>
                                <li>Strong communication & problem-solving skills.</li>
                                <li>Detail-oriented and self-motivated team player.</li>
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h2 className="mb-3 text-2xl font-bold">What We Offer</h2>
                            <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                <li>Health insurance coverage.</li>
                                <li>Paid time off & flexible leaves.</li>
                                <li>24 annual leave days.</li>
                                <li>Friendly, collaborative work environment.</li>
                                <li>Learning & professional development opportunities.</li>
                            </ul>
                        </div>

                        {/* Apply Button */}
                        <div className="pt-4">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSe4o_CyL4HpC68W2z_s6CiNggVdmPpKzWI1hNjwvo8PXE-1xQ/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="flex items-center gap-2 px-6 py-3 text-sm text-white transition-all rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                                    <FaPaperPlane />
                                    Apply Now
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UiuxApply;
