import React from "react";
import { useDispatch } from "react-redux";
import { showSearch } from "../../../utils/slices/searchSlice";
import { Link } from "react-router-dom";

const SearchIcon = () => {
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(showSearch());
  };

  return (
    <Link to="/products">
      <svg
        className=" size-6 font-semibold leading-6 text-gray-900 mx-1 mr-3 hover:size-5 dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        onClick={handleSearch}
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
};

export default SearchIcon;
