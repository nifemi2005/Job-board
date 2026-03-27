import React, { useState } from "react";
import logo from "../assets/LOGO.png";
import { GrInstagram, GrLinkedinOption, GrTwitter } from "react-icons/gr";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <div>
      <hr className="text-gray-300 mt-2 hidden md:block" />
      <div className="mx-5 md:mx-9">
        <div className="max-w-[1450px] md:flex items-center justify-between hidden">
          <div>
            <img src={logo} alt="" className="w-[180px] pb-3 pt-5" />
            <p className="font-semibold text-gray-500 w-[250px] pb-5">
              Find your next opportunity. Thousands of jobs across all
              industries, updated daily.
            </p>
            <div className="flex gap-4 mb-8">
              <GrTwitter className="border-1 border-gray-300 p-2 text-4xl rounded-xl" />
              <GrLinkedinOption className="border-1 border-gray-300 p-2 text-4xl rounded-xl" />
              <GrInstagram className="border-1 border-gray-300 p-2 text-4xl rounded-xl" />
            </div>
          </div>
          <div className="flex gap-[60px] lg:gap-[70px]">
            <div>
              <p className="font-bold text-[17px] text-gray-700">
                FOR JOB SEEKERS
              </p>
              <div className="flex flex-col text-gray-500 font-medium">
                <Link to="/jobs" className="hover:text-gray-700">
                  Browse Jobs
                </Link>
                <Link to="/saved" className="hover:text-gray-700">
                  Saved Jobs
                </Link>
                <Link to="/soon" className="hover:text-gray-700">
                  Job alerts
                </Link>
                <Link to="/soon" className="hover:text-gray-700">
                  Career advice
                </Link>
              </div>
            </div>
            <div>
              <p className="font-bold text-[17px] text-gray-700">
                FOR EMPLOYERS
              </p>
              <div className="flex flex-col text-gray-500 font-medium">
                <Link to="/soon" className="hover:text-gray-700">
                  Post a job
                </Link>
                <Link to="/soon" className="hover:text-gray-700">
                  Browse candidates
                </Link>
                <Link to="/soon" className="hover:text-gray-700">
                  Pricing
                </Link>
                <Link to="/soon" className="hover:text-gray-700">
                  Recruiter tools
                </Link>
              </div>
            </div>
            <div>
              <p className="font-bold text-[17px] text-gray-700">COMPANY</p>
              <div className="flex flex-col text-gray-500 font-medium">
                <Link to="/soon" className="hover:text-gray-700">
                  About us
                </Link>
                <Link to="/soon" className="hover:text-gray-700">
                  Contact
                </Link>
                <Link to="/soon" className="hover:text-gray-700">
                  Privacy
                </Link>
                <Link to="/soon" className="hover:text-gray-700">
                  Terms of service
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[450px] mx-auto md:hidden">
          {/* head of footer */}
          <div>
            <img src={logo} alt="" className="w-[180px] pb-3 pt-5" />
            <p className="font-semibold text-gray-500 pb-4">
              Find your next opportunity. Thousands of jobs across all
              industries, updated daily.
            </p>
            <div className="flex gap-4 mb-8">
              <GrTwitter className="border-1 border-gray-300 p-2 text-4xl" />
              <GrLinkedinOption className="border-1 border-gray-300 p-2 text-4xl" />
              <GrInstagram className="border-1 border-gray-300 p-2 text-4xl" />
            </div>
            <hr className="text-gray-300 mb-8" />
          </div>
          {/* footer content */}
          <div>
            {/* for jobs seekers */}
            <div>
              <div
                className="flex items-center justify-between"
                onClick={() => toggle("seekers")}
              >
                <p className="font-bold text-[17px] text-gray-700">
                  FOR JOBS SEEKERS
                </p>
                <MdArrowDropDown
                  className={`text-2xl transition-transform ${openSection === "seekers" ? "rotate-180" : ""}`}
                />
              </div>
              {openSection === "seekers" && (
                <div className="text-gray-600 flex flex-col font-semibold">
                  <Link to="/jobs" className="hover:text-gray-700">
                    Browse Jobs
                  </Link>
                  <Link to="/saved" className="hover:text-gray-700">
                    Saved Jobs
                  </Link>
                  <Link to="/soon" className="hover:text-gray-700">
                    Job alerts
                  </Link>
                  <Link to="/soon" className="hover:text-gray-700">
                    Career advice
                  </Link>
                </div>
              )}
            </div>
            <hr className="text-gray-300 mt-4 mb-5" />

            {/* for employers */}
            <div>
              <div
                className="flex items-center justify-between"
                onClick={() => toggle("employers")}
              >
                <p className="text-gray-700 font-bold text-[17px]">
                  FOR EMPLOYERS
                </p>
                <MdArrowDropDown
                  className={`text-2xl transition-transform ${openSection === "employers" ? "rotate-180" : ""}`}
                />
              </div>
              {openSection === "employers" && (
                <div className="text-gray-600 flex flex-col font-semibold">
                  <Link to="/soon" className="hover:text-gray-700">
                    Post a job
                  </Link>
                  <Link to="/soon" className="hover:text-gray-700">
                    Browse candidates
                  </Link>
                  <Link to="/soon" className="hover:text-gray-700">
                    Pricing
                  </Link>
                  <Link to="/soon" className="hover:text-gray-700">
                    Recruiter tools
                  </Link>
                </div>
              )}
            </div>
            <hr className="text-gray-300 mt-4 mb-5" />

            {/* for company */}
            <div>
              <div
                className="flex items-center justify-between"
                onClick={() => toggle("company")}
              >
                <p className="font-bold text-gray-700 text-[17px]">COMPANY</p>
                <MdArrowDropDown
                  className={`text-2xl transition-transform ${openSection === "company" ? "rotate-180" : ""}`}
                />
              </div>
              {openSection === "company" && (
                <div className="text-gray-600 flex flex-col font-semibold">
                  <Link to="/soon" className="hover:text-gray-700">
                    About us
                  </Link>
                  <Link to="/soon" className="hover:text-gray-700">
                    Contact
                  </Link>
                  <Link to="/soon" className="hover:text-gray-700">
                    Privacy
                  </Link>
                  <Link to="/soon" className="hover:text-gray-700">
                    Terms of service
                  </Link>
                </div>
              )}
            </div>
            <hr className="text-gray-300 mt-4 mb-5" />
          </div>
        </div>
      </div>
      <hr className="text-gray-300 mb-3 hidden md:block" />
      <div className="flex md:flex-row flex-col items-center justify-between mx-9 font-semibold text-gray-500">
        <p>© 2026 JobBoard. All rights reserved.</p>
        <p>Made with React & Tailwind</p>
      </div>
    </div>
  );
};

export default Footer;
