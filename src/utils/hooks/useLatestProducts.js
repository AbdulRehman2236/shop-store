import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GET_LATEST_PRODUCTS_API } from "../constants";

const useLatestProducts = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const onlineStatus = useSelector((store) => store.networkStatusSlice.onlineStatus);

  const getLatestProducts = async () => {
    try {
      const data = await fetch(GET_LATEST_PRODUCTS_API);
      const json = await data.json();
      setLatestProducts(json);
    } catch (error) {
      // Intentionally left empty to do nothing on error as shimmer effect handled that
    }
  };

  useEffect(() => {
    if (onlineStatus) getLatestProducts();
  }, [onlineStatus]);

  return latestProducts;
};

export default useLatestProducts;
