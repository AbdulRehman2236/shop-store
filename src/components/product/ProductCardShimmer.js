import React from "react";

const ProductCardShimmer = () => {
  return (
    <div className="flex items-center justify-center p-24 bg-white border min-h-[90vh] border-gray-200 rounded-lg shadow-md dark:border-gray-800 dark:bg-gray-800">
      <div className="w-1/2 h-64 bg-gray-300 animate-pulse rounded"></div>
      <div className="ml-4 flex-1">
        <div className="h-40 sm:h-6 bg-gray-300 animate-pulse w-full sm:w-1/3 mb-2 rounded"></div>
        <div className="h-6 bg-gray-300 animate-pulse w-full sm:w-1/4 mb-2 rounded"></div>
        <div className="h-10 bg-gray-300 animate-pulse w-full  sm:w-1/6 mb-2 rounded"></div>
        <div className="h-4 bg-gray-300 animate-pulse w-full sm:w-2/3 mb-2 rounded"></div>
        <div className="h-4 bg-gray-300 animate-pulse w-full sm:w-4/5 mb-2 rounded"></div>
        <div className="flex mt-4 space-x-4">
          <div className="h-10 bg-gray-300 animate-pulse w-24 rounded"></div>
          <div className="h-10 bg-gray-300 animate-pulse w-24 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardShimmer;
