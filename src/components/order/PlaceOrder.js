import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { generateShippingFee } from "../../utils/helpers";
import toast, { Toaster } from "react-hot-toast";
import { emptyCart, setOrderPlaced } from "../../utils/slices/cartSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderSchema } from "../../utils/schemas/orderSchema";
import ToastError from "../shared/ToastError";
import OrderForm from "./OrderForm";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const subTotal = useSelector((store) => store.cart.totalAmount);
  const shippingFee = generateShippingFee();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(orderSchema) });

  const onSubmit = async (data) => {
    /** simulating api call to server */
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(setOrderPlaced());
    navigate("/order-complete");
    reset();
    dispatch(emptyCart());
  };

  const toastError = (m) => toast.custom((t) => <ToastError message={m} t={t} />);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto px-8 sm:px-4 py-8 dark:bg-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:mt-4 lg:px-4 lg:mr-10">
          <h2 className="text-2xl font-normal mb-4 md:mb-12 text-gray-700 dark:text-gray-50">
            DELIVERY <span className="font-bold text-gray-800 dark:text-gray-200">INFORMATION</span>
          </h2>
          <OrderForm register={register} errors={errors} />
        </div>

        {/* Cart Totals & Payment Method */}
        <div className="lg:mt-20">
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

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 mt-10 text-gray-700 dark:text-gray-50 ">
              PAYMENT <span className="font-bold text-gray-800 dark:text-gray-200">METHOD</span>
            </h2>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 ">
              {/* Stripe Payment Option */}
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
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZVxQZ2UYa4aZMO1u_hgQPt-OVvqLq5MnoA&s"
                      alt="Stripe"
                      className="h-6 w-auto"
                    />
                  </label>
                </button>
                <Toaster position="top-right" reverseOrder={false} />
              </div>

              {/* Razorpay Payment Option */}
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
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                      alt="Razorpay"
                      className="h-5 w-auto"
                    />
                  </label>
                </button>
                <Toaster position="top-right" reverseOrder={false} />
              </div>

              {/* Cash on Delivery Payment Option */}
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

          <div className="flex justify-end">
            <button
              disabled={isSubmitting || subTotal === 0}
              type="submit"
              className="w-3/12 bg-black text-sm disabled:bg-gray-400 disabled:text-black disabled:font-bold text-white py-2 rounded-md  hover:border hover:border-black hover:font-bold dark:text-white dark:bg-gray-600  flex items-center justify-center"
            >
              {isSubmitting && (
                <div className="w-4 h-4 border-4 border-dotted rounded-full animate-spin mr-2 border-gray-700 dark:border-gray-200"></div>
              )}
              PLACE ORDER
            </button>
          </div>
          {subTotal === 0 && (
            <div className="flex justify-end mt-2">
              <p className="text-xs font-bold text-red-500">Your cart is empty. Please select product first</p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
