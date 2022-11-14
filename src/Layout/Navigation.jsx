import React, { useContext, useState } from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";

import Container from "./Container";
import themeContext from "../context/themeContext/themeContext";

import DarkLogo from "../assets/images/dark-logo.png";
import lightLogo from "../assets/images/light-logo.png";
import { ThemeToggler } from "../components";
import { NavLink } from "react-router-dom";

const StyledLinked = ({ text, to, handleClose }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${isActive ? "text-[#08D76F]" : ""} `}
      onClick={handleClose}
    >
      {text}
    </NavLink>
  );
};

const Navigation = () => {
  const { navColor, primaryTextColor, isDarkTheme, subMenuColor } =
    useContext(themeContext);
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen((open) => !open);
  };

  const handleCloseNav = () => {
    setNavOpen(false);
  };
  return (
    <header
      className={`${navColor} ${primaryTextColor} h-[60px] flex items-center justify-center shadow-md`}
    >
      <Container>
        <nav className="flex justify-between items-center relative">
          <div>
            <img
              src={isDarkTheme ? DarkLogo : lightLogo}
              alt="Klimax"
              className="h-6 lg:h-10"
            />
          </div>
          <ThemeToggler />
          <span
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } text-2xl lg:hidden cursor-pointer`}
            onClick={handleNavOpen}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </span>
          <ul
            className={`flex flex-col items-center justify-center lg:flex-row gap-3 lg:justify-between absolute z-10 top-[50px] left-0 w-full ${
              navOpen ? "opacity-100 flex" : "opacity-0"
            } lg:flex lg:opacity-100 lg:w-fit lg:static h-[70vh] lg:h-fit  lg:bg-transparent lg:text-inherit transition-all duration-500 ${subMenuColor}`}
          >
            <StyledLinked
              to="/projects"
              text="Projects"
              handleClose={handleCloseNav}
            />
            <StyledLinked
              to="/about"
              text="About"
              handleClose={handleCloseNav}
            />
            <StyledLinked
              to="/resume"
              text="Resume"
              handleClose={handleCloseNav}
            />
            <StyledLinked
              to="/contact"
              text="Contact"
              handleClose={handleCloseNav}
            />
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
