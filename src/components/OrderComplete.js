import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { resetOrderPlace } from "../utils/slices/cartSlice";

const OrderComplete = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const orderPlaced = useSelector((store) => store.cart.orderPlaced);

  useEffect(() => {
    return () => {
      dispatch(resetOrderPlace());
    };
  }, []);

  return cartItems && !orderPlaced ? (
    <Navigate to="/" />
  ) : (
    <section className="flex items-center h-full sm:p-16 dark:bg-gray-800 dark:text-gray-50">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-28 text-green-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <p className="text-3xl font-semibold">Thank you for your order!</p>
        <p className="mt-4 mb-8 dark:text-gray-100">
          Your order has been dispatched, and will arrive just as fast as the pony can get there!
        </p>
        <Link
          rel="noopener noreferrer"
          to="/"
          className="px-8 py-3 font-semibold rounded bg-black text-white hover:bg-white hover:text-black hover:border border-black dark:bg-gray-100 dark:text-black dark:hover:bg-gray-500 dark:hover:text-gray-50"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default OrderComplete;
