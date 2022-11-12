import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Layout/Main";
import { Loading, Projects } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/home" element={<Main />}>
        <Route index={true} element={<Projects />} />
      </Route>
    </Routes>
  );
};

export default App;
