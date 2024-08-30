import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSortedProducts } from "../utils/slices/productSlice";

const Category = () => {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product.products);
  const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];
  const handleCategory = async (index, category) => {
    if (category !== "all") {
      const data = await fetch("https://fakestoreapi.com/products/category/" + category);
      const json = await data.json();
      dispatch(addSortedProducts(json));
    } else dispatch(addSortedProducts(products));
    setActive(index);
  };

  return (
    <div className="flex flex-wrap justify-center mt-5 mb-10">
      {categories.map((category, index) => (
        <button
          type="button"
          onClick={() => handleCategory(index, category)}
          className={`text-sm mt-4 mr-4 px-3 py-1 font-bold uppercase border rounded border-gray-900 text-gray-700 hover:text-white hover:bg-gray-600 hover:font-bold hover:text-xs ${
            active == index ? "bg-gray-800 text-white border border-black" : ""
          }`}
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;
