import React, { useContext, useState } from "react";
import {
  ResumeEducation,
  ResumeExperience,
  ResumeHeader,
  ResumeTechnicalDetails,
} from "../components";
import themeContext from "../context/themeContext/themeContext";
import Container from "../Layout/Container";

const Resume = () => {
  const { isDarkTheme } = useContext(themeContext);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded((expanded) => !expanded);
  };

  return (
    <section>
      <Container>
        <h1 className="text-3xl lg:text-7xl font-bold my-3">
          Resumé.
          <span
            className={`h-0.5 ml-2 w-[200px] lg:w-[350px] inline-block flex-1 ${
              isDarkTheme ? "bg-white" : "bg-black"
            }`}
          ></span>
        </h1>
      </Container>
      <ResumeHeader />
      <ResumeExperience />
      {isExpanded ? (
        <>
          <ResumeEducation />
          <ResumeTechnicalDetails />
        </>
      ) : null}
      <Container>
        <div className="flex items-center justify-center my-4">
          <div>
            <div>
              <span
                className="text-3xl h-[50px] w-[50px] ring-2 ring-[#08D76F] mx-auto rounded-full text-[#08D76F] flex items-center justify-center active:opacity-80 cursor-pointer"
                onClick={handleExpand}
              >
                <ion-icon
                  name={isExpanded ? "arrow-up" : "arrow-down"}
                ></ion-icon>
              </span>
              <p className="my-2 text-center">
                {isExpanded ? "Collapse" : "Show All"}
              </p>
            </div>
            <div className="mb-2 mt-10">
              <a
                href="http://"
                className="gradientBg text-black text-center py-3 w-[200px] mx-auto px-4 rounded-md flex gap-2 items-center justify-center"
              >
                Download Resume
                <span className="text-2xl flex items-center justify-center">
                  <ion-icon name="arrow-down"></ion-icon>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Resume;
