import React from "react";
import logo from "/src/assets/LOGO.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="relative top-0 z-50 bg-gray-200">
      <div className="flex justify-between items-center px-4 md:px-9 py-5 sm:py-5 font-semibold text-[#052d7e] border-b-blue-100 shadow-xl">
        <div className="w-32 md:w-42 cursor-pointer">
          <img src={logo} alt="logo" />
        </div>

        {/* deskop */}
        <div className="hidden md:flex gap-7">
          <Link to="/">Home</Link>
          <Link to="/jobs" className="">
            Jobs
          </Link>
          <Link to="/saved" className="">
            Saved Jobs
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-7">
          <Link to="/blog">Blog</Link>
          <Link to="/register" className="border-2 p-3">
            Register Now
          </Link>
        </div>
        {/* mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-[#052d7e]">
            {open ? <IoClose className="text-3xl" /> : <IoMenu className="text-3xl"/> }
          </button>
        </div>
      </div>
      {/* nav dropdown */}
      <div>
        {open && (
          <div className="md:hidden bg-gray-200 border-t border-gray-100 p-4 space-y-4 shadow-lg absolute w-full">
            <div className=" flex flex-col items-center gap-7">
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/jobs" className="">
                Jobs
              </Link>
              <Link to="/" className="">
                Saved Jobs
              </Link>
              <Link to="/blog">Blog</Link>
              <Link to="/register" className="border-2 p-3">
                Register Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;