import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, addSortedProducts } from "../slices/productSlice";
import { GET_PRODUCTS_API } from "../constants";

const useAllProducts = () => {
  const [products, setProducts] = useState([]);
  const onlineStatus = useSelector((store) => store.networkStatusSlice.onlineStatus);
  const dispatch = useDispatch();
  const getProducts = async () => {
    try {
      const data = await fetch(GET_PRODUCTS_API);
      const json = await data.json();
      setProducts(json);
      dispatch(addProducts(json));
      dispatch(addSortedProducts(json));
    } catch (error) {
      // Intentionally left empty to do nothing on error as shimmer effect handled that
    }
  };

  useEffect(() => {
    if (onlineStatus) getProducts();
  }, [onlineStatus]);

  return products;
};

export default useAllProducts;
