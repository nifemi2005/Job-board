import { useState } from "react";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center px-5 text-center">

      {/* Badge */}
      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
        Something big is coming
      </span>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
        We're Building <br />
        <span className="text-blue-600">Something Great</span>
      </h1>

      <p className="text-gray-500 text-lg max-w-md mb-10">
        This page is under construction. Leave your email and we'll notify you the moment it goes live.
      </p>

      {/* Email form */}
      {submitted ? (
        <div className="bg-white border border-green-200 text-green-700 font-semibold px-6 py-4 rounded-2xl shadow-sm">
          You're on the list! We'll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none text-sm shadow-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-sm"
          >
            Notify Me
          </button>
        </form>
      )}

      {/* Footer note */}
      <p className="text-gray-400 text-xs mt-8">No spam, ever. Unsubscribe at any time.</p>
    </div>
  );
};

export default ComingSoon;
