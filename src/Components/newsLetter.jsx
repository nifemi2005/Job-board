import React from "react";

const NewsLetter = () => {
  return (
    <div className="mx-5 md:mx-9">
      <div>
        <p>NEWSLETTER</p>
        <div>
          <p>
            Never miss a Job Opportunity. Get the latest job listings delivered
            straight to your inbox. No spam, ever
          </p>
          <form>
            <input type="text" name="" id="" className="bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none text-sm shadow-sm"/>
            <button className="bg-blue-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition text-sm cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
