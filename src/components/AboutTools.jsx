import React from "react";
import Container from "../Layout/Container";
import { ListTool, LogoTool } from "./";

import figma from "../assets/images/Figma.svg";
import sketch from "../assets/images/Sketch.svg";
import zeplin from "../assets/images/Zeplin.svg";
import adobe from "../assets/images/Adobe.svg";
import slack from "../assets/images/Slack.svg";
import webflow from "../assets/images/Webflow.svg";
import notion from "../assets/images/Notion.svg";
import inVision from "../assets/images/InVision.svg";

const AboutTools = () => {
  return (
    <Container className="grid lg:grid-cols-2 gap-4 lg:gap-10 justify-between">
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold max-w-[300px]">
          Key Specification and Tools
        </h1>
        <ul className="flex flex-col gap-1 my-3">
          <ListTool text="Product Design" />
          <ListTool text="Brand Identity Engineering" />
          <ListTool text="Web design (UX/UI)" />
          <ListTool text="Wire-framing" />
          <ListTool text="UX research (analytics, tests, interviews)" />
          <ListTool text="Motion Design" />
          <ListTool text="Design System creation" />
          <ListTool text="Art Direction" />
        </ul>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <LogoTool image={figma} />
        <LogoTool image={adobe} />
        <LogoTool image={zeplin} />
        <LogoTool image={webflow} />
        <LogoTool image={slack} />
        <LogoTool image={sketch} />
        <LogoTool image={notion} />
        <LogoTool image={inVision} />
        <LogoTool image={inVision} />
      </div>
    </Container>
  );
};

export default AboutTools;
