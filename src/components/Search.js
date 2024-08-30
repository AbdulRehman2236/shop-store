import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSortedProducts } from "../utils/slices/productSlice";
import { showSearch } from "../utils/slices/searchSlice";

const Search = () => {
  const products = useSelector((store) => store.product.products);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleSearchClose = () => {
    dispatch(showSearch());
    dispatch(addSortedProducts(products));
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") dispatch(addSortedProducts(products));
    else {
      dispatch(
        addSortedProducts(products.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase())))
      );
    }
  };

  return (
    <div className="flex justify-center border-t border-b bg-gray-50 text-center sm:mx-10 mb-10">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-2xl w-3/4 sm:w-1/2">
        <input
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search here ..."
          value={searchText}
          onChange={handleSearch}
        />
        <svg
          className=" size-4 font-semibold leading-6 text-gray-900 mx-1 mr-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex items-center">
        <svg
          onClick={handleSearchClose}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
