import React from "react";
import ToastError from "../shared/ToastError";
import toast, { Toaster } from "react-hot-toast";
import { RAZORPAY_IMG, STRIPE_IMG } from "../../utils/constants";

const PaymentMethods = () => {
  const toastError = (m) => toast.custom((t) => <ToastError message={m} t={t} />);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4 mt-10 text-gray-700 dark:text-gray-50 ">
        PAYMENT <span className="font-bold text-gray-800 dark:text-gray-200">METHOD</span>
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 ">
        <div className="border border-gray-400 px-3 py-2 rounded-md w-full md:w-40 flex md:justify-center items-center space-x-3 hover:shadow-lg dark:bg-gray-100 dark:border-gray-900">
          <button
            type="button"
            onClick={() => toastError("Stripe is disabled in demo, use COD")}
            className="flex justify-center items-center"
          >
            <input
              type="radio"
              name="payment"
              id="stripe"
              disabled
              className="form-radio appearance-none rounded-full h-3 w-3 mr-3 border border-gray-400 bg-white checked:bg-green-600 checked:border-transparent focus:outline-none dark:border-black"
            />
            <label htmlFor="stripe" className="flex items-center space-x-2 cursor-pointer">
              <img src={STRIPE_IMG} alt="Stripe" className="h-6 w-auto" />
            </label>
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </div>

        <div className="border border-gray-400 px-3 py-2 rounded-md w-full md:w-40 flex  md:justify-center items-center space-x-3 hover:shadow-lg dark:bg-gray-100 dark:border-gray-900">
          <button
            type="button"
            onClick={() => toastError("Razorpay is disabled in demo, use COD")}
            className="flex justify-center items-center"
          >
            <input
              type="radio"
              name="payment"
              id="razorpay"
              disabled
              className="form-radio appearance-none rounded-full h-3 w-3 mr-3 border border-gray-400 bg-white checked:bg-green-600 checked:border-transparent focus:outline-none dark:border-black"
            />

            <label htmlFor="razorpay" className="flex items-center justify-center space-x-2 cursor-pointer">
              <img src={RAZORPAY_IMG} alt="Razorpay" className="h-5 w-auto" />
            </label>
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </div>

        <div className="border border-gray-400 px-3 py-2 rounded-md w-full md:w-52 flex  md:justify-center items-center space-x-3 hover:shadow-lg dark:bg-gray-100 dark:border-gray-900">
          <input
            type="radio"
            name="payment"
            id="cod"
            defaultChecked
            className="form-radio appearance-none rounded-full h-3 w-3 border border-gray-400 bg-white checked:bg-green-600 checked:border-transparent focus:outline-none dark:border-black"
          />
          <label
            htmlFor="cod"
            className="flex items-center font-bold text-gray-600 uppercase space-x-2 cursor-pointer dark:text-gray-900"
          >
            <span>Cash on Delivery</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
