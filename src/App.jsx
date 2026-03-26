import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Jobs from "./Pages/Jobs";
import SavedJobs from "./Pages/SavedJobs";
import JobDetails from "./Pages/JobDetails";
import ComingSoon from "./Pages/comingSoon";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/saved" element={<SavedJobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/soon" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
