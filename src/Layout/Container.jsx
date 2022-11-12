import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`w-[90%] w-max-[1300px] mx-auto py-2 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
