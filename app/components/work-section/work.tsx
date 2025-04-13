"use client";
import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";
import Education from "./EducationTimeline";
// @ts-expect-error
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Work() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Startify",
      gitLink: "https://github.com/KunalPusdekar/NEXT_JS",
      liveLink: "https://project-startify123.vercel.app/",
      about:
        "Built a platform to explore and share startup pitches with real-time updates via Sanity CMS. Includes GitHub login, personalized profiles, and intuitive search functionality.",
      stack: ["Next.js", "React", "Sanity", "TailwindCSS", "TypeScript"],
      img: "/startify.png",
    },
    {
      title: "Coursify",
      gitLink: "https://github.com/KunalPusdekar/Coursify",
      liveLink: "",
      about:
        "Developed a full-stack LMS with secure login, role-based access, and course management. Integrated Razorpay for payments and built user dashboards with real-time course updates.",
      stack: ["React", "Express", "MongoDB"],
      img: "/Coursify.png",
    },
    {
      title: "AI Chatbot",
      gitLink: "https://github.com/your-username/ai-chatbot", // Replace with actual repo
      liveLink: "https://aibot.vercel.app", // Replace if needed
      about:
        "Created a voice-enabled AI chatbot with memory control and session analytics. Used Groq API and Streamlit for responsive, real-time interaction.",
      stack: ["Groq API", "Streamlit"],
      img: "/chatbot.png",
    },
    
  ];

  

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
      <Education />
    </section>
  );
}