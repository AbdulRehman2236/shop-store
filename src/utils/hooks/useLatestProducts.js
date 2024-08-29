import { useEffect, useState } from "react";

const useLatestProducts = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const getLatestProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products?limit=4");
    const json = await data.json();
    setLatestProducts(json);
  };

  useEffect(() => {
    getLatestProducts();
  }, []);

  return latestProducts;
};

export default useLatestProducts;
