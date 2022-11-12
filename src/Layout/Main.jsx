import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Main = () => {
  return (
    <main>
      <Navigation />
      <Outlet />
      {/* <div className="w-full h-[40px] bg-red-500"></div> */}
    </main>
  );
};

export default Main;
