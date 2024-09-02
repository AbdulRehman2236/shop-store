import React from "react";
import { sortProductByPrice } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addSortedProducts } from "../../utils/slices/productSlice";
import { SORTING_TYPES } from "../../utils/constants";

const Sorting = () => {
  const products = useSelector((store) => store.product.products);
  const dispatch = useDispatch();

  const handleSorting = (e) => {
    const sortedProducts = sortProductByPrice(products, e.target.value);
    if (sortedProducts) dispatch(addSortedProducts(sortedProducts));
    else dispatch(addSortedProducts(products));
  };

  return (
    <div className="relative inline-block text-left">
      <select
        onChange={handleSorting}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white border border-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        {SORTING_TYPES.map((sortType) => (
          <option key={sortType.identifier} value={sortType.identifier}>
            {sortType.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sorting;
