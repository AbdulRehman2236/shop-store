import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts, addSortedProducts } from "../slices/productSlice";

const useAllProducts = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
    dispatch(addProducts(json));
    dispatch(addSortedProducts(json));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;
};

export default useAllProducts;
