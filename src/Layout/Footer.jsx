import React, { useContext } from "react";
import Container from "./Container";

import behance from "../assets/images/behance.svg";
import themeContext from "../context/themeContext/themeContext";

const Footer = () => {
  const { isDarkTheme } = useContext(themeContext);
  return (
    <footer className="mt-6 lg:mt-12">
      <Container
        className={`border-t-2 ${
          isDarkTheme ? "border-t-white" : "border-black"
        } flex flex-col lg:flex-row justify-between items-center`}
      >
        <p>Uchenna Ugwoke// c 2022</p>
        <div className="flex gap-2">
          <a
            href="https://twitter.com"
            className="hover:text-[#08D76F] text-xl duration-150"
          >
            <ion-icon icon name="logo-behance"></ion-icon>
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-[#08D76F] text-xl duration-150"
          >
            <ion-icon icon name="logo-dribbble"></ion-icon>
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-[#08D76F] text-xl duration-150"
          >
            <ion-icon icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-[#08D76F] text-xl duration-150"
          >
            <ion-icon icon name="logo-twitter"></ion-icon>
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-[#08D76F] text-xl duration-150"
          >
            <ion-icon icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
