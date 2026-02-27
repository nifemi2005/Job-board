import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from 'react-router-dom'
import Jobs from "./Pages/Jobs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jobs" element={<Jobs/>} />
      </Routes>
    </>
  );
}

export default App;
