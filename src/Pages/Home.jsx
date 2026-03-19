import React, {useState} from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import JobContainer from "../Components/JobContainer";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [locationQuery, setLocationQuery] = useState("")
  return (
    <div>
      <Navbar />
      <Hero onSearch={(q, loc) => {setSearchQuery(q); setLocationQuery(loc);}}/>
      <JobContainer searchQuery={searchQuery} location={locationQuery}/>
    </div>
  );
};

export default Home;
