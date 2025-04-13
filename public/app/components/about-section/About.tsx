"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";
import ResumeButton from "./Resume_Button";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I amplify brand voices through the web
      </AnimatedTitle>
      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Hey, I&#39;m Kunal Pusdekar — a passionate full-stack developer and
            AI/ML enthusiast based in Nagpur, Maharashtra. I specialize in
            turning ideas into powerful digital solutions that don&#39;t just look
            good, but work flawlessly too. Whether it&#39;s building intuitive UIs
            or engineering smart ML models, I&#39;m all about impactful innovation.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            As a Computer Science undergraduate (2022–2026), I&#39;ve been diving
            deep into web development and AI/ML through hands-on projects,
            online courses, and internships. My curiosity and drive to learn
            have helped me build full-stack applications, explore cloud-based ML
            solutions, and collaborate remotely on real-world projects during
            internships at Nullclass and AWS Academy.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            I love learning through doing — from winning{" "}
            <strong>2nd prize</strong> at Hack The Space 2.0 to shipping live
            products like{" "}
            <Link
              className="underline"
              href="https://project-startify123.vercel.app"
              target="_blank"
            >
              Startify
            </Link>{" "}
            and an AI-powered chatbot — I thrive on solving complex challenges
            with clean code and creative thinking. Curious to know more about
            me? Here&apos;s <br className="hidden md:block" />
          </AnimatedBody>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend & Backend Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript (ES6+), TypeScript, React.js, Next.js, Express.js,
              Node.js, MongoDB, HTML5, CSS3, REST APIs, Git/GitHub, Vercel,
              Razorpay, Cloudinary, JWT Auth.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Libraries & UI Frameworks
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Tailwind CSS, Framer Motion, Chakra UI, Styled Components,
              Bootstrap, ReCharts, Formik, React Hook Form.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              AI/ML & Other Technologies
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Python, TensorFlow, Keras, scikit-learn, Streamlit, Pandas, NumPy,
              OpenCV, Jenkins, Linux, MySQL.
            </AnimatedBody>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-20 lg:mt-10 mx-auto w-fit">
        <ResumeButton />
      </div>
    </section>
  );
}