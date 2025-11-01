import React from 'react';

const projects = [
  {
    image: 'https://i.ibb.co.com/p6x3BdMG/image-1.png',
    
  },
  {
    image: 'https://i.ibb.co.com/XZLJp6SL/image-2.png',
   
  },
  {
    image: 'https://i.ibb.co.com/cS9t2wvF/image-3.png',
    
  },
  {
    image: 'https://i.ibb.co.com/B25pNGqq/image-4.png',
 
  },
  {
    image: 'https://i.ibb.co.com/7dsmgmx2/image-5.png',
   
  },
  {
    image: 'https://i.ibb.co.com/cS9t2wvF/image-3.png',
   
  },
];

const SkillShowroom = () => {
  return (
    <section className="text-white font-sans bg-[#111] py-14 px-5">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="md:text-[56px] text-2xl font-bold">Skill Showroom</h1>
        <p className="mt-6 md:text-[18px] text-sm w-full md:w-[700px] mx-auto text-gray-300">
        Skill Showroom is a curated space to display your talents, projects, and expertise, making your professional abilities visually impactful.
        </p>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1d284d7a] rounded-lg  overflow-hidden  transition duration-300 shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="mx-auto p-2 max-sm:w-full  object-cover"
            />
            <div className="p-5 bg-[] ">
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-400">{project.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillShowroom;
