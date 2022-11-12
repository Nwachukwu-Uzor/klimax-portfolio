import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import themeContext from "../context/themeContext/themeContext";
import Navigation from "./Navigation";

const Main = () => {
  const { backgroundColor, primaryTextColor } = useContext(themeContext);
  return (
    <main className={`${backgroundColor} ${primaryTextColor}`}>
      <Navigation />
      <section>
        <Outlet />
      </section>
      {/* <div className="w-full h-[40px] bg-red-500"></div> */}
    </main>
  );
};

export default Main;
