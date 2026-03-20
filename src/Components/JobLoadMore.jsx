import React from "react";

const JobLoadMore = ({ visibleCount }) => {
  return (
    <div>
      <button
        onClick={() => visibleCount((prev) => prev + 6)}
        className="cursor-pointer text-gray-500 hover:text-gray-700 font-bold underline max-w-[450px] pr-7 md:pr-9"
      >
        Load More
      </button>
    </div>
  );
};

export default JobLoadMore;
