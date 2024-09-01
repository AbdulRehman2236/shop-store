import { SORTING_TYPES } from "./constants";

export const sortProductByPrice = (products, sortType) => {
  let productForSort = [...products];
  if (sortType === SORTING_TYPES[1].identifier) return productForSort.sort((a, b) => a.price - b.price);
  else if (sortType === SORTING_TYPES[2].identifier) return productForSort.sort((a, b) => b.price - a.price);
  else return null;
};

export const generateShippingFee = () => {
  return Math.ceil(Math.random() * 10) + 0.5;
};
