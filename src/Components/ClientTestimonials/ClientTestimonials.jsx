import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const teamMembers = [
  {
    name: "Jone Doe",
    title: "CES, TechCorp - USA",
    image: "https://i.ibb.co/HDwhZnmT/image-36.png",
    feedback: "At Alraayida IT Solution, We Value The Creative Freedom And Advanced Marketing Tools That Drive Our Competitiveness, Though Improved Goal-Setting And Clearer Campaign Metrics Could Further Strengthen Our Performance."
  },
  {
    name: "Aisha Rahman",
    title: "Founder, EduBridge Bangladesh",
    image: "https://i.ibb.co/zVV5wjy4/image-37.png",
    feedback: "At Alraayida IT Solution, We Value The Creative Freedom And Advanced Marketing Tools That Drive Our Competitiveness, Though Improved Goal-Setting And Clearer Campaign Metrics Could Further Strengthen Our Performance."
  },
  {
    name: "Hasib Rahman",
    title: "UI Designer",
    image: "https://i.ibb.co/zVV5wjy4/image-37.png",
    feedback: "Alraayida empowers us to explore design freedom while staying grounded in performance metrics that matter."
  },
  {
    name: "Nusrat Jahan",
    title: "Marketing Strategist",
    image: "https://i.ibb.co/zVV5wjy4/image-37.png",
    feedback: "With Alraayida's culture and tools, we push boundaries in our campaigns and track impact with clarity."
  }
];

const ClientTestimonials = () => {
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
      <div className="max-w-6xl mx-auto px-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.3 }}  // Smoother transition with reduced time
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {getCurrentCards().map((member, idx) => (
              <div key={idx} className="bg-[#0d1c3b] p-6 rounded-xl text-white shadow-lg flex flex-col justify-between min-h-[250px]">
                <p className="text-sm mb-6">{member.feedback}</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full object-cover border-2 border-white" />
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

export default ClientTestimonials;
