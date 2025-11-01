import React, { useState } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Finding best IT help Bangladesh',
    category: 'Digital Marketing',
    image: 'https://t4.ftcdn.net/jpg/02/52/76/09/360_F_252760983_ZTCURKreID1WJkC7uiX6olt7hH0Q7v8X.jpg',
    date: '2025-01-04',
    description: 'Discover smart IT solutions and trusted support across Bangladesh today.',
  },
  
  {
    id: 3,
    title: 'Searching top IT support Bangladesh ',
    category: 'Web Development',
    image: 'https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg',
    date: '2025-03-07',
    description: 'Discover smart IT solutions and trusted support across Bangladesh today.',
  },
  
];

const categories = [
  'All',
  'Digital Marketing',
  'Web Development',
];

const TabBlog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category.trim() === activeCategory.trim());

  return (
    <div className="p-6 w-full bg-[#111]">
      <div className="mx-auto max-w-7xl">
        {/* Tabs */}
        <div className="grid justify-start grid-cols-3 gap-4 mb-8 md:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-[7px] md:text-sm font-semibold transition-all duration-300 border
              ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <LazyMotion features={domAnimation}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden group rounded-2xl"
              >
                <div className="animated-border">
                  <div className="p-1 overflow-hidden bg-slate-600 rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-48"
                    />
                    <div className="p-5 bg-[#122154] text-white">
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-white uppercase">
                          {post.category}
                        </p>
                        <p className="mb-1 text-lg text-white">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-white">
                        {post.title}
                      </h3>
                      <p className="text-sm text-white">{post.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </LazyMotion>

        {filteredPosts.length === 0 && (
          <p className="mt-10 text-center text-gray-500">
            No blog posts found.
          </p>
        )}
      </div>
    </div>
  );
};

export default TabBlog;
