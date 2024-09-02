import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSortedProducts } from "../../utils/slices/productSlice";
import { hideSearch } from "../../utils/slices/searchSlice";

const Search = () => {
  const products = useSelector((store) => store.product.products);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleSearchClose = () => {
    dispatch(hideSearch());
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

  const handleSearchCross = () => {
    setSearchText("");
    dispatch(addSortedProducts(products));
  };

  return (
    <div className="flex justify-center bg-gray-50 text-center sm:mx-10 mb-10 dark:bg-gray-800 dark:text-white">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-2xl w-3/4 sm:w-1/2 ">
        <input
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search here ..."
          value={searchText}
          onChange={handleSearch}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
          onClick={handleSearchCross}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
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
