import React, { useContext } from "react";
import HeroSection from "../components/HeroSection";
import themeContext from "../context/themeContext/themeContext";

const Projects = () => {
  const { navColor, primaryTextColor, backgroundColor } = useContext(themeContext);
  return (
    <section className={`${backgroundColor} ${primaryTextColor}`}>
      <HeroSection />
    </section>
  );
};

export default Projects;
