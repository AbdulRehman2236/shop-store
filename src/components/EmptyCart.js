import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="flex items-center h-full sm:p-16 dark:bg-gray-800 dark:text-gray-50">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 ">
          <path
            fill="currentColor"
            d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          ></path>
          <rect width="176" height="32" x="168" y="260" fill="currentColor"></rect>
        </svg>
        <p className="text-3xl font-semibold">Your Cart is Empty</p>
        <p className="mt-4 mb-8 dark:text-gray-100">
          But dont worry, you can find plenty of items on our products page.
        </p>
        <Link
          rel="noopener noreferrer"
          to="/products"
          className="px-8 py-3 font-semibold rounded bg-black text-white hover:bg-white hover:text-black hover:border border-black dark:bg-gray-100 dark:text-black dark:hover:bg-gray-500 dark:hover:text-gray-50"
        >
          Back to products
        </Link>
      </div>
    </section>
  );
};

export default EmptyCart;
