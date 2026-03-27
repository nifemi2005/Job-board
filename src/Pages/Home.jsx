import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import JobContainer from "../Components/JobContainer";
import JobLoadMore from "../Components/JobLoadMore";
import Footer from "../Components/Footer";
import NewsLetter from "../Components/newsLetter";
import StatBanner from "../Components/StatBanner";

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
      <StatBanner/>
      <JobContainer
        searchQuery={searchQuery}
        location={locationQuery}
        visible={visibleCount}
      />
      <div className="flex justify-center md:justify-end">
        <JobLoadMore visibleCount={setVisibleCount} />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
