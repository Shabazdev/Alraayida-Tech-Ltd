import React from "react";

const productionData = [
  {
    id: 1,
    title: "Brand Strategy",
    description: "Vision, Positioning, Growth.",
    thumbnail: "https://i.ibb.co/PG0yw4nB/image-24.png",
  },
  {
    id: 2,
    title: "Visual Identity",
    description: "Look, Feel, Style.",
    thumbnail: "https://i.ibb.co/rRWSZwYV/image-25.png",
  },
  {
    id: 3,
    title: "Brand Guidelines",
    description: "Consistency, Rules, Structure",
    thumbnail: "https://i.ibb.co/Z6yW1DH3/image-26.png",
  },
  {
    id: 4,
    title: "Brand Messaging",
    description: "Voice, Story, Connection.",
    thumbnail: "https://i.ibb.co/rRwy88kL/image-27.png",
  },
  {
    id: 5,
    title: "Social Media",
    description: "Engage, Share, Grow",
    thumbnail: "https://i.ibb.co/Qv7xHv7Z/image-28.png",
  },
  {
    id: 6,
    title: "Marketing Collateral",
    description: "Bold, clear, strong.",
    thumbnail: "https://i.ibb.co/qLX8ZDNM/image-31.png",
  },
  {
    id: 7,
    title: "Brand Launch",
    description: "Exciting, fresh, impactful.",
    thumbnail: "https://i.ibb.co/hRcMT3bs/image-32.png",
  },
  {
    id: 8,
    title: "Brand Launch",
    description: "Exciting, fresh, impactful.",
    thumbnail: "https://i.ibb.co/WpBtdZtk/image-29.png",
  },
];

const BrandingSection = () => {
  return (
    <section className="bg-[#111] py-10 text-white">
      <div className="max-w-5xl mx-auto px-4 text-center leading-tight">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Strategic Brand Planning.
        </h1>
        <p className="mt-5 text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
          Showcase of our projects: a curated selection of innovative, impactful,
          and expertly crafted works reflecting our passion, skill, and creativity.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productionData.map((item) => (
          <div
            key={item.id}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg flex flex-col"
          >
            <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-xl">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-400 flex-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandingSection;
