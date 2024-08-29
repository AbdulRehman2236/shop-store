import { useEffect, useState } from "react";

const useAllProducts = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;
};

export default useAllProducts;
