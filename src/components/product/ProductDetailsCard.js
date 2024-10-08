import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart, calculateTotalAmount } from "../../utils/slices/cartSlice";

const ProductDetailsCard = (items) => {
  const { category, description, image, price, rating, title } = items.items;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(items));
    dispatch(calculateTotalAmount(price));
  };

  return (
    <section className="bg-gray-50 h-full min-h-[90vh] flex items-center justify-center dark:bg-gray-800  dark:text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div
          rel="noopener noreferrer"
          href="#"
          className=" block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <div className="lg:col-span-7 lg:flex lg:items-center lg:justify-center">
            <img
              src={image}
              alt={title}
              className="bg-white object-contain w-full h-72 sm:h-96 rounded lg:col-span-7 lg:col-start-1 lg:row-span-full"
            />
          </div>

          <div className="p-6 space-y-3 lg:col-span-5 dark:bg-gray-700 dark:text-white">
            <h3 className="text-xl font-bold uppercase">{category}</h3>
            <span className="text-lg font-semibold ">{title}</span>
            <p className="text-sm font-bold ">{rating.rate} ⭐</p>
            <h3 className="text-xl font-bold sm:text-4xl">$ {price}</h3>
            <p className="text-sm">{description}</p>
            <div>
              <button
                type="button"
                className="mt-4 px-6 py-2 mr-4 font-semibold border rounded hover:bg-black hover:text-white dark:bg-gray-800 dark:border-gray-900 dark:text-white dark:hover:bg-white dark:hover:text-gray-800"
                onClick={() => handleAddToCart()}
              >
                Add to Cart
              </button>
              <Link
                to="/cart"
                className="mt-4 px-6 py-2 font-semibold border rounded bg-black text-white hover:text-black hover:bg-white hover:border-gray-900 dark:bg-white dark:text-gray-800 dark:hover:text-white dark:hover:bg-gray-800 dark:hover:border border-gray-900"
              >
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsCard;
