"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 text-gray-800 px-8 pt-24 gap-10">
      {/* Profile Picture */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl border-4 border-pink-300"
      >
        <Image
          src="/susmi.png"
          alt="Susmita Yogi"
          className="object-cover w-full h-full"
          width={240}
          height={240}
          priority
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="text-center md:text-left max-w-lg"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4">
          Hey there! I’m Susmita 💖
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          BScIT Grad 🎓 | Creative Coder 💻 | Hospitality Queen 👑 <br />
          Blending software & service into sweet solutions.
        </p>

        {/* Contact + Socials */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-pink-500 text-white rounded-full font-medium shadow-lg hover:bg-pink-600 transition"
          >
            Get in Touch 💌
          </motion.a>

          {/* Social Icons */}
          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 text-2xl hover:text-pink-800 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 text-2xl hover:text-pink-800 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:yogisusmita99@gmail.com"
            className="text-pink-600 text-2xl hover:text-pink-800 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
