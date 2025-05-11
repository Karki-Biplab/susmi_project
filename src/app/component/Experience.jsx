"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaDownload } from "react-icons/fa";

const experiences = [
  {
    role: "Cashier / Waitress",
    company: "Cap’t Loui Seafood Boil – Queens, NY",
    duration: "Apr 1, 2025 – Present",
    description: "Handled order taking, serving, opening/closing, and prep work in a fast-paced seafood restaurant.",
  },
  {
    role: "Waitress / Cashier",
    company: "Gorkhali Nepalese Restaurant – New York",
    duration: "Dec 29, 2024 – Apr 1, 2025",
    description: "Took customer orders, served food, and managed the cash register, providing excellent customer service.",
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Freelance / Remote",
    duration: "2023 – 2024",
    description: "Developed Blood Bank Management System using Django and MongoDB as a solo project for final year.",
  },
];

const Experience = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-yellow-50 via-green-50 to-green-100 px-6 pt-24 pb-20 text-gray-800">
      <motion.h1
        className="text-4xl text-center font-extrabold text-green-600 mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience 🧳
      </motion.h1>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 h-full w-1 bg-green-300 rounded-full"></div>

        <div className="space-y-16 pl-14">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-6 rounded-md shadow-md border-l-4 border-green-400"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-8 top-6 w-6 h-6 bg-green-500 border-4 border-white rounded-full shadow-lg flex items-center justify-center">
                <FaBriefcase className="text-white text-sm" />
              </div>

              <h3 className="text-xl font-semibold text-green-700">{exp.role}</h3>
              <p className="text-sm font-medium text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2 italic">{exp.duration}</p>
              <p className="text-gray-700">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Download Button */}
      <motion.a
        href="/SusmitaResume.pdf"
        download
        className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-700 transition animate-bounce duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaDownload /> Download CV
      </motion.a>
    </section>
  );
};

export default Experience;
