"use client";
import Hero from "./hero-section/Hero";
import Skills from "./skill-section/Skills";
import Resume from "./resume-section/Resume";
import About from "./about-section/About";
import Contact from "./contact+footer/Contact";
import Footer from "./contact+footer/Footer";
import Work from "./work-section/work";



export default function Home() {
 

  return (
    <main className="overflow-x-hidden sm:overflow-x-visible">
      <Hero />
      <Skills />
      <Resume />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
