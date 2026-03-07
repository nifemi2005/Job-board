import React, { useEffect, useState } from "react";
import JobsHeader from "../Components/JobsHeader";
// import data from "../Data/Jobs.json";
import JobCard from "../Components/JobCard";

const JobContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("Newest");

  useEffect(() => {
    fetch("https://remotive.com/api/remote-jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load jobs.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-600 mt-4 px-5 font-bold">Loading Jobs....</p>;
  if (error) return <p className="text-gray-600 mt-4 px-5 font-bold">{error}</p>;

  const sortedJobs = [...jobs].sort((a,b) => {
    if (sortOption == "Newest") {
      return new Date(b.publication_date) - new Date(a.publication_date);
    }
    if (sortOption == "Oldest") {
      return new Date(a.publication_date) - new Date(b.publication_date);
    }
    if (sortOption == "Relevant") {
      const aSalary = a.salary ? 1 : 0;
      const bSalary = b.salary ? 1: 0;
      return bSalary - aSalary
    }
  })

  return (
    <div className="max-w-[1460px] mx-auto">
      <JobsHeader count={sortedJobs.length} sortOption={sortOption} setSortOption={setSortOption} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-5 md:mx-9 mb-5 md:mb-10">
        {sortedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobContainer;
