import React from "react";

const Shimmer = ({ placeholderCount }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 2xl:grid-cols-5">
      {[...Array(placeholderCount)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col py-4 px-6 m-2 rounded shadow-md w-full sm:w-60 md:w-60 lg:w-72 animate-pulse h-96"
        >
          <div className="h-48 rounded-t dark:bg-gray-300"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
            <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
