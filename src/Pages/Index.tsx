import React, { useEffect } from "react";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Hero from "./Hero";
import { gsap, TimelineLite, Power3 } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  let t1 = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    t1.staggerFrom(
      ".animate",
      1,
      { y: 30, ease: Power3.easeOut, opacity: 0 },
      0.15
    );
  }, [t1]);
  return (
    <div>
      <div className="animate">
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
        <Blogs />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
