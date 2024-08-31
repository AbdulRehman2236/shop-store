import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, price, img }) => {
  return (
    <div className="m-4 max-w-xs p-4 rounded-md shadow-lg bg-gray-900 dark:bg-gray-50 border border-gray-100 text-gray-50 dark:text-gray-900 hover:text-sm ">
      <Link to={"/products/" + id}>
        <div className="flex justify-center">
          <img
            src={img}
            alt={name}
            className="object-fit object-center w-fit rounded-md h-60 bg-gray-500 dark:bg-gray-500 transition-transform transform-gpu hover:scale-105 hover:rotate-1 hover:skew-x-1 hover:skew-y-1"
          />
        </div>
        <div className="mt-6 mb-2">
          <h2 className="block text-center font-bold tracking-widest uppercase text-violet-400 dark:text-violet-600">
            {name.slice(0, 15).concat("...")}
          </h2>
          <h2 className="text-center font-bold tracking-wide">{price}</h2>
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="mt-4 px-6 py-2 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:text-white hover:bg-gray-800"
            >
              Buy Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
