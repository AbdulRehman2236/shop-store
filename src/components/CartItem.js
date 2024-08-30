import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, calculateTotalAmount, removeItemFromCart } from "../utils/slices/cartSlice";

const CartItem = (cart) => {
  const { items, quantity } = cart.cart;
  const { title, price, image } = items;
  const totalPrice = quantity * price;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(cart.cart));
    dispatch(calculateTotalAmount(price));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(cart.cart));
    dispatch(calculateTotalAmount(-price));
  };

  return (
    <div className="flex flex-col md:flex-row md:pt-10 md:pb-10 items-center justify-center w-full max-w-3xl mx-auto p-4 border rounded-md shadow-md bg-white">
      <div className="md:ml-10">
        <img src={image} alt={title} className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-lg" />
      </div>

      <div className="md:ml-40 mt-4 md:mt-0  flex-1">
        <h2 className="text-xl font-bold text-gray-800 leading-tight">{title}</h2>
        <p className="flex justify-center text-lg font-bold text-gray-600 mt-2 md:flex md:justify-start">
          {quantity} x ${price} = ${totalPrice}
        </p>
        <div className="mt-4 flex justify-center items-center space-x-4 md:justify-start">
          <button
            onClick={handleRemoveFromCart}
            className="px-3 text-xl font-bold border rounded hover:bg-black hover:text-white dark:border-gray-800 dark:text-gray-800"
          >
            -
          </button>
          <button
            onClick={() => handleAddToCart()}
            className="px-3 text-xl  font-bold border rounded hover:bg-black hover:text-white dark:border-gray-800 dark:text-gray-800"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
