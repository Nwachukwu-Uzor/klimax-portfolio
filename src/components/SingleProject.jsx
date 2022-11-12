import React from "react";

const SingleProject = ({ image, title, shortDescription, tag }) => {
  return (
    <div>
      <img src={image} alt={title} className="h-[400px] w-full object-center" />
      <p className="my-2 text-lg lg:text-xl font-semibold">{title}</p>
      <p>
        <span className="font-light">{shortDescription}</span>
        {" | "}
        <span className="text-[#08D76F] font-bold">{tag}</span>
      </p>
    </div>
  );
};

export default SingleProject;
