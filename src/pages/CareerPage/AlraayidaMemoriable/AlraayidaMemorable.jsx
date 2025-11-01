import React from 'react';

const AlraayidaMemorable = () => {
  const group1 = [
    "https://www.zentexx.com/assets/workingProcess4-CpH0gLC6.svg",
    "https://www.zentexx.com/assets/workingProcess1-BqpMN3E0.svg",
    "https://www.zentexx.com/assets/workingProcess5-DollsCQp.svg",
    "https://www.zentexx.com/assets/workingProcess2-BCfGabQD.svg",
    "https://www.zentexx.com/assets/workingProcess3-DZ5U0nuA.svg",
  ];

  const group2 = [
    "https://www.zentexx.com/assets/workingProcess8-DIWl4_cg.svg",
    "https://www.zentexx.com/assets/workingProcess9-B2oI2NMq.svg",
    "https://www.zentexx.com/assets/workingProcess10-H0_B7MBe.svg",
    "https://www.zentexx.com/assets/workingProcess6-B1FMCp1I.svg",
    "https://www.zentexx.com/assets/workingProcess6-B1FMCp1I.svg",
  ];

  return (
    <div className="text-white bg-[#111] py-16 overflow-hidden hidden">
      <div className="mx-auto max-w-7xl">
        <style>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: scroll-left 30s linear infinite;
        }

        .marquee-track.reverse {
          animation: scroll-right 30s linear infinite;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }

        .marquee-track img {
          height: auto;
          width: auto;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .marquee-track {
            gap: 1.25rem;
            animation-duration: 30s;
          }

          .marquee-track.reverse {
            animation-duration: 30s;
          }

          .marquee-track img {
            width: auto;
          }
        }
      `}</style>

        <div className="px-4 mb-10 text-center">
          <h1 className="text-2xl font-bold leading-snug md:text-6xl">
            Alraayida’s memorable and fun times
          </h1>
        </div>

        {/* Top Marquee */}
        <div className="mb-10 marquee-container">
          <div className="marquee-track">
            {[...group1, ...group1].map((src, idx) => (
              <img key={idx} src={src} alt={`group1-${idx}`} />
            ))}
          </div>
        </div>

        {/* Bottom Marquee (reverse direction) */}
        <div className="marquee-container">
          <div className="marquee-track reverse">
            {[...group2, ...group2].map((src, idx) => (
              <img key={idx} src={src} alt={`group2-${idx}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlraayidaMemorable;
