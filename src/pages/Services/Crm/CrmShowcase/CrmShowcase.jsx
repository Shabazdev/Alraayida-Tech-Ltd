import React from 'react';

const projects = [
    {
        title: 'Zenith Finance',
        category: 'Dashboard Development',
        image: 'https://i.ibb.co.com/yBK0z6Nx/image-11.png',
    },
    {
        title: 'Fintech Essentials',
        category: 'Dashboard Development',
        image: 'https://i.ibb.co.com/dzLNCGm/image-12.png',
    },
    {
        title: 'Zenith Finance',
        category: 'Dashboard Development',
        image: 'https://i.ibb.co.com/nNtZSfqc/image-13.png',
    },
    {
        title: 'Zenith Finance',
        category: 'Dashboard Development',
        image: 'https://i.ibb.co.com/jPYx3yKF/image-14.png',
    },
];
const CrmShowcase = () => {
    return (
        <section className="bg-[#0f0f0f] text-white py-16 px-4">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h1 className="text-xl md:text-5xl font-bold mb-4">
                    Talent display or skills
                    showcase.
                </h1>
                <p className="text-sm md:text-lg text-gray-300">
                Showcase of our projects: a curated selection of innovative, impactful, and expertly crafted works reflecting our passion, skill, and creativity.
                </p>
            </div>

            {/* Marquee animation */}
            <div className="overflow-hidden relative">
                <div
                    className="flex space-x-6 w-max"
                    style={{
                        animation: 'marquee 10s linear infinite',
                    }}
                >
                    {[...projects, ...projects].map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-700 hover:shadow-xl hover:scale-105 transition-transform duration-300 min-w-[280px] sm:min-w-[320px] max-w-[90vw]"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-1 hover:text-blue-400 transition-colors duration-300">
                                    {project.title}
                                </h2>
                                <p className="text-gray-400 text-sm">{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom keyframes inside JSX */}
            <style>
                {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
            </style>
        </section>
    );
};

export default CrmShowcase;


