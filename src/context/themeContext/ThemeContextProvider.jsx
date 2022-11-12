import { useMemo, useState } from "react";
import themeContext from "./themeContext";

const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleDarkTheme = () => {
    setIsDarkTheme((theme) => !theme);
  };

  const navColor = useMemo(() => {
    return isDarkTheme ? "bg-black" : "bg-white";
  }, [isDarkTheme]);

  const primaryTextColor = useMemo(() => {
    return isDarkTheme ? "text-white" : "text-black";
  }, [isDarkTheme]);

  return (
    <themeContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, navColor, primaryTextColor }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
