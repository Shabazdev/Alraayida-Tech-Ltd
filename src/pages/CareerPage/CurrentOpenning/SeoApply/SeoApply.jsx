import React, { useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import SeoBanner from './SeoBanner';

const SeoApply = () => {

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
        <SeoBanner></SeoBanner>
         <div className="bg-[#0c0c0c] text-white  py-12 px-4 md:px-16 font-sans">
            <div className="grid max-w-full gap-12 mx-auto md:grid-cols-3">
                {/* Left Column: Job Summary */}
                <div className="p-6 space-y-6 shadow-lg rounded-xl ">
                    <div>
                        <h3 className="flex items-center gap-2 mb-1 text-lg font-semibold text-gray-300"> <IoLocationSharp size={20}></IoLocationSharp> Location</h3>
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
                        <p className="text-gray-400">SEO Specialist</p>
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
                            We are looking for a knowledgeable and driven SEO Specialist to join our team in Chattogram.
                            You will be responsible for planning, implementing, and managing our SEO strategies to improve organic rankings and drive qualified traffic.
                        </p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                        <h2 className="mb-3 text-2xl font-bold">Key Responsibilities</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li>Develop and execute SEO strategies for web properties.</li>
                            <li>Perform keyword research and competitor analysis.</li>
                            <li>Optimize website content, structure, and internal linking.</li>
                            <li>Monitor and report SEO performance using analytics tools.</li>
                            <li>Collaborate with content and dev teams on SEO execution.</li>
                            <li>Stay updated with search engine algorithm changes.</li>
                            <li>Ensure best practices in technical and on-page SEO.</li>
                        </ul>
                    </div>

                    {/* Skills */}
                    <div>
                        <h2 className="mb-3 text-2xl font-bold">Required Skills & Experience</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li>3+ years of hands-on SEO experience.</li>
                            <li>Strong knowledge of Google Analytics, Search Console, Ahrefs, SEMrush, etc.</li>
                            <li>Good understanding of HTML/CSS & site performance factors.</li>
                            <li>Experience in on-page, off-page, and technical SEO.</li>
                            <li>Ability to perform audits and present insights clearly.</li>
                            <li>Strong communication and team collaboration skills.</li>
                        </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                        <h2 className="mb-3 text-2xl font-bold">What We Offer</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li>Health insurance and wellness benefits.</li>
                            <li>Flexible working hours and leave policy.</li>
                            <li>24 annual leave days.</li>
                            <li>Dynamic and supportive team culture.</li>
                            <li>Career growth and learning programs.</li>
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

export default SeoApply;
