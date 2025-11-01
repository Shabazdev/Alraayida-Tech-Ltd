// Technology.jsx
import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Technology.css';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'development', label: 'Development' },
  { id: 'design', label: 'Design' },
  { id: 'marketing', label: 'Digital Marketing' },
];

const tools = [
  {
    id: 1,
    name: "JWT",
    image: "https://i.ibb.co.com/S4cMSqG3/download-1-1.png",
    category: "development",
  },
  {
    id: 2,
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "development",
  },
  {
    id: 3,
    name: "Meta",
    image: "https://i.ibb.co.com/Jjp9yvr0/Union.png",
    category: "marketing",
  },
  {
    id: 4,
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "development",
  },
  {
    id: 5,
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "development",
  },
  {
    id: 6,
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "development",
  },
  {
    id: 7,
    name: "TailwindCss",
    image: "https://i.ibb.co.com/cc32ZwkC/download-4.png",
    category: "development",
  },
  {
    id: 8,
    name: "Webflow",
    image: "https://i.ibb.co.com/tTG1FVV3/download-7-1.png",
    category: "design",
  },
  {
    id: 9,
    name: "WordPress",
    image: "https://pngimg.com/d/wordpress_PNG72.png",
    category: "marketing",
  },
  {
    id: 10,
    name: "Figma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    category: "design",
  },
  {
    id: 11,
    name: "Google",
    image: "https://i.ibb.co.com/1fHBtB9M/google-logo.png",
    category: "marketing",
  },
  {
    id: 12,
    name: "Adobe",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
    category: "design",
  },
];

const Technology = () => {
  const [activeTab, setActiveTab] = useState('all');
  const filteredTools = activeTab === 'all' ? tools : tools.filter((tool) => tool.category === activeTab);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isReducedMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="relative overflow-hidden bg-black" ref={ref}>
      <div
        className={`absolute inset-0 ${
          isMobile
            ? "bg-neutral-900"
            : "bg-gradient-to-br from-zinc-950 via-neutral-900 to-black animate-gradient-dark"
        } opacity-90`}
      />

      <div className="relative z-10 px-4 py-20 mx-auto text-white font-electrolize max-w-7xl">
        {/* Static Glows Instead of Blur */}
        <div className="absolute top-[-60px] left-[-60px] w-[200px] h-[200px] bg-white/5 rounded-full shadow-[0_0_100px_30px_rgba(255,255,255,0.1)]" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[200px] h-[200px] bg-white/5 rounded-full shadow-[0_0_100px_30px_rgba(255,255,255,0.1)]" />

        {/* Header */}
        <motion.div
          className="relative z-10 mb-16 text-center"
          initial={{ opacity: 0, y: isReducedMotion ? 0 : 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <button className="btn bg-white text-black shadow-[0_0_25px_8px_rgba(255,255,255,0.6)] rounded-full border border-white/30 px-6 py-2 mb-4 hover:shadow-[0_0_35px_12px_rgba(0,149,255,0.8)] transition-all duration-300 backdrop-blur">
            Our Technology
          </button>
          <h1 className="text-4xl font-bold tracking-wide max-sm:text-2xl">
            Explore Our <span className="text-blue-500">Expertise</span>
          </h1>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="relative z-10 grid justify-center grid-cols-2 gap-4 sm:flex sm:gap-6 mb-14"
          initial={{ opacity: 0, y: isReducedMotion ? 0 : 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative z-0 overflow-hidden
                ${
                  activeTab === tab.id
                    ? "bg-zinc-900 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-500"
                    : "bg-black text-white/70 hover:text-white hover:shadow-md hover:shadow-white/10"
                } border border-white/10 backdrop-blur-md`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: isReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="relative z-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 sm:gap-10 justify-items-center">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="animated-border w-[120px] h-[120px] flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:scale-110 transition duration-500 ease-in-out shadow-lg hover:shadow-white/20 backdrop-blur-md"
              >
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="object-contain w-12 h-12 mb-2 drop-shadow-lg"
                />
                <span className="text-sm font-medium text-white/90">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
