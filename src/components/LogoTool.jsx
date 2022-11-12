import React, { useContext } from "react";
import themeContext from "../context/themeContext/themeContext";

const LogoTool = ({ image }) => {
  const { isDarkTheme } = useContext(themeContext);
  return (
    <div
      className={`flex item-center justify-center min-w-[100px] border-2 ${
        isDarkTheme ? "border-white" : "border-black"
      } rounded-sm py-5 px-2 h-fit`}
    >
      <img src={image} alt="fiididk" className="w-[80%] h-[30px]" />
    </div>
  );
};

export default LogoTool;
