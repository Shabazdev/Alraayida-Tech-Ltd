import React from "react";

const productionData = [
  {
    id: 1,
    title: "Video Editing Services",
    description: "Trendy, captivating, concise, viral, impactful.",
    thumbnail: "https://i.ibb.co/4RwwrMhM/image-16.png",
  },
  {
    id: 2,
    title: "Short Form Reels",
    description: "A sleek animated logo sequence to enhance brand recall.",
    thumbnail: "https://i.ibb.co/MyNd0G5y/image-17.png",
  },
  {
    id: 3,
    title: "Talking Head Editing",
    description: "Clean, focused, engaging, professional, seamless.",
    thumbnail: "https://i.ibb.co/cX1fLK6S/image-18.png",
  },
  {
    id: 4,
    title: "Model Video Ads",
    description: "Stylish, persuasive, dynamic, high-converting, branded.",
    thumbnail: "https://i.ibb.co/dwXycW53/image-19.png",
  },
  {
    id: 5,
    title: "Motion Graphics Ads",
    description: "Animated, eye-catching, modern, energetic, informative.",
    thumbnail: "https://i.ibb.co/S4jKdNBb/image-21.png",
  },
  {
    id: 6,
    title: "Stock Footage Ads",
    description: "Versatile, polished, budget-friendly, professional, impactful.",
    thumbnail: "https://i.ibb.co/m5X8N0Ct/image-22.png",
  },
];

// 🟡 Replace this with your actual Google Drive video link
const fixedDriveLink = "https://drive.google.com/file/d/YOUR_VIDEO_ID/view";

const ProductionSection = () => {
  return (
    <section className="bg-[#111] py-10 text-white">
      <div className="max-w-5xl mx-auto px-4 text-center leading-tight">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Editing, Animation, Advertising, Production.
        </h1>
        <p className="mt-5 text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
          Showcase of our projects: a curated selection of innovative, impactful,
          and expertly crafted works reflecting our passion, skill, and creativity.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productionData.map((item) => (
          <div
            key={item.id}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg flex flex-col"
          >
            <div className="w-full h-56 overflow-hidden rounded-t-xl">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col items-center flex-1 text-center">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-400 flex-1">{item.description}</p>
              <a
                href={fixedDriveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-blue-600 hover:bg-transparent hover:text-white border border-blue-600 text-white py-2 px-6 rounded transition-all duration-300"
              >
                Watch Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductionSection;
