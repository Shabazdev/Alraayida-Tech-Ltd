import React from 'react';

const projects = [
  {
    image:
      "https://i.pinimg.com/736x/09/ed/0c/09ed0c7779db542d790bb80331bcff48.jpg",
    name: "E-commerce website",
    title: "Web Development",
  },
  {
    image:
      "https://i.pinimg.com/736x/35/ce/4b/35ce4b33793186ca79b8f235a994ff73.jpg",
    name: "Corporate website",
    title: "Web Development",
  },
  {
    image:
      "https://i.pinimg.com/736x/27/30/c2/2730c22b648af9261a053e556195153a.jpg",
    name: "Travel agency website",
    title: "Web Development",
  },
  {
    image:
      "https://i.pinimg.com/736x/fc/93/30/fc9330faac8f4d40f690abef690306ca.jpg",
    name: "Online booking system website",
    title: "Web Development",
  },
  {
    image:
      "https://i.pinimg.com/736x/7f/dd/f7/7fddf78de3dc5d0193f8a1af1e5f6863.jpg",
    name: "IT Solutions and Software Company Website",
    title: "Web Development",
  },
  {
    image:
      "https://i.pinimg.com/736x/00/c8/00/00c8000a5654f498b533ba23a73be21c.jpg",
    name: "Custom web application development",
    title: "Web Development",
  },
  {
    image:
      "https://i.pinimg.com/736x/12/58/9e/12589ef45117a6e99b3a24bcf0eb4cfc.jpg",
    name: "Affiliate marketing website",
    title: "Web Development",
  },
  {
    image:
      "https://i.pinimg.com/736x/d7/54/b6/d754b69ff36c07f0efbb9782de54bd74.jpg",
    name: "Blog and news portal website",
    title: "Web Development",
  },
  {
    image:
      "https://i.pinimg.com/736x/50/d4/32/50d432fc3db35925b60ab75e6148bc52.jpg",
    name: "Buying House and Garments Website",
    title: "Web Development",
  },
];

const ShowCaseProject = () => {
  return (
    <section className="text-white font-sans bg-[#111] py-14 px-5">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="md:text-[56px] text-2xl font-bold">Showcase of our projects</h1>
        <p className="mt-6 md:text-[18px] text-sm w-full md:w-[700px] mx-auto text-gray-300">
          Showcase of our projects: a curated selection of innovative, impactful, and expertly crafted works reflecting our passion, skill, and creativity.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-16 mx-auto max-w-7xl md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1d284d7a] rounded-lg  overflow-hidden  transition duration-300 shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="object-cover p-2 mx-auto max-sm:w-full"
            />
            <div className="p-5 bg-[] ">
              <h2 className="mb-2 text-xl font-semibold">{project.name}</h2>
              <p className="text-gray-400">{project.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowCaseProject;
