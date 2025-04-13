"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Syne } from "next/font/google";
import codingPerson from "../../../public/codingPerson.json";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaNpm,
  FaAws,
  FaPython,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { BsDatabaseFill } from "react-icons/bs";

const syne = Syne({ subsets: ["latin"] });

const Skills: React.FC = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-5xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-5xl" /> },
    { name: "React", icon: <FaReact className="text-5xl" /> },
    { name: "Node.js", icon: <FaNode className="text-5xl" /> },
    { name: "npm", icon: <FaNpm className="text-5xl" /> },
    { name: "SQL", icon: <BsDatabaseFill className="text-5xl" /> },
    { name: "AWS", icon: <FaAws className="text-5xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-5xl" /> },
    { name: "Python", icon: <FaPython className="text-5xl" /> },
    { name: "Docker", icon: <FaDocker className="text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-5xl" /> },
  ];

  const bulletSkills = [
    "Built full-stack projects with React, Node.js, and MongoDB",
    "Explored AI/ML with TensorFlow, AWS, and Streamlit",
    "Published live apps and collaborated on open-source projects",
  ];

  return (
    <section
      id="skills"
      className={`pt-24 md:pt-[150px] px-6 ${syne.className} antialiased`}
    >
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Lottie Animation */}
        <motion.div
          className="w-80 md:w-96 lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Lottie animationData={codingPerson} loop />
        </motion.div>

        {/* Content */}
        <motion.div
          className="lg:w-1/2 text-white/80"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 opacity-80 uppercase">
            What I do
          </h1>

          <p className="text-xl md:text-2xl leading-[34px] md:leading-[39px] mb-6">
            As a Computer Science student, I enjoy building cool projects, learning new tools, and solving real-world problems with code.
          </p>

          {/* Skills Icons with Animations */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center w-20 text-white/70 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.15, y: -4 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                {skill.icon}
                <p className="text-sm mt-1">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bullet Points */}
          <div className="space-y-4 text-white/60 text-lg md:text-xl leading-[34px] md:leading-[39px]">
            {bulletSkills.map((point, i) => (
              <p key={i}>⚡ {point}</p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;