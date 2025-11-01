import React from 'react';

const projects = [
    {
      title: 'Social Media Poster Design',
      category: 'Branding, Social Media',
      image: 'https://i.ibb.co.com/Swn2j6Wq/image-8.png',
    },
    {
      title: 'Media Ads',
      category: 'Paid Advertising (PPC)',
      image: 'https://i.ibb.co.com/6R9ZdZJL/image-9.png',
    },
    {
      title: 'Manipulations',
      category: 'Social Media Post, Manipulation',
      image: 'https://i.ibb.co.com/3mBpDbQc/image-10.png',
    },
  ];
const PreviewProject = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-4">
      <div className="w-full mx-auto text-center mb-12">
        <h1 className="text-xl md:text-5xl font-bold mb-4">
          Preview of Our Recent Projects
        </h1>
        <p className="text-sm md:text-lg text-gray-300">
          A curated selection of innovative, impactful, and expertly crafted works 
          reflecting our passion, skill, and creativity.
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

export default PreviewProject;


