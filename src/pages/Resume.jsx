import React, { useContext } from "react";
import themeContext from "../context/themeContext/themeContext";
import Container from "../Layout/Container";

const Resume = () => {
  const { isDarkTheme } = useContext(themeContext);
  return (
    <div>
      <Container>
        <h1 className="text-3xl lg:text-7xl font-bold">
          Resumé.
          <span
            className={`h-0.5 ml-2 w-[200px] lg:w-[350px] inline-block flex-1 ${
              isDarkTheme ? "bg-white" : "bg-black"
            }`}
          ></span>
        </h1>
      </Container>
    </div>
  );
};

export default Resume;
