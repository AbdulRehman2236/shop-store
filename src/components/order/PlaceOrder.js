import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import OrderForm from "./OrderForm";
import CartTotal from "./CartTotal";
import PaymentMethods from "./PaymentMethods";
import { orderSchema } from "../../utils/schemas/orderSchema";
import { emptyCart, setOrderPlaced } from "../../utils/slices/cartSlice";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const subTotal = useSelector((store) => store.cart.totalAmount);
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto px-8 sm:px-4 py-8 dark:bg-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:mt-4 lg:px-4 lg:mr-10">
          <h2 className="text-2xl font-normal mb-4 md:mb-12 text-gray-700 dark:text-gray-50">
            DELIVERY <span className="font-bold text-gray-800 dark:text-gray-200">INFORMATION</span>
          </h2>
          <OrderForm register={register} errors={errors} />
        </div>

        <div className="lg:mt-20">
          <CartTotal subTotal={subTotal} />
          <PaymentMethods />

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
