import { SORTING_TYPES } from "./constants";

export const sortProductByPrice = (products, sortType) => {
  let productForSort = [...products];
  if (sortType === SORTING_TYPES[1].identifier) return productForSort.sort((a, b) => a.price - b.price);
  else if (sortType === SORTING_TYPES[2].identifier) return productForSort.sort((a, b) => b.price - a.price);
  else return null;
};
