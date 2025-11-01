import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import image1 from "../../../assets/Shabaz Mahamood.jpg";
import image2 from "../../../assets/Sahil.jpg";
import image3 from "../../../assets/Habib.jpg";
import image4 from "../../../assets/hasan.jpg";
import image5 from "../../../assets/Arafat.jpg";
import image6 from "../../../assets/Mamun.jpg";
import image7 from "../../../assets/Shadin.jpg";
import image8 from "../../../assets/Iqbal.jpg";
import image9 from "../../../assets/Sharmin.jpg";
import image10 from "../../../assets/Nasim.jpg";
import image11 from "../../../assets/Shaon.jpg";
import image12 from "../../../assets/Abrarul.jpg";
import image13 from "../../../assets/Sazedin.jpg";
import image14 from "../../../assets/Ramisa.jpg";
import image15 from "../../../assets/Mehedi.jpg";
import image16 from "../../../assets/Lamia.jpg";
import image17 from "../../../assets/Anik.jpg";
import image18 from "../../../assets/Utpal.jpg";
import image19 from "../../../assets/Omara.jpg";
import image20 from "../../../assets/Emon.jpg";

// Team members data
const teamMembers = [
  { name: "Shabaz Mahamood", title: "CEO & Founder", image: image1 },
  {
    name: "Sahil Arman",
    title: "Co‑Founder",
    image: image2,
  },
  {
    name: "Habibur Rahman ",
    title: "CMO",
    image: image3,
  },
  {
    name: "Hasan Siddique",
    title: "COO",
    image: image4,
  },
  {
    name: "Arafat Sani",
    title: "Mern Stack Developer",
    image: image5,
  },

  {
    name: "Mamunur Roshid Anas",
    title: "Mern Stack Developer",
    image: image6,
  },
  {
    name: "Shadin Sharkar",
    title: "Full Stack Developer",
    image: image7,
  },
  {
    name: "Iqbal Hossain",
    title: "Wordpress Developer",
    image: image8,
  },
  {
    name: "Anik Chakraborty ANi",
    title: "Developer",
    image: image17,
  },
  {
    name: "Utpal Karmakar",
    title: "Developer",
    image: image18,
  },
  {
    name: "Emon Das",
    title: "Developer",
    image: image20,
  },
  {
    name: "Sharmin Snigdha",
    title: "Digital Marketing Specialist",
    image: image9,
  },
  {
    name: "MD Nasim Uddin Nahid",
    title: "Digital Marketing Specialist",
    image: image10,
  },
  {
    name: "Mohammed Shaon Pramanik",
    title: "Digital Marketing Specialist",
    image: image11,
  },
  {
    name: "Abrarul H Noman",
    title: "Video Editor",
    image: image12,
  },
  {
    name: "Sazedin Noman",
    title: "Video Editor",
    image: image13,
  },
  {
    name: "Omara Noor Subah",
    title: "Video Editor",
    image: image19,
  },
  {
    name: "Ramisa Tarannum",
    title: "Graphic Designer",
    image: image14,
  },
  {
    name: "Mehedi Hassan",
    title: "Graphic Designer",
    image: image15,
  },
  {
    name: "Lamia Akter",
    title: "Content Writer",
    image: image16,
  },
];

// Split into rows
function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const MeetAlrayida = () => {
  const [cols, setCols] = useState(4);

  useEffect(() => {
    const updateCols = () => {
      const w = window.innerWidth;
      if (w >= 1024) setCols(4);
      else if (w >= 768) setCols(3);
      else setCols(2);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const rows = chunk(teamMembers, cols);

  // Base speed in pixels per second (same on all devices)
  const baseSpeed = 80;

  return (
    <div className="p-5 text-white font-sans max-w-[1440px] mx-auto">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-row {
            display: flex;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
      </style>

      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-2xl font-bold md:text-5xl opacity-90">
          Meet the <span className="text-blue-500">Alraayida</span> Team
        </h1>
        <p className="max-w-3xl px-4 mx-auto mt-4 text-sm md:text-lg opacity-70">
          Get to know the passionate experts behind Alrayida! Our team of
          skilled designers, developers, and strategists is dedicated to
          delivering innovative solutions and exceptional results.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="space-y-8">
        {rows.map((row, idx) => {
          const totalWidth = row.length * 2 * (100 / cols);
          const itemWidthPx = 240; // Approximate width of each card
          const fullRowWidthPx = row.length * 2 * itemWidthPx;
          const duration = fullRowWidthPx / baseSpeed; // px/s

          return (
            <div key={idx} className="relative overflow-hidden">
              {/* <div className="absolute inset-y-0 left-0 z-10 w-16 pointer-events-none bg-gradient-to-r from-black/80 to-transparent" />
              <div className="absolute inset-y-0 right-0 z-10 w-16 pointer-events-none bg-gradient-to-l from-black/80 to-transparent" /> */}

              <div
                className="grid w-full grid-cols-2 gap-2 lg:grid-cols-4 md:grid-cols-3"
                style={{
                }}
              >
                {[...row].map((member, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-full px-2"
                  >
                    <div className="relative overflow-hidden transition-transform duration-500 border shadow-xl group bg-white/5 backdrop-blur-sm rounded-xl border-white/10">
                      <div className="relative">
                        <div className="relative p-[2px] rounded-xl bg-gradient-to-br from-white via-black to-white shadow-lg">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="object-cover object-top w-full h-[150px] md:h-[250px] rounded-xl"
                          />
                        </div>
                        <div className="absolute inset-0 flex items-end justify-center p-4 transition duration-500 opacity-0 bg-gradient-to-t from-black/70 to-transparent">
                          {/* Social icons or overlay could go here */}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-center md:text-xl">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-sm text-center text-gray-400">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeetAlrayida;
