import React from "react";
import Container from "../Layout/Container";

import uche2 from "../assets/images/uche-2.png";
import uche3 from "../assets/images/uche-3.png";

const AboutImageSection = () => {
  return (
    <Container className="grid lg:grid-cols-2 gap-4 items-stretch">
      <img src={uche2} alt="uche 2" className="lg:col-span-2 w-full" />
      <div className="min-h-[300px] w-full bg-[#7225F5]"></div>
      <img src={uche3} alt="uche 3" className="w-full" />
    </Container>
  );
};

export default AboutImageSection;
