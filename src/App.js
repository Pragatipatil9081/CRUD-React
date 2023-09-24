import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./Comp/Add";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Add />}></Route>
      </Routes>
    </div>
  );
};

export default App;
