"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Intro = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100 px-6 pt-24 pb-16 scroll-smooth"
    >
      {/* Left: Text */}
      <motion.div
        className="text-center lg:text-left max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-green-700 leading-tight mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Curious to know who I really am?{" "}
          <br className="hidden md:block" /> Let’s dive in! 🏊‍♀️
        </motion.h1>
        <p className="text-lg text-gray-700 mb-6">
          A tech-loving, hospitality-driven creative soul from Queens, NY.
          I'm passionate about building beautiful software, handling customers with care,
          and learning something new every day. 📚✨
        </p>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <a href="#projects">
            <motion.button
              className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md font-medium hover:bg-green-700 transition flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See My Projects <FaArrowRight />
            </motion.button>
          </a>
          <a href="#contact">
            <motion.button
              className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-md font-medium hover:bg-pink-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </a>
        </div>
      </motion.div>

      {/* Right: Profile Image */}
      <motion.div
        className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-green-400"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <img  
          src="/Profile.JPG"
          alt="Profile of Susmita Yogi"
          className="object-cover w-full h-full"
          onContextMenu={(e) => e.preventDefault()}  // Correct event handler
          onDragStart={(e) => e.preventDefault()}   // Correct event handler
          onDrag={(e) => e.preventDefault()}        // Correct event handler
          onDragEnd={(e) => e.preventDefault()}     // Correct event handler
          onDragEnter={(e) => e.preventDefault()}   // Correct event handler
          onDragOver={(e) => e.preventDefault()}    // Correct event handler
          onDragLeave={(e) => e.preventDefault()}   // Correct event handler
          style={{ pointerEvents: 'none' }}         // Correct inline style syntax
        />

      </motion.div>
    </section>
  );
};

export default Intro;
