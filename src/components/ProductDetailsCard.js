import React from "react";

const ProductDetailsCard = (items) => {
  const { category, description, image, price, rating, title } = items.items;
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img src={image} alt="" className="object-cover w-full h-72 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
          <div className="p-6 space-y-3 lg:col-span-5">
            <h3 className="text-xl font-bold uppercase">{category}</h3>
            <span className="text-lg font-semibold dark:text-gray-600">{title}</span>
            <p className="text-sm font-bold ">{rating.rate} ⭐</p>
            <h3 className="text-xl font-bold sm:text-4xl">$ {price}</h3>
            <p className="text-sm">{description}</p>
            <div>
              <button
                type="button"
                className="mt-4 px-6 py-2 mr-4 font-semibold border rounded hover:bg-black hover:text-white dark:border-gray-800 dark:text-gray-800"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="mt-4 px-6 py-2 font-semibold border rounded bg-black text-white hover:text-black hover:bg-white hover:border-gray-900"
              >
                Go to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsCard;
