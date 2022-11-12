import React from "react";
import Container from "../Layout/Container";

import figma from "../assets/images/Figma.svg";
import sketch from "../assets/images/Sketch.svg";
import zeplin from "../assets/images/Zeplin.svg";
import adobe from "../assets/images/Adobe.svg";
import slack from "../assets/images/Slack.svg";
import webflow from "../assets/images/Webflow.svg";

const LogoSection = () => {
  return (
    <Container className="w-full py-10">
      <div className="flex justify-between gap-2 w-full bg-inherit overflow-x-auto">
        <img src={figma} alt="Figma" />
        <img src={adobe} alt="adobe" />
        <img src={zeplin} alt="Figma" />
        <img src={sketch} alt="Figma" />
        <img src={webflow} alt="Figma" />
        <img src={slack} alt="Figma" />
      </div>
    </Container>
  );
};

export default LogoSection;
