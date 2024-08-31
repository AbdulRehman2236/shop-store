import React from "react";

const Contact = () => {
  return (
    <section className="dark:bg-gray-100 h-full min-h-[90vh] flex-col items-center justify-center  dark:text-gray-800">
      <h1 className="font-bold text-center pt-8 text-2xl mb-8 sm:mb-0 sm:mt-0">CONTACT US</h1>

      <div className="container max-w-6xl sm:p-6 mx-auto space-y-6 sm:space-y-12">
        <div
          rel="noopener noreferrer"
          href="#"
          className=" block max-w-sm gap-3 mx-auto sm:max-w-full sm:flex justify-center group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <div className="lg:col-span-7 lg:flex lg:items-center lg:justify-center">
            <img
              src="https://images.unsplash.com/photo-1416339442236-8ceb164046f8?q=80&w=1403&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="bg-white object-cover w-full h-72 sm:h-96 rounded lg:col-span-7 lg:col-start-1 lg:row-span-full"
            />
          </div>

          <div className="p-6 space-y-3 lg:col-span-5 lg:mt-16">
            <h3 className="text-xl font-bold uppercase">Our Store</h3>
            <span className="text-lg font-semibold dark:text-gray-600">77805 Abdul Station</span>
            <p className="text-sm font-bold ">Suite 350, Karachi, Pakistan</p>
            <h3 className="text-xl font-semibold sm:text-sm">Tel: +92 123-9254486</h3>
            <span className="text-sm font-semibold">Email: abdulrehmanfayyaz3083@gmail.com</span>
            <div>
              <button
                type="button"
                className="mt-4 px-6 py-2 mr-4 font-semibold border rounded hover:bg-black hover:text-white dark:border-gray-800 dark:text-gray-800"
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
