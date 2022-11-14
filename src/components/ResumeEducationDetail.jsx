import React from "react";
import Container from "../Layout/Container";

const ResumeEducationDetail = ({ title, date, school }) => {
  return (
    <Container className="grid lg:grid-cols-2 justify-between">
      <div className="text-[#808080]">
        <p>{date}</p>
      </div>
      <div>
        <h1 className="text-xl lg:text-2xl font-bold">{title}</h1>
        <p className="my-2">{school}</p>
      </div>
    </Container>
  );
};

export default ResumeEducationDetail;
