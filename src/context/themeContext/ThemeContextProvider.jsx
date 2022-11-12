import { useMemo, useState } from "react";
import themeContext from "./themeContext";

const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleDarkTheme = () => {
    setIsDarkTheme((theme) => !theme);
  };

  const navColor = useMemo(() => {
    return isDarkTheme ? "bg-black" : "bg-white";
  }, [isDarkTheme]);

  const primaryTextColor = useMemo(() => {
    return isDarkTheme ? "text-white" : "text-black";
  }, [isDarkTheme]);

  const backgroundColor = useMemo(() => {
    return isDarkTheme ? "bg-[#1E1E1E]" : "bg-white";
  }, [isDarkTheme]);

  return (
    <themeContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        navColor,
        primaryTextColor,
        backgroundColor,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
