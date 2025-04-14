"use client";
import React from "react";
import { Syne } from "next/font/google";
import AnimatedTitle from "../ui/AnimatedTitle";
import AnimatedBody from "../ui/AnimatedBody";
import dynamic from "next/dynamic";
const DownloadResumeButton = dynamic(() => import("./Resume_Button"), {
  ssr: false,
});

const syne = Syne({ subsets: ["latin"] });

const Resume: React.FC = () => {
  return (
    <section
      id="resume"
      className={`pt-24 md:pt-[150px] px-6 max-w-6xl mx-auto ${syne.className} antialiased`}
    >
      {/* Animated Resume Heading */}
      <div className="text-center mb-16">
        <AnimatedTitle
          wordSpace="mr-[14px]"
          charSpace="mr-[0.001em]"
          className="uppercase text-4xl md:text-5xl font-bold opacity-90 text-white mb-3"
        >
          Resume
        </AnimatedTitle>
        <AnimatedBody className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-[34px] md:leading-[39px]">
          I&#39;m a third-year Computer Science student with a solid foundation
          in software development, currently honing my skills as a full stack
          web developer. I love solving problems, working with real-world
          technologies, and constantly challenging myself. Whether it&#39;s
          contributing to innovative startups or exploring AI/ML in the cloud —
          I thrive in dynamic, hands-on environments.
        </AnimatedBody>
        <div className="mt-10 sm:mt-20 lg:mt-10 mx-auto w-fit">
          <DownloadResumeButton />
        </div>
      </div>
    </section>
  );
};

export default Resume;
