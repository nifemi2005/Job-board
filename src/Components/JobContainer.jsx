import React, { useEffect, useState } from "react";
import JobsHeader from "../Components/JobsHeader";
// import data from "../Data/Jobs.json";
import JobCard from "../Components/JobCard";
import JobLoadMore from "../Components/JobLoadMore";

const JobContainer = ({ searchQuery = "", location = "", showAll = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("Newest");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://remotive.com/api/remote-jobs?search=${searchQuery}&location=${location}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load jobs.");
        setLoading(false);
      });
  }, [searchQuery, location]);

  if (loading)
    return (
      <p className="text-gray-600 mt-4 px-5 font-bold">Loading Jobs....</p>
    );
  if (error)
    return <p className="text-gray-600 mt-4 px-5 font-bold">{error}</p>;

  const sortedJobs = [...jobs].sort((a, b) => {
    if (sortOption == "Newest") {
      return new Date(b.publication_date) - new Date(a.publication_date);
    }
    if (sortOption == "Oldest") {
      return new Date(a.publication_date) - new Date(b.publication_date);
    }
    if (sortOption == "Relevant") {
      const aSalary = a.salary ? 1 : 0;
      const bSalary = b.salary ? 1 : 0;
      return bSalary - aSalary;
    }
  });
  const visibleJobs = showAll ? sortedJobs : sortedJobs.slice(0, visibleCount);

  return (
    <div className="max-w-[1460px] mx-auto">
      <JobsHeader
        count={visibleJobs.length}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="flex flex-col items-center md:items-end">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-5 md:mx-9 mb-5 md:mb-6">
          {visibleJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <JobLoadMore setCount={setVisibleCount}/>
      </div>
    </div>
  );
};

export default JobContainer;
