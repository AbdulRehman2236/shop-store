import React from "react";

const PlaceOrder = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Delivery Information Form */}
        <div>
          <h2 className="text-xl font-normal mb-4 text-gray-600">
            DELIVERY <span className="font-bold text-gray-800">INFORMATION</span>
          </h2>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="First name" className="border p-2 rounded w-full" />
            <input type="text" placeholder="Last name" className="border p-2 rounded w-full" />
            <input type="email" placeholder="Email address" className="border p-2 rounded w-full col-span-2" />
            <input type="text" placeholder="Street" className="border p-2 rounded w-full col-span-2" />
            <input type="text" placeholder="City" className="border p-2 rounded w-full" />
            <input type="text" placeholder="State" className="border p-2 rounded w-full" />
            <input type="text" placeholder="Zipcode" className="border p-2 rounded w-full" />
            <input type="text" placeholder="Country" className="border p-2 rounded w-full" />
            <input type="text" placeholder="Phone" className="border p-2 rounded w-full col-span-2" />
          </form>
        </div>

        {/* Cart Totals & Payment Method */}
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">
              CART <span className="font-normal">TOTALS</span>
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$84.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$94.00</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">
              PAYMENT <span className="font-normal">METHOD</span>
            </h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="radio" name="payment" id="stripe" className="mr-2" />
                <label htmlFor="stripe" className="mr-4">
                  stripe
                </label>
                <input type="radio" name="payment" id="razorpay" className="mr-2" />
                <label htmlFor="razorpay" className="mr-4">
                  Razorpay
                </label>
                <input type="radio" name="payment" id="cod" className="mr-2" />
                <label htmlFor="cod">CASH ON DELIVERY</label>
              </div>
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
