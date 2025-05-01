"use client"
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Blood Bank Management System",
    description: "A system to manage blood stocks and emergencies across Nepal.",
    technologies: ["Django", "MongoDB", "JavaScript"],
    link: "https://https://github.com/susmita55/blood-bank-management",
    image: "/susmi.png", // Add an image in your 'public/images' folder
  },
  {
    title: "Hotel Management System",
    description: "A system to handle booking, rooms, and customer management.",
    technologies: ["Node.js", "Express", "MySQL"],
    link: "https://https://github.com/susmita55",
    image: "/susmi.png", // Add an image in your 'public/images' folder
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-yellow-100 text-gray-800 px-8 pt-24">
      <motion.h1
        className="text-center text-4xl font-extrabold text-green-600 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-green-600 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-green-200 text-green-800 rounded-full px-4 py-1 text-sm mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white py-2 px-6 rounded-full font-medium hover:bg-green-600 transition"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
