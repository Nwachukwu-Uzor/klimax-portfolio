import { createContext } from "react";

const themeContext = createContext({
  isDarkTheme: false,
  toggleDarkTheme: () => {},
  backgroundColor: "",
  primaryTextColor: "",
  navColor: "bg-black",
});

export default themeContext;
