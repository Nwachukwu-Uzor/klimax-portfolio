import React, { useContext, useState } from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";

import Container from "./Container";
import themeContext from "../context/themeContext/themeContext";

import DarkLogo from "../assets/images/dark-logo.png";
import lightLogo from "../assets/images/light-logo.png";
import { ThemeToggler } from "../components";
import { NavLink } from "react-router-dom";

const StyledLinked = ({ text, to, color }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? "text-[#08D76F]" : ""} ${color}`
      }
    >
      {text}
    </NavLink>
  );
};

const Navigation = () => {
  const { navColor, primaryTextColor, isDarkTheme } = useContext(themeContext);
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    console.log("clicked");
    setNavOpen((open) => !open);
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
            } lg:flex lg:opacity-100 lg:w-fit lg:static ${
              isDarkTheme
                ? "bg-black text-white lg:bg-transparent lg:text-inherit"
                : "bg-white text-black lg:text-inherit"
            } h-[70vh] lg:h-fit  lg:bg-transparent lg:text-inherit transition-all duration-500`}
          >
            <StyledLinked to="/home" color={primaryTextColor} text="Projects" />
            <StyledLinked to="/" color={primaryTextColor} text="Projects" />
            <StyledLinked to="/" color={primaryTextColor} text="Projects" />
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
