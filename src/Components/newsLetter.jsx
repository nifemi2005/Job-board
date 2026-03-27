import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#052d7e] py-14 px-5 md:px-9 mt-10">
      <div className="max-w-[700px] mx-auto text-center">
        <p className="font-bold text-white text-3xl md:text-4xl mb-3">NEWSLETTER</p>
        <div>
          <p className="text-blue-200 text-sm md:text-base mb-8">
            Never miss a Job Opportunity. Get the latest job listings delivered
            straight to your inbox. No spam, ever
          </p>
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
            <input
              type="text"
              name=""
              placeholder="Enter your email"
              required
              className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none text-sm shadow-sm"
            />
            <button className="bg-white text-[#052d7e] px-6 py-3 rounded-xl font-semibold hover:bg-blue-200 transition text-sm cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
