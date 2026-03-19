import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from 'react-router-dom'
import Jobs from "./Pages/Jobs";
import SavedJobs from "./Pages/SavedJobs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/saved" element={<SavedJobs/>} />
      </Routes>
    </>
  );
}

export default App;
