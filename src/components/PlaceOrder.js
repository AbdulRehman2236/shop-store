import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { generateShippingFee } from "../utils/helpers";
import InputError from "./InputError";
import toast, { Toaster } from "react-hot-toast";
import { emptyCart, setOrderPlaced } from "../utils/slices/cartSlice";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const orderSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(20, "First name should not be greater than 20 characters"),
    lastName: z
      .string()
      .min(3, "Last name must be at least 3 characters")
      .max(20, "Last name should not be greater than 20 characters"),
    email: z.string().email(),
    street: z.string().min(1, "Street is required").max(50, "Street should not be greater than 50 characters"),
    city: z.string().min(1, "City is required").max(20, "City should not be greater than 20 characters"),
    state: z.string().min(1, "State is required").max(20, "State should not be greater than 20 characters"),
    zipCode: z
      .number()
      .gte(1000, "Last name must be at least 4 characters")
      .lte(9999999, "Zip Code should not be greater than 7 characters"),
    country: z.string().min(1, "Country is required").max(20, "Country should not be greater than 20 characters"),
    phone: z
      .string()
      .min(9, "Phone must be at least 9 characters")
      .max(15, "Phone should not be greater than 15 characters"),
  })
  .refine((data) => data.city !== data.country, {
    message: "City and Country are same",
    path: ["country"],
  });

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

  const toastError = (m) =>
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-96 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex w-80 p-3">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-yellow-300 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-black">{m}</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => toast.dismiss(t.id)}
            className="size-6 w-full flex items-center justify-center text-sm font-medium mt-3 px-4 cursor-pointer"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
    ));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto px-8 sm:px-4 py-8 dark:bg-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Delivery Information Form */}
        <div className="lg:mt-4 lg:px-4 lg:mr-10">
          <h2 className="text-2xl font-normal mb-4 md:mb-12 text-gray-700 dark:text-gray-50">
            DELIVERY <span className="font-bold text-gray-800 dark:text-gray-200">INFORMATION</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="col-span-1">
              {errors && <InputError fieldName={errors.firstName} errorMessage={errors?.firstName?.message} />}
              <input
                type="text"
                placeholder="First name"
                className="border p-2 rounded w-full dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
                {...register("firstName")}
              />
            </div>

            <div className="col-span-1">
              {errors && <InputError fieldName={errors.lastName} errorMessage={errors?.lastName?.message} />}
              <input
                type="text"
                placeholder="Last name"
                className="border p-2 rounded w-full dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
                {...register("lastName")}
              />
            </div>

            <div className="col-span-2">
              {errors && <InputError fieldName={errors.email} errorMessage={errors?.email?.message} />}
              <input
                type="email"
                placeholder="Email address"
                className="border p-2 rounded w-full col-span-2 dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
                {...register("email")}
              />
            </div>

            <div className="col-span-2">
              {errors && <InputError fieldName={errors.street} errorMessage={errors?.street?.message} />}
              <input
                type="text"
                placeholder="Street"
                className="border p-2 rounded w-full col-span-2 dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
                {...register("street")}
              />
            </div>

            <div className="col-span-1">
              {errors && <InputError fieldName={errors.city} errorMessage={errors?.city?.message} />}
              <input
                type="text"
                placeholder="City"
                className="border p-2 rounded w-full dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
                {...register("city")}
              />
            </div>

            <div className="col-span-1">
              {errors && <InputError fieldName={errors.state} errorMessage={errors?.state?.message} />}
              <input
                type="text"
                placeholder="State"
                className="border p-2 rounded w-full dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
                {...register("state")}
              />
            </div>

            <div className="col-span-1">
              {errors && <InputError fieldName={errors.zipCode} errorMessage={errors?.zipCode?.message} />}
              <input
                type="number"
                placeholder="Zip Code"
                className="border p-2 rounded w-full dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
                {...register("zipCode", { valueAsNumber: true })}
              />
            </div>

            <div className="col-span-1">
              {errors && <InputError fieldName={errors.country} errorMessage={errors?.country?.message} />}
              <input
                type="text"
                placeholder="Country"
                className="border p-2 rounded w-full dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
                {...register("country")}
              />
            </div>

            <div className="col-span-2">
              {errors && <InputError fieldName={errors.phone} errorMessage={errors?.phone?.message} />}
              <input
                type="text"
                placeholder="Phone"
                className="border p-2 rounded w-full col-span-2 dark:bg-gray-300 dark:border-gray-700 dark:placeholder-gray-700 font-semibold"
                {...register("phone")}
              />
            </div>
          </div>
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
