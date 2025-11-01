import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

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

const teamMembers = [
  {
    name: "Shabaz Mahamood",
    title: "CEO & Founder",
    image: image1,
    feedback:
      "At Alraayida IT Solution, we value the creative freedom and advanced marketing tools that drive our competitiveness. Though improved goal-setting and clearer campaign metrics could further strengthen our performance.",
  },
  {
    name: "Sahil Arman",
    title: "Co-Founder",
    image: image2,
    feedback:
      "At Alraayida IT Solution, we value the creative freedom and advanced marketing tools that drive our competitiveness. Though improved goal-setting and clear campaign metrics could further strengthen our performance.",
  },
  {
    name: "Habibur Rahman",
    title: "CMO",
    image: image3,
    feedback:
      "Alraayida empowers us to explore design freedom while staying grounded in performance metrics that matter.",
  },
  {
    name: "Hasan Siddique",
    title: "COO",
    image: image4,
    feedback:
      "With Alraayida's culture and tools, we push boundaries in our campaigns and track impact with clarity.",
  },
  {
    name: "Arafat Sani",
    title: "MERN Stack Developer",
    image: image5,
    feedback:
      "Alraayida provides a dynamic environment where innovation thrives, and continuous learning is encouraged, helping me grow as a developer.",
  },
  {
    name: "Mamunur Roshid Anas",
    title: "Front End Developer",
    image: image6,
    feedback:
      "Working at Alraayida gives me the opportunity to bring creative ideas to life with cutting-edge technologies and user-focused designs.",
  },
  {
    name: "Shadin Sharkar",
    title: "Full Stack Developer",
    image: image7,
    feedback:
      "The collaborative spirit at Alraayida allows us to build robust solutions while constantly improving our technical expertise.",
  },
  {
    name: "Iqbal Hossain",
    title: "WordPress Developer",
    image: image8,
    feedback:
      "Alraayida supports my passion for development by offering real-world projects that challenge and refine my skills daily.",
  },
  {
    name: "Sharmin Snigdha",
    title: "Digital Marketing Specialist",
    image: image9,
    feedback:
      "Alraayida nurtures creativity and strategic thinking, allowing me to craft impactful campaigns that deliver measurable results.",
  },
  {
    name: "MD Nasim Uddin Nahid",
    title: "Digital Marketing Specialist",
    image: image10,
    feedback:
      "The innovative tools and supportive team at Alraayida empower me to execute effective digital strategies with confidence.",
  },
  {
    name: "Mohammed Shaon Pramanik",
    title: "Digital Marketing Specialist",
    image: image11,
    feedback:
      "At Alraayida, I’m able to experiment with new marketing trends and techniques, which keeps our campaigns fresh and engaging.",
  },
  {
    name: "Abrarul H Noman",
    title: "Video Editor",
    image: image12,
    feedback:
      "Alraayida encourages artistic expression while maintaining a strong focus on delivering high-quality visual content that resonates.",
  },
  {
    name: "Sazedin Noman",
    title: "Video Editor",
    image: image13,
    feedback:
      "Here at Alraayida, creativity meets precision—allowing me to produce compelling videos that align with brand goals and audience needs.",
  },
  {
    name: "Ramisa Tarannum",
    title: "Graphic Designer",
    image: image14,
    feedback:
      "Alraayida inspires me to push visual boundaries while ensuring every design contributes meaningfully to the overall strategy.",
  },
  {
    name: "Mehedi Hassan",
    title: "Graphic Designer",
    image: image15,
    feedback:
      "The creative atmosphere at Alraayida fuels my passion for design, enabling me to create visually stunning and purposeful content.",
  },
  {
    name: "Lamia Akter",
    title: "Content Writer",
    image: image16,
    feedback:
      "At Alraayida, I get to shape stories that connect with audiences, all while being part of a team that values meaningful communication.",
  },
];

const TeamAbility = () => {
  const cardsPerPage = 2;
  const totalPages = Math.ceil(teamMembers.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir) => {
    setDirection(dir);
    setCurrentPage((prev) => {
      let next = prev + dir;
      if (next < 0) return 0;
      if (next >= totalPages) return totalPages - 1;
      return next;
    });
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    preventScrollOnSwipe: true,
    trackMouse: true // Important for mouse dragging
  });

  const getCurrentCards = () => {
    const startIndex = currentPage * cardsPerPage;
    return teamMembers.slice(startIndex, startIndex + cardsPerPage);
  };

  return (
    <div className="w-full bg-[#0c0c0c] py-10" {...swipeHandlers} style={{ userSelect: 'none' }}>
      <div className="max-w-6xl px-4 mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.3 }}  // Smoother transition with reduced time
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {getCurrentCards().map((member, idx) => (
              <div key={idx} className="bg-[#0d1c3b] p-6 rounded-xl text-white shadow-lg flex flex-col justify-between min-h-[250px]">
                <p className="mb-6 text-sm">{member.feedback}</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={member.image} alt={member.name} className="object-cover w-12 h-12 border-2 border-white rounded-full" />
                  <div>
                    <h4 className="font-bold">{member.name}</h4>
                    <p className="text-sm opacity-75">{member.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentPage ? 'bg-blue-500' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamAbility;
