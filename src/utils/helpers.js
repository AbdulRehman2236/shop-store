export const sortProductByPrice = (products, sortType) => {
  let productForSort = [...products];
  if (sortType === "low-to-high") return productForSort.sort((a, b) => a.price - b.price);
  else if (sortType === "high-to-low") return productForSort.sort((a, b) => b.price - a.price);
  else return null;
};
