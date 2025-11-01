import React, { useRef, useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import image from "../../assets/banner.jpg"

const Banner = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // COUNTERS
  const countersData = [
    { label: "Countries Served", end: 30 },
    { label: "Tech Partners", end: 13 },
    { label: "Projects", end: 250 },
  ];

  const [counts, setCounts] = useState(countersData.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const intervals = countersData.map((item, i) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[i] < item.end) {
            newCounts[i] += 1;
          }
          return newCounts;
        });
      }, 100);
    });

    const stopIntervals = setInterval(() => {
      setCounts((prev) => {
        const done = prev.every((val, i) => val >= countersData[i].end);
        if (done) {
          intervals.forEach(clearInterval);
          clearInterval(stopIntervals);
        }
        return prev;
      });
    }, 100);

    return () => intervals.forEach(clearInterval);
  }, [isInView]);

  return (
    <div
      ref={sectionRef}
      className="relative bg-center bg-cover"
    >
      <div className="w-full h-full mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-12 px-6 py-16 mx-auto md:flex-row max-w-7xl">
          {/* Left Section */}
          <motion.div
            className="flex-1 space-y-6 text-start md:text-left lg:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center justify-start gap-3 mt-20 md:justify-start">
              <img
                className="w-[40px] border-2 rounded-full bg-white"
                src="https://i.ibb.co.com/1fHBtB9M/google-logo.png"
                alt="Google"
              />
              <span className="text-lg font-semibold text-white">5</span>
              <div className="flex gap-1 rating">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`rating-${i}`}
                      className="bg-orange-400 mask mask-star-2"
                      defaultChecked
                      readOnly
                    />
                  ))}
              </div>
            </div>

            <h1 className="text-xl font-extrabold leading-tight text-white md:text-4xl drop-shadow-lg">
              Your Pro Team Alraayida
              <br />
              <span className="inline-block mt-2 text-blue-400 drop-shadow-md">
                <TypeAnimation
                  sequence={[
                    "Web Development",
                    2000,
                    "",
                    800,
                    "Digital Marketing",
                    2000,
                    "",
                    800,
                    "Graphics Design",
                    2000,
                    "",
                    800,
                    "UI/UX Design",
                    2000,
                    "",
                    800,
                    "Video Production",
                    2000,
                    "",
                    800,
                    "Branding",
                    2000,
                    "",
                    800,
                    "CRM and Saas development",
                    2000,
                    "",
                    800,
                    "Software development",
                    2000,
                    "",
                    800,
                  ]}
                  speed={60}
                  deletionSpeed={40}
                  wrapper="span"
                  repeat={Infinity}
                  className="inline-block"
                />
              </span>
            </h1>

            <p className="text-base leading-relaxed text-white opacity-50 sm:text-lg md:max-w-xl md:mx-0">
              Alraayida is a website and software development company dedicated
              to empowering startups and businesses. We specialize in building
              SaaS, mobile apps, and websites while helping organizations
              establish and manage efficient remote teams.
            </p>

            <div className="mt-6">
              <a href="calendly" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-5 max-sm:flex-col max-sm:items-start">
                  <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600 text-white border border-white/30 backdrop-blur transition-all duration-300 ease-in-out shadow-[0_0_18px_4px_rgba(0,149,255,0.4)] hover:scale-105">
                    Book Consultation <FaArrowRight size={20} />
                  </button>
                  <Link
                    to="/contactUs"
                    className="flex items-center gap-2 px-6 py-2 rounded-full bg-transparent text-white border border-white/30 backdrop-blur transition-all duration-300 ease-in-out shadow-[0_0_18px_4px_rgba(0,149,255,0.4)] hover:scale-105"
                  >
                    Contact Us <FaArrowRight size={20} />
                  </Link>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="flex justify-center flex-1 mt-24 lg:mt-40 max-sm:justify-start max-sm:items-start lg:w-1/2"
            initial={{ y: 90, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Shared Up-Down Animation Wrapper */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="relative"
            ></motion.div>

            {/* Overlay AI Image */}
            <img
              src={image}
              alt="Overlay"
              className="p-5 mx-5 -mt-48 rounded-full pointer-events-none max-sm:-mx-2 max-sm:-mt-32"
            />
          </motion.div>
        </div>

        {/* Counter Section */}
        <motion.div
          className="items-start hidden gap-8 p-2 text-white max-sm:my-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {countersData.map((item, i) => (
            <div
              key={i}
              className="pr-6 text-center border-r last:border-none last:pr-0"
            >
              <h2 className="text-4xl font-bold text-pink-100 max-sm:text-xl">
                {counts[i]}+
              </h2>
              <p className="mt-1 text-sm max-sm:text-xs text-white/80">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
