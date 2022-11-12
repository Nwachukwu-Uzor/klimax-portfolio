import React, { useContext } from "react";
import themeContext from "../context/themeContext/themeContext";

import styles from "../styles/themeToggler.module.css";

const ThemeToggler = () => {
  const { toggleDarkTheme, isDarkTheme } = useContext(themeContext);

  return (
    <div
      className={`${styles["outer-container"]} ${
        isDarkTheme ? styles.light : ""
      }`}
    >
      <div className={styles.container} onClick={toggleDarkTheme}>
        <div className={styles.circle}>
          <div className={styles.cloud}></div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggler;
