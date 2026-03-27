import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault("");
    if (email) setSubmitted(true);
  };
  return (
    <div className="bg-[#052d7e] py-14 px-5 md:px-9 mt-10">
      <div className="max-w-[700px] mx-auto text-center">
        <p className="font-bold text-white text-3xl md:text-4xl mb-3">
          NEWSLETTER
        </p>
        <div>
          <p className="text-blue-200 text-sm md:text-base mb-8">
            Never miss a Job Opportunity. Get the latest job listings delivered
            straight to your inbox. No spam, ever
          </p>
          {submitted ? (
            <div>
              <p className="bg-white border border-green-200 text-green-700 font-semibold px-6 py-4 rounded-2xl shadow-sm">
                You're on the list! We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto"
            >
              <input
                type="text"
                name=""
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none text-sm shadow-sm"
              />
              <button
                type="submit"
                className="bg-white text-[#052d7e] px-6 py-3 rounded-xl font-semibold hover:bg-blue-200 transition text-sm cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
