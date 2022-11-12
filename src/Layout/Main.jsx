import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <div className="w-full h-[40px] bg-red-500"></div>
      <Outlet />
      <div className="w-full h-[40px] bg-red-500"></div>
    </main>
  );
};

export default Main;
