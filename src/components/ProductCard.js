import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const ProductCard = ({ name, price, img }) => {
  return (
    <div className="m-4 max-w-xs p-4 rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900">
      <img
        src={IMG_CDN_URL + img}
        alt=""
        className="object-cover object-center w-72 rounded-md h-60 bg-gray-500 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <h2 className="block text-center font-bold tracking-widest uppercase text-violet-400 dark:text-violet-600">
          {name}
        </h2>
        <h2 className="text-center font-bold tracking-wide">{price}</h2>
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="mt-4 px-6 py-2 font-semibold border rounded dark:border-gray-800 dark:text-gray-800"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
