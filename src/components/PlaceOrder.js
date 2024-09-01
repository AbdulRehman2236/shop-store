import React from "react";

const PlaceOrder = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Delivery Information Form */}
        <div className="lg:mt-4 lg:px-4 lg:mr-10">
          <h2 className="text-2xl font-normal mb-4 md:mb-12 text-gray-700">
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
        <div className="lg:mt-20">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-5 text-gray-700">
              CART <span className="font-bold text-gray-800">TOTALS</span>
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between ">
                <span>Subtotal</span>
                <span>$84.00</span>
              </div>
              <hr />
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>$10.00</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold space-y-1">
                <span>Total</span>
                <span>$94.00</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 mt-10 text-gray-700">
              PAYMENT <span className="font-bold text-gray-800">METHOD</span>
            </h2>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
              {/* Stripe Payment Option */}
              <div className="border border-gray-400 px-3 py-2 rounded-md w-full md:w-40 flex md:justify-center items-center space-x-3 hover:shadow-lg">
                <input
                  type="radio"
                  name="payment"
                  id="stripe"
                  className="form-radio appearance-none rounded-full h-3 w-3 border border-gray-400 bg-white checked:bg-green-600 checked:border-transparent focus:outline-none"
                />
                <label htmlFor="stripe" className="flex items-center space-x-2 cursor-pointer">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZVxQZ2UYa4aZMO1u_hgQPt-OVvqLq5MnoA&s"
                    alt="Stripe"
                    className="h-6 w-auto"
                  />
                </label>
              </div>

              {/* Razorpay Payment Option */}
              <div className="border border-gray-400 px-3 py-2 rounded-md w-full md:w-40 flex  md:justify-center items-center space-x-3 hover:shadow-lg">
                <input
                  type="radio"
                  name="payment"
                  id="razorpay"
                  className="form-radio appearance-none rounded-full h-3 w-3 border border-gray-400 bg-white checked:bg-green-600 checked:border-transparent focus:outline-none"
                />
                <label htmlFor="razorpay" className="flex items-center space-x-2 cursor-pointer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                    alt="Razorpay"
                    className="h-5 w-auto"
                  />
                </label>
              </div>

              {/* Cash on Delivery Payment Option */}
              <div className="border border-gray-400 px-3 py-2 rounded-md w-full md:w-52 flex  md:justify-center items-center space-x-3 hover:shadow-lg">
                <input
                  type="radio"
                  name="payment"
                  id="cod"
                  defaultChecked
                  className="form-radio appearance-none rounded-full h-3 w-3 border border-gray-400 bg-white checked:bg-green-600 checked:border-transparent focus:outline-none"
                />
                <label
                  htmlFor="cod"
                  className="flex items-center font-bold text-gray-600 uppercase space-x-2 cursor-pointer"
                >
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="w-3/12 bg-black text-sm text-white py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black hover:font-bold">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
