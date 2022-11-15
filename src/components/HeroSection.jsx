import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Container from "../Layout/Container";

import uche from "../assets/images/hero-image.png";

const HeroSection = () => {
  const { ref: headerRef, inView: headerInview } = useInView();
  const headerAnimation = useAnimation();

  useEffect(() => {
    if (headerInview) {
      headerAnimation.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      headerAnimation.start({
        y: 4,
      });
    }
  }, [headerInview]);

  return (
    <Container className="flex flex-col gap-3 lg:flex-row justify-between items-center lg:grid-cols-2 lg:py-10 min-h-[calc(85vh-60px)] relative">
      <div className="flex justify-center w-fit relative lg:justify-end lg:order-last">
        <img src={uche} alt="Ugwoke uchenna" />
        <p className="backdrop-blur-xl min-w-[200px]  bg-white/30 py-2 px-3 rounded-md absolute left-0 bottom-[25%] translate-x-[-5%] text-center">
          אלוהי העיצוב
        </p>

        <span className="h-[40px] lg:h-[60px] w-[40px] lg:w-[60px] rounded-full absolute right-0 top-[50%] translate-y-[50%] translate-x-[50%] bg-white/30 backdrop-blur-xl flex justify-center items-center text-2xl lg:text-3xl">
          <ion-icon name="search"></ion-icon>
        </span>
      </div>
      <div className="lg:w-[50%]">
        <motion.h1
          animate={{ animation: headerAnimation }}
          ref={headerRef}
          className="text-2xl lg:text-6xl font-bold"
        >
          Hi, Welcome to my Designverse
        </motion.h1>
        <p className="my-2 lg:my-4">
          👋 I am Uchenna M. Ugwoke, a multipurpose designer, digital product
          designer and brand Identity engineer with passion for creating an
          interactive, useful, and delightful user experience.
        </p>
        <div className="flex items-center gap-2 lg:gap-4">
          <Link
            to="/home"
            className="py-2 text-center lg:py-4 px-4 w-[150px] lg:w-[200px] gradientBg hover:opacity-80 text-black rounded-md"
          >
            Learn More
          </Link>
          <Link
            to="/home"
            className="py-2 text-center lg:py-3 px-4 w-[150px] lg:w-[200px] text-[#08D76F] rounded-md ring-2 ring-[#08D76F] gradientHover"
          >
            Contact
          </Link>
        </div>
      </div>
      <span className="hidden absolute left-[50%] translate-x-[50%] bottom-14 text-3xl h-[50px] w-[50px] ring-2 ring-[#08D76F] rounded-full text-[#08D76F] lg:flex items-center justify-center animate-bounce">
        <ion-icon name="arrow-down"></ion-icon>
      </span>
    </Container>
  );
};

export default HeroSection;
