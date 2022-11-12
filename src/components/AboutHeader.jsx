import React from "react";
import uche1 from "../assets/images/uche-1.png";
import Container from "../Layout/Container";

const AboutHeader = () => {
  return (
    <Container>
      <img src={uche1} alt="Uchenna" className="w-full" />
      <div className="my-6">
        <h1 className="text-xl lg:text-4xl font-bold my-3">Who am I?</h1>
        <div className="grid lg:grid-cols-2 justify-between gap-3 lg:gap-10">
          <p>
            For the past 6 years, I've worked as a Multidisciplinary Designer
            and Product Designer, including 2 years as a Product Designer for
            NGO's and African businesses and startups – (Financial technology,
            Edtech, Crypto Startups, Social Networks and developmental
            organisations). I have also collaborated with major industry class
            designers both locally and international as collaboration is key to
            giving out the best of qualities.
          </p>
          <p>
            I am capable of operating as a one-person design firm and treating
            my clients as creative collaborators. So I'm more than simply a
            product designer or a project manager; I'm a design entrepreneur who
            appreciates the faith that clients invest in me. Digital products
            and digital brand experiences, as well as user interfaces and
            experiences, are among my key interests.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutHeader;
