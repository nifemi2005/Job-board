import React from "react";
import { FaMapMarkerAlt, FaChevronDown, FaSearch } from "react-icons/fa";
import Hero_img from "/src/assets/hero-image.png";
import instagram from "/src/assets/Instagram.png";
import Google from "/src/assets/Google.png";
import Microsoft from "/src/assets/Microsoft.png";
import Behance from "/src/assets/behance.png";

const Hero = () => {
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-200 px-9 flex flex-col md:flex-row justify-between items-center max-w-[1460px] mx-auto">
        <div className="max-w-[500px]">
          <div className="hidden bg-blue-100 py-3 rounded-3xl w-[90%] sm:w-[490px]">
            <span className="bg-[#073aa0] text-white py-2 px-3 rounded-3xl ml-2 mr-3">
              NEW
            </span>
            <span className="font-semibold">
              Stay connected to get upcoming jobs with #worklynk
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold pb-4 pt-9 lg:pt-0">
            Connecting <span className="text-blue-600">Talent</span> <br />
            with Opportunity
          </h1>
          <p className="text-xl font-semibold pb-8 text-gray-600">
            Your dream job is waiting for you
          </p>
          <div className="rounded-2xl flex flex-col lg:flex-row lg:items-center gap-4 lg:bg-white lg:py-1.5 lg:px-1.5">
            <input
              type="text"
              name=""
              id=""
              className="bg-gray-100 py-4 rounded-2xl pl-3 outline-0"
              placeholder="Job title or keywords"
            />
            <div className="relative">
              <FaMapMarkerAlt className="absolute top-5 left-3 text-gray-300" />
              <FaChevronDown className="absolute right-6 top-5 text-gray-400" />
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-100 py-4 rounded-2xl pl-10 outline-0 w-full"
                placeholder="City or Zip code"
              />
            </div>
            <button className="bg-blue-200 p-4 rounded-4xl font-bold mb-3 lg:mb-0 lg:hidden">
              Search
            </button>
            <button className="bg-blue-200 p-4 rounded-4xl font-bold mb-5 lg:mb-0 hidden lg:block">
              <FaSearch />
            </button>
          </div>
          <div className=" pt-5 lg:pt-12">
            <p className="font-semibold text-gray-500">We are trusted by:</p>
            <div className="bg-white flex items-center gap-4 py-4 pl-3 rounded-2xl w-[235px] mt-2 md:mt-5 md:mb-7 lg:mb-0">
              <img src={Google} alt="" className="w-[40px]" />
              <img src={instagram} alt="" className="w-[40px]" />
              <img src={Behance} alt="" className="w-[40px]" />
              <img src={Microsoft} alt="" className="w-[40px]" />
            </div>
          </div>
        </div>
        <div>
          <img
            src={Hero_img}
            alt="Team working together"
            className="mb-7 md:mb-12 mt-10 md:w-[400px] lg:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
