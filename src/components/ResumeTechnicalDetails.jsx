import React from "react";
import Container from "../Layout/Container";

const ResumeTechnicalDetails = () => {
  return (
    <section>
      <Container className="grid grid-cols-2 justify-between">
        <h1 className="text-2xl lg:text-4xl font-bold">TECHNICAL SKILLS</h1>
        <p className="text-2xl lg:text-4xl">🤹</p>
        <div className="flex flex-col my-2 gap-2">
            <p>Brand ID design</p>
            <p>Interaction Design</p>
            <p>User Research</p>
            <p>Mobile App Design</p>
            <p>Visual Design</p>
        </div>
      </Container>
    </section>
  );
};

export default ResumeTechnicalDetails;
