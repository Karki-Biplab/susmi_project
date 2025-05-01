"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaJs, FaPython, FaJava, FaReact, FaNode, FaGitAlt, FaFigma, FaPhp,
  FaHtml5, FaCss3Alt, FaDatabase, FaGithub, FaBootstrap,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiFirebase, SiTailwindcss, SiNextdotjs, SiFlutter, SiExpress } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const skills = {
  "💻 Programming Languages": [
    { name: "Python", icon: <FaPython className="text-blue-500" />, level: 85 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 70 },
    { name: "Java", icon: <FaJava className="text-red-600" />, level: 75 },
    { name: "C++", icon: <TbBrandCpp className="text-blue-700" />, level: 80 },
    { name: "PHP", icon: <FaPhp className="text-indigo-500" />, level: 80 },
  ],
  "⚙️ Frameworks & Libraries": [
    { name: "Django", icon: <FaPython className="text-green-800" />, level: 90 },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" />, level: 70 },
    { name: "Node.js", icon: <FaNode className="text-green-600" />, level: 75 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 65 },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, level: 75 },
  ],
  "🛠️ Tools & Platforms": [
    { name: "GitHub", icon: <FaGithub className="text-black" />, level: 90 },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 90 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 75 },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: 70 },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, level: 75 },
    { name: "Figma", icon: <FaFigma className="text-pink-500" />, level: 85 },
    { name: "VS Code", icon: <FaJs className="text-blue-400" />, level: 99 },
  ],
};

const Skills = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 px-6 pt-24 pb-20 text-gray-800">
      <motion.h1
        className="text-4xl text-center font-extrabold text-green-600 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills 💫
      </motion.h1>

      <div className="space-y-16">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-6">{category}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg border border-green-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="text-green-800 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-green-100 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full transition-all duration-700 ease-in-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
