import React from "react";
import { generateShippingFee } from "../../utils/helpers";

const CartTotal = ({ subTotal }) => {
  const shippingFee = generateShippingFee();

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-5 text-gray-700 dark:text-gray-50">
        CART <span className="font-bold text-gray-800 dark:text-gray-200">TOTALS</span>
      </h2>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between dark:text-white">
          <span>Subtotal</span>
          <span>${subTotal}</span>
        </div>
        <hr />
        <div className="flex justify-between dark:text-white">
          <span>Shipping Fee</span>
          <span>${shippingFee}</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold space-y-1 dark:text-white">
          <span>Total</span>
          <span>${subTotal + shippingFee}</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
