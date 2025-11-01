import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CareerMoments = () => {
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
    <div className="text-white bg-[#0f0f0f] px-4 py-10 relative">
      <div className="mx-auto max-w-7xl">
        {/* Gradient Animation Keyframes */}
        <style>{`
        @keyframes gradientBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

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

export default CareerMoments;
