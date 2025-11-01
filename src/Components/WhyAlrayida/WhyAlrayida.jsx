import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./Alrayida.css";

import { TbClockHour3Filled } from "react-icons/tb";
import { FaLock } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { HiEmojiHappy } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";

const stats = [
  {
    title: "Fast delivery",
    desc: "40% faster delivery than others",
    logo: <TbClockHour3Filled />,
  },
  {
    title: "100% Secure",
    desc: "SSL encryption and regular backups",
    logo: <FaLock />,
  },
  {
    title: "24/7 support",
    desc: "365 days a year technical support",
    logo: <BiSupport />,
  },
  {
    title: "Happy client",
    desc: "1000+",
    logo: <HiEmojiHappy />,
  },
  {
    title: "Client Recommendation",
    desc: "3000+",
    logo: <AiFillLike />,
  },
];

const WhyAlrayida = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="px-4 py-16 mx-auto max-w-7xl">
      <div className="mb-12 text-center">
      <button className="btn bg-white text-black shadow-[0_0_25px_8px_rgba(255,255,255,0.6)] rounded-full border border-white/30 px-6 py-2 mb-4 hover:shadow-[0_0_35px_12px_rgba(0,149,255,0.8)] transition-all duration-300 backdrop-blur">
      Our Dedication
        </button>
        <h1 className="text-3xl text-white max-sm:text-xl">
          Why <span className="text-blue-600">Alraayida Tech Ltd?</span>
        </h1>
        <p className="mx-auto mt-5 text-sm text-white md:max-w-3xl sm:text-base">
          We all know that nothing moves until someone makes a decision. The
          first action is always in making the decision to proceed. Which most
          people overlook, we don’t do it intentionally or with malice.
        </p>
      </div>

      {/* Stats Cards */}
      <div
        ref={ref}
        className="grid grid-cols-1 gap-6 max-sm:w-full sm:grid-cols-2 lg:grid-cols-3"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="relative p-6 overflow-hidden text-center text-white border-2 border-blue-500 shadow-lg bg-white/10 rounded-xl backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Animated border effect */}
            <motion.div
              className="absolute inset-0 z-0 border-2 border-blue-400 rounded-xl animate-spin-slow opacity-20"
              aria-hidden
            ></motion.div>

            <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
              <div className="mb-2 text-5xl text-blue-600">{stat.logo}</div>
              <h2 className="text-xl font-bold text-blue-300">
                {stat.title}
              </h2>
              <p className="text-sm opacity-90">{stat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyAlrayida;
