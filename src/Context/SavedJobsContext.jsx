import React, { createContext, useContext, useState } from "react";

const SavedJobsContext = createContext();
export const SavedJobsProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState(() => {
    const stored = localStorage.getItem("savedJobs");
    return stored ? JSON.parse(stored) : [];
  });
  const toggleSave = (job) => {
    setSavedJobs((prev) => {
      const isAlreadySaved = prev.some((j) => j.id === job.id);
      const updated = isAlreadySaved
        ? prev.filter((j) => j.id !== job.id)
        : [...prev, job];
      localStorage.setItem("savedJobs", JSON.stringify(updated));
      return updated;
    });
  };
  return (
    <SavedJobsContext.Provider value={{ savedJobs, toggleSave }}>
      {children}
    </SavedJobsContext.Provider>
  );
};
export const useSavedJobs = () => useContext(SavedJobsContext);
