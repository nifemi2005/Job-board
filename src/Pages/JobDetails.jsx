import React from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaClock,
} from "react-icons/fa";
import { useSavedJobs } from "../Context/SavedJobsContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const JobDetails = () => {
  const { state } = useLocation();
  const job = state?.job;
  const { savedJobs, toggleSave } = useSavedJobs();

  if (!job)
    return <p className="text-center mt-10 text-gray-500">Job not found.</p>;

  const isSaved = savedJobs.some((j) => j.id === job.id);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "1 day ago";
    return `${diffDays} days ago`;
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-225 mx-auto px-5 md:px-9 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <img
              src={job.company_logo}
              alt={job.company_name}
              className="w-16 h-16 object-contain rounded-xl border border-gray-100"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
              <p className="text-gray-500 font-medium">{job.company_name}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleSave(job)}
              className="border border-gray-200 p-3 rounded-xl hover:bg-gray-50 transition"
            >
              {isSaved ? (
                <FaHeart className="text-red-500 text-xl" />
              ) : (
                <FaRegHeart className="text-gray-400 text-xl" />
              )}
            </button>
            <a
              href={job.url}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Meta chips */}
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
            <FaMapMarkerAlt className="text-blue-500" />{" "}
            {job.candidate_required_location || "Worldwide"}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
            <FaBriefcase className="text-blue-500" /> {job.job_type}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
            <FaMoneyBillWave className="text-blue-500" />{" "}
            {job.salary || "Salary not disclosed"}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
            <FaClock className="text-blue-500" />{" "}
            {formatDate(job.publication_date)}
          </span>
          <span className="text-sm text-blue-700 bg-blue-100 px-3 py-2 rounded-lg">
            {job.category}
          </span>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-6" />

        {/* Description */}
        <div
          className="prose prose-sm max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: job.description }}
        />
      </div>
    </div>
  );
};

export default JobDetails;
