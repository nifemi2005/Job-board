import React from "react";
const JobCard = ({ job }) => {
  return (
    <div className="h-full">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 max-w-[450px] px-4 md:px-5 py-5 sm:py-5 mx-auto h-full flex flex-col">
        <div className="flex justify-between items-start">
          <div className="flex gap-4">
            <div className="w-12 h-12">
              <img
                src={job.company_logo}
                alt={job.company_name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm sm:text-lg md:text-sm lg:text-lg font-semibold text-gray-900">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500">
                {job.company_name} • {job.candidate_required_location}
              </p>
            </div>
          </div>
          <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">
            {job.job_type}
          </span>
        </div>

        <div
          className="text-sm text-gray-600 mt-4 line-clamp-4"
          dangerouslySetInnerHTML={{ __html: job.description }}
        />

        <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
            {job.category}
          </span>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="font-semibold text-gray-900">{job.salary ?? "Salary not disclosed"}</p>
            <p className="text-xs text-gray-500">{job.publication_date}</p>
          </div>
          <button className="text-sm bg-blue-200 p-3 rounded-xl cursor-pointer hover:bg-blue-400 transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
