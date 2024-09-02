import React from "react";
import { CONTACT_IMG } from "../../utils/constants";

const Contact = () => {
  return (
    <section className="bg-gray-50  h-full min-h-[90vh] flex-col items-center justify-center text-gray-800 dark:text-white dark:bg-gray-800">
      <h1 className="font-bold text-center pt-8 text-2xl mb-8 sm:mb-0 sm:mt-0">CONTACT US</h1>

      <div className="container max-w-6xl sm:p-6 mx-auto space-y-6 sm:space-y-12">
        <div
          rel="noopener noreferrer"
          href="#"
          className=" block max-w-sm gap-3 mx-auto sm:max-w-full sm:flex justify-center group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50 dark:bg-gray-50"
        >
          <div className="lg:col-span-7 lg:flex lg:items-center lg:justify-center">
            <img
              src={CONTACT_IMG}
              alt="Contact Us"
              className="bg-white object-cover w-full h-72 sm:h-96 lg:col-span-7 lg:col-start-1 lg:row-span-full"
            />
          </div>

          <div className="p-6 space-y-3 lg:col-span-5 lg:mt-16">
            <h3 className="text-xl font-bold uppercase dark:text-gray-900">Our Store</h3>
            <span className="text-lg font-semibold text-gray-600">77805 Abdul Station</span>
            <p className="text-sm font-bold dark:text-black">Suite 350, Karachi, Pakistan</p>
            <h3 className="text-xl font-semibold sm:text-sm dark:text-gray-700">Tel: +92 123-9254486</h3>
            <span className="text-sm font-semibold dark:text-gray-700">Email: abdulrehmanfayyaz3083@gmail.com</span>
            <div>
              <button
                type="button"
                className="mt-4 px-6 py-2 mr-4 font-semibold border rounded hover:bg-black hover:text-white border-gray-800 text-gray-800"
              >
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
