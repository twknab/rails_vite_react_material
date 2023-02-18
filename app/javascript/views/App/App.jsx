import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import NoMatch from "../NoMatch";

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
