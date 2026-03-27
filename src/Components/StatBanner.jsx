import { useEffect, useState } from "react";
import { FaBriefcase, FaBuilding, FaLayerGroup } from "react-icons/fa";

const StatBanner = () => {
  const [totalJobs, setTotalJobs] = useState(null);

  useEffect(() => {
    fetch("https://remotive.com/api/remote-jobs?limit=1")
      .then((res) => res.json())
      .then((data) => setTotalJobs(data["total-job-count"]))
      .catch(() => setTotalJobs(null));
  }, []);

  const stats = [
    {
      icon: <FaBriefcase className="text-blue-600 text-2xl" />,
      value: totalJobs ? `${totalJobs.toLocaleString()}+` : "...",
      label: "Jobs Available",
    },
    {
      icon: <FaBuilding className="text-blue-600 text-2xl" />,
      value: "500+",
      label: "Companies Hiring",
    },
    {
      icon: <FaLayerGroup className="text-blue-600 text-2xl" />,
      value: "20+",
      label: "Job Categories",
    },
  ];

  return (
    <div className="bg-white border-y border-gray-100 py-8 px-5 md:px-9">
      <div className="max-w-[1460px] mx-auto grid grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-2">
            {stat.icon}
            <p className="text-2xl md:text-3xl font-bold text-gray-900">
              {stat.value}
            </p>
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatBanner;
