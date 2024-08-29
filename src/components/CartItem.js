import React from "react";

const CartItem = (cart) => {
  console.log("cart", cart);
  const { title, price, image } = cart.cart.items;
  return (
    <div className="flex flex-col md:flex-row md:pt-10 md:pb-10 items-center justify-center w-full max-w-3xl mx-auto p-4 border rounded-md shadow-md bg-white">
      <div className="md:ml-10">
        <img src={image} alt="" className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg" />
      </div>

      <div className="md:ml-40 mt-4 md:mt-0  flex-1">
        <h2 className="text-xl font-bold text-gray-800 leading-tight">{title}</h2>
        <p className="text-lg font-bold text-gray-600 mt-2">
          {2} x ${price} = ${2 * price}
        </p>
        <div className="mt-4 flex items-center space-x-4">
          <button className="px-3 text-xl font-bold border rounded hover:bg-black hover:text-white dark:border-gray-800 dark:text-gray-800">
            -
          </button>
          <button className="px-3 text-xl  font-bold border rounded hover:bg-black hover:text-white dark:border-gray-800 dark:text-gray-800">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
