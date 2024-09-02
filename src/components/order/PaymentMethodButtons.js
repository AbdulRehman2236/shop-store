import React from "react";
import ToastError from "../shared/ToastError";
import toast, { Toaster } from "react-hot-toast";

const toastError = (m) => toast.custom((t) => <ToastError message={m} t={t} />);

export const CashOnDelivery = () => {
  return (
    <div className="border border-gray-400 px-3 py-2 rounded-md w-full md:w-52 flex  md:justify-center items-center space-x-3 hover:shadow-lg dark:bg-gray-100 dark:border-gray-900">
      <input
        type="radio"
        name="payment"
        defaultChecked
        className="form-radio appearance-none rounded-full h-3 w-3 border border-gray-400 bg-white checked:bg-green-600 checked:border-transparent focus:outline-none dark:border-black"
      />
      <label className="flex items-center font-bold text-gray-600 uppercase space-x-2 cursor-pointer dark:text-gray-900">
        <span>Cash on Delivery</span>
      </label>
    </div>
  );
};

export const OnlinePayment = ({ img, altText }) => {
  return (
    <>
      <input
        type="radio"
        name="payment"
        disabled
        className="form-radio appearance-none rounded-full h-3 w-3 mr-3 border border-gray-400 bg-white checked:bg-green-600 checked:border-transparent focus:outline-none dark:border-black"
      />

      <label className="flex items-center justify-center space-x-2 cursor-pointer">
        <img src={img} alt={altText} className="h-5 w-auto" />
      </label>
    </>
  );
};

export const disabledPaymentMethod = (PaymentButton, toastMessage) => {
  return (props) => (
    <div className="border border-gray-400 px-3 py-2 rounded-md w-full md:w-40 flex md:justify-center items-center space-x-3 hover:shadow-lg dark:bg-gray-100 dark:border-gray-900">
      <button type="button" onClick={() => toastError(toastMessage)} className="flex justify-center items-center">
        <PaymentButton {...props} />
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
