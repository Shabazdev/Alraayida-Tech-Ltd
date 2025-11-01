import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import moment1 from "../../../assets/moment1.jpg";
import moment2 from "../../../assets/moment2.jpg";

const MomentsAlrayida = () => {
  const stats = [
    { count: 30, suffix: '+', label: 'Country Served' },
    { count: 13, suffix: '+', label: 'Tech Partners' },
    { count: 5, suffix: 'M+', label: 'Ads Spending' },
    { count: 20, suffix: '+', label: 'Team Members' },
    { count: 8, suffix: '+', label: 'Industries' },
    { count: 250, suffix: '+', label: 'Projects' },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="bg-[#0f0f0f] hidden">
      <div className="relative px-4 py-10 mx-auto text-white max-w-7xl">
        <style>{`
        @keyframes gradientBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold md:text-4xl">Moments at</h1>
          <p className="text-xl text-gray-400 md:text-4xl">Alraayida</p>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-12">
          <img
            className="w-full max-w-screen-lg p-5 rounded-lg shadow-xl"
            src="https://i.ibb.co/sp8vqdrT/Screenshot-2025-04-19-192714.png"
            alt="Moments at Alrayida"
          />
        </div>

        {/* How We Work */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-semibold md:text-4xl">
            How We Work
          </h2>
          <p className="max-w-4xl mx-auto text-sm leading-relaxed text-gray-400 md:text-lg">
            We promise pixel-perfect results for our clients' websites. We are
            Alrayida. We design, develop, and deliver high-quality responsive
            website development with passion and precision.
          </p>
        </div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 gap-6 lg:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative group w-full text-center p-[2px] rounded-xl"
              style={{
                background:
                  "linear-gradient(270deg, #ff00cc, #3333ff, #00ffff, #ffcc00)",
                backgroundSize: "800% 800%",
                animation: "gradientBorder 4s ease infinite",
              }}
            >
              <div className="px-6 py-8 transition duration-300 bg-black/80 rounded-xl group-hover:shadow-xl">
                <h1 className="text-3xl font-bold text-white">
                  {inView && <CountUp end={item.count} duration={2} />}{" "}
                  {item.suffix}
                </h1>
                <p className="mt-2 text-gray-300">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MomentsAlrayida;
