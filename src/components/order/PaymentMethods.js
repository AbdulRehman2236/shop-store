import React from "react";
import { CashOnDelivery, disabledPaymentMethod, OnlinePayment } from "./PaymentMethodButtons";
import { RAZORPAY_IMG, STRIPE_IMG } from "../../utils/constants";

const PaymentMethods = () => {
  const RazorPayHOC = disabledPaymentMethod(OnlinePayment, "Razorpay is disabled in demo, use COD");
  const StripHOC = disabledPaymentMethod(OnlinePayment, "Stripe is disabled in demo, use COD");

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4 mt-10 text-gray-700 dark:text-gray-50 ">
        PAYMENT <span className="font-bold text-gray-800 dark:text-gray-200">METHOD</span>
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 ">
        <StripHOC img={STRIPE_IMG} alt="Strip" />
        <RazorPayHOC img={RAZORPAY_IMG} alt="Razorpay" />
        <CashOnDelivery />
      </div>
    </div>
  );
};

export default PaymentMethods;
