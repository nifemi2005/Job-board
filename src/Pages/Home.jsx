import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import JobContainer from "../Components/JobContainer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <JobContainer/>
    </div>
  );
};

export default Home;
