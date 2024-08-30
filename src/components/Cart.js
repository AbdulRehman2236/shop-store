import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const totalAmount = useSelector((store) => store.cart.totalAmount);
  return (
    <div className="flex flex-col justify-center mx-10 p-6 space-y-4 h-full min-h-[100vh] sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      {cartItems.length === 0 ? (
        <h1 className="text-center text-4xl font-semibold">Your cart is empty</h1>
      ) : (
        <div>
          <h1 className="text-xl text-center font-bold uppercase">Your cart</h1>
          <ul className="flex flex-col divide-y  dark:divide-gray-300">
            {cartItems.map((cartItem) => (
              <li key={cartItem.items.id} className="flex flex-col py-6 justify-center sm:flex-row sm:justify-between">
                <CartItem cart={cartItem} />
              </li>
            ))}
          </ul>
          <div className="space-y-1 text-right mb-4 mr-3 mt-4">
            <p className="font-semibold ">
              Total amount:
              <span className="font-semibold"> $ {Math.round(totalAmount)}</span>
            </p>
            <p className="text-sm dark:text-gray-600 ">Not including taxes and shipping costs</p>
          </div>
          <div className="flex justify-end space-x-4 mr-3">
            <Link
              to="/products"
              type="button"
              className="px-6 py-2 text-black font-semibold rounded-md border border-black hover:bg-black hover:text-white"
            >
              Back
              <span className="sr-only sm:not-sr-only"> to shop</span>
            </Link>
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:bg-black dark:text-gray-50 dark:border-black hover:bg-gray-200 hover:text-black hover:font-bold"
            >
              <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
