import React from "react";
import JobsHeader from "../Components/JobsHeader";
import data from "../Data/Jobs.json";
import JobCard from "../Components/JobCard";

const JobContainer = () => {
  return (
    <div className="max-w-[1460px] mx-auto">
      <JobsHeader count={data.length} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-5 md:mx-9 mb-5 md:mb-10">
          {data.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
    </div>
  );
};

export default JobContainer;
