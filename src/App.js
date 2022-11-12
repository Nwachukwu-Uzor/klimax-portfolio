import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Layout/Main";
import { About, Loading, Projects } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/projects" element={<Main />}>
        <Route index={true} element={<Projects />} />
      </Route>
      <Route path="/about" element={<Main />}>
        <Route index={true} element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
