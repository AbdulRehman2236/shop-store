import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const totalAmount = useSelector((store) => store.cart.totalAmount);
  return (
    <div className="flex flex-col justify-center mx-10 p-6 space-y-4 h-full min-h-[100vh] sm:p-10 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
      {cartItems.length === 0 ? (
        <EmptyCart />
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
            <p className="text-sm dark:text-gray-200 ">Not including taxes and shipping costs</p>
          </div>
          <div className="flex justify-end space-x-4 mr-3">
            <Link
              to="/products"
              type="button"
              className="px-6 py-2 text-black font-semibold rounded-md border border-black hover:font-bold hover:bg-black hover:text-white dark:text-white dark:bg-gray-600 dark:hover:bg-white dark:hover:text-gray-900"
            >
              Back
              <span className="sr-only sm:not-sr-only"> to shop</span>
            </Link>
            <Link
              to="/place-order"
              className="px-6 py-2 font-semibold border rounded-md bg-black text-white hover:bg-gray-50 hover:border border-black hover:text-black hover:font-bold dark:bg-white dark:text-gray-900 dark:border-black dark:hover:bg-gray-500 dark:hover:text-white"
            >
              <span className="sr-only sm:not-sr-only">Proceed to </span>Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
