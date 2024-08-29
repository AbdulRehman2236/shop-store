import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  return (
    <div className="flex flex-col justify-center mx-10 p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <h1 className="text-xl text-center font-bold uppercase">Your cart</h1>
      {cartItems.length === 0 ? (
        <h1 className="text-center text-4xl font-semibold">Your cart is empty</h1>
      ) : (
        <div>
          <ul className="flex flex-col divide-y  dark:divide-gray-300">
            {cartItems.map((cartItem) => (
              <li className="flex flex-col py-6 justify-center sm:flex-row sm:justify-between">
                <CartItem cart={cartItem} />
              </li>
            ))}
          </ul>
          <div className="space-y-1 text-right">
            <p>
              Total amount:
              <span className="font-semibold">357 €</span>
            </p>
            <p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-600">
              Back
              <span className="sr-only sm:not-sr-only">to shop</span>
            </button>
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600"
            >
              <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
