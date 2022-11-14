import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Layout/Main";
import { About, Contact, Loading, Projects, Resume } from "./pages";

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
      <Route path="/resume" element={<Main />}>
        <Route index={true} element={<Resume />} />
      </Route>
      <Route path="/contact" element={<Main />}>
        <Route index={true} element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
