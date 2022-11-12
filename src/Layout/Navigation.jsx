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
      className={({ isActive }) => `${isActive ? "text-[#08D76F]" : ""}`}
    >
      {text}
    </NavLink>
  );
};

const Navigation = () => {
  const { navColor, primaryTextColor, isDarkTheme } = useContext(themeContext);
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen((open) => !open);
  };
  return (
    <header
      className={`${navColor} ${primaryTextColor} h-[60px] flex items-center justify-center`}
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
            className={`flex flex-col lg:flex-row gap-3 lg:justify-between absolute top-[50px] left-0 w-full ${
              navOpen ? "opacity-100 flex" : "hidden opacity-0"
            } lg:flex opacity-100 lg:w-fit lg:static ${
              isDarkTheme
                ? "bg-white text-black lg:bg-transparent lg:text-inherit"
                : "bg-black text-white"
            } h-[70vh] lg:h-fit lg:${primaryTextColor} lg:bg-transparent lg:text-inherit`}
          >
            <StyledLinked to="/home" color={primaryTextColor} text="Projects" />
            <StyledLinked to="/" color={primaryTextColor} text="Projects" />
            <StyledLinked to="/" color={primaryTextColor} text="Projects" />
          </ul>
        </nav>
        {/* <Navbar
          fluid={false}
          rounded={true}
          className={`w-full px-0 bg bg-inherit py-0 ${primaryTextColor}`}
        >
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src={isDarkTheme ? DarkLogo : lightLogo}
              className="mr-3 h-6 lg:h-8 sm:h-9"
              alt="Flowbite Logo"
            />
          </Navbar.Brand>
          <ThemeToggler />
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link
              href="/navbars"
              active={true}
              className={`${primaryTextColor}`}
            >
              Home
            </Navbar.Link>
            <Navbar.Link
              href="/navbars"
              className={`${primaryTextColor} border-2 border-red-700`}
            >
              About
            </Navbar.Link>
            <Navbar.Link href="/navbars">Services</Navbar.Link>
            <Navbar.Link href="/navbars">Pricing</Navbar.Link>
            <Navbar.Link href="/navbars">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar> */}
      </Container>
    </header>
  );
};

export default Navigation;
