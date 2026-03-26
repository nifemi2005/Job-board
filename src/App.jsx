import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Jobs from "./Pages/Jobs";
import SavedJobs from "./Pages/SavedJobs";
import JobDetails from "./Pages/JobDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/saved" element={<SavedJobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </>
  );
}

export default App;
