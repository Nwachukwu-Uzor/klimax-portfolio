import React from "react";
import { Link } from "react-router-dom";
import { AboutHeader, AboutImageSection, AboutTools } from "../components";
import Container from "../Layout/Container";

const About = () => {
  return (
    <section>
      <Container className="flex flex-col lg:flex-row justify-between items-center py-8">
        <h1 className={`gradientText text-3xl lg:text-5xl font-extrabold`}>
          About Me
        </h1>
        <p className="max-w-[300px]">
          It's so great to meet you, I'm Uchenna Ugwoke
        </p>
      </Container>
      <AboutHeader />
      <AboutImageSection />
      <AboutTools />
      <Container className="flex items-center justify-center my-6">
        <div>
          <h1 className="mb-3 text-3xl lg:text-6xl">Let’s Work Together *</h1>
          <Link className="gradientBg text-black text-center py-3 w-[150px] lg:w-[200px] mx-auto px-4 rounded-md flex gap-2 items-center justify-center">
            Contact Me
            <span className="text-2xl flex items-center justify-center">
              <ion-icon name="arrow-forward"></ion-icon>
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default About;
