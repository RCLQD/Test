import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudies";
import WhatWeDo from "./pages/WhatWeDo";
import OurProcess from "./pages/OurProcess";
import Faq from "./pages/Faq";

export default function App() {
  const homeRef = useRef(null);
  const casestudyRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const ourProcessRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (section) => {
    const sections = {
      home: homeRef,
      casestudy: casestudyRef,
      whatwedo: whatWeDoRef,
      ourprocess: ourProcessRef,
      faq: faqRef,
    };
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Navbar onScrollTo={scrollToSection} />
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={casestudyRef}>
          <CaseStudy />
        </div>
        <div ref={whatWeDoRef}>
          <WhatWeDo />
        </div>
        <div ref={ourProcessRef}>
          <OurProcess />
        </div>
        <div ref={faqRef}>
          <Faq />
        </div>
    </Router>
  );
}
