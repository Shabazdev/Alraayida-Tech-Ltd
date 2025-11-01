import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Digital Marketing',
    icon: '📈',
    description: 'Boost your brand visibility and reach with strategic digital campaigns.',
    link: '/service/digitalMarketing',
  },
  {
    title: 'Web Development',
    icon: '💻',
    description: 'Custom websites with seamless user experiences and performance in mind.',
    link: '/service/web',
  },
  {
    title: 'Graphics Design',
    icon: '🎨',
    description: 'Creative visuals that leave a lasting impression.',
    link: '/service/GraphicsDesign',
  },
  {
    title: 'CRM & SaaS Development',
    icon: '🛠️',
    description: 'Tailored CRM systems and SaaS platforms built for growth.',
    link: '/service/crm',
  },
  {
    title: 'UI/UX Design',
    icon: '📱',
    description: 'Intuitive and user-friendly designs to enhance user engagement.',
    link: '/service/uiux',
  },
  {
    title: 'Video Production',
    icon: '☁️',
    description: 'Scalable SaaS solutions to streamline your business operations.',
    link: '/service/video',
  },
  {
    title: 'Branding',
    icon: '🛠️',
    description: 'Branding solutions to streamline your business operations.',
    link: '/service/branding',
  },
];


const OurService = () => {
  return (
    <div className="p-6 mx-auto max-w-7xl">
      <div className="mb-12 text-center">
        <button className="btn bg-white text-black shadow-[0_0_25px_8px_rgba(255,255,255,0.6)] rounded-full border border-white/30 px-6 py-2 mb-4 hover:shadow-[0_0_35px_12px_rgba(0,149,255,0.8)] transition-all duration-300 backdrop-blur">
          Your Vision
        </button>
        <h1 className="text-3xl text-white max-sm:text-xl">
          Our <span className="text-blue-600">Services</span>
        </h1>
        <p className="mx-auto mt-5 text-sm text-white md:max-w-3xl sm:text-base">
          We all know that nothing moves until someone makes a decision. The
          first action is always in making the decision to proceed.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative w-full p-6 overflow-hidden text-white border-2 border-blue-600 shadow-md rounded-xl bg-white/10 backdrop-blur-2xl"
            whileHover={{ scale: 1.05 }}
          >
            {/* Blue rotating border animation */}
            <motion.div
              className="absolute inset-0 z-0 border-2 border-blue-500 rounded-xl animate-spin-slow"
              aria-hidden
            ></motion.div>

            {/* Card Content */}
            <div className="relative z-10 space-y-4">
              <div className="text-4xl hover:text-blue-700">{service.icon}</div>
              <h3 className="text-xl font-bold hover:text-blue-700">
                {service.title}
              </h3>
              <p className="text-sm hover:text-blue-700 opacity-90">
                {service.description}
              </p>
              {/* Arrow with Link */}
              <Link
                to={service.link}
                className="flex items-center justify-center mt-4 text-blue-400 transition-colors duration-500 border rounded-full hover:bg-blue-600 hover:text-white size-9"
              >
                <MdOutlineArrowOutward />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
