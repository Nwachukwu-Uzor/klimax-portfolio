import React from "react";
import Container from "../Layout/Container";

import avatar from "../assets/images/avatar.png";

const ResumeHeader = () => {
  return (
    <Container>
      <div className="flex justify-between">
        <div className="flex gap-2 lg:gap-6">
          <img src={avatar} alt="avatar" className="h-[60px] lg:h-[100px]" />
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold">Uchenna Ugwoke</h1>
            <p className="my-2 text-lg lg:text-xl">Product Designer</p>
          </div>
        </div>
        <p className="my-2 lg:text-lg">+2348164411188</p>
      </div>
      <div className="my-5 lg:my-14 flex flex-col lg:flex-row justify-between">
        <h1 className="text-2xl lg:text-4xl font-bold">PROFILE</h1>
        <p className="my-2 lg:my-0 lg:text-lg lg:w-[50%]">
          A Multidisciplinary Designer (Brand Strategy, Identity Design, Graphic
          Design,Data Design & Art Direction) and Product Designer, including 2
          years as a Product Designer for NGO's and African businesses and
          startups – (Financial technology, Edtech and developmental
          organisations).
        </p>
      </div>
    </Container>
  );
};

export default ResumeHeader;
