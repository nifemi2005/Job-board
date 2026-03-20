import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import JobContainer from "../Components/JobContainer";
import JobLoadMore from "../Components/JobLoadMore";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  return (
    <div>
      <Navbar />
      <Hero
        onSearch={(q, loc) => {
          setSearchQuery(q);
          setLocationQuery(loc);
        }}
      />
      <div className="flex flex-col items-center md:items-end">
        <JobContainer
          searchQuery={searchQuery}
          location={locationQuery}
          visible={visibleCount}
        />
        <JobLoadMore visibleCount={setVisibleCount} />
      </div>
    </div>
  );
};

export default Home;
