"use client";
import Hero from "./components/hero-section/Hero";
import Skills from "./components/skill-section/Skills";
import Resume from "./components/resume-section/Resume";
import About from "./components/about-section/About";
import Contact from "./components/contact+footer/Contact";
import Footer from "./components/contact+footer/Footer";
import Work from "./components/work-section/work";



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
