import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import ThemeContextProvider from "./context/themeContext/ThemeContextProvider";
import "./global.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>
);
