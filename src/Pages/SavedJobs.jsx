import React from "react";
import { useSavedJobs } from "../Context/SavedJobsContext";
import Navbar from "../Components/Navbar";
import JobCard from "../Components/JobCard";
import Footer from "../Components/Footer";

const SavedJobs = () => {
  const { savedJobs } = useSavedJobs();
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-5 md:mx-9 mb-5 md:mb-6 mt-4 md:mt-8">
        {savedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default SavedJobs;
