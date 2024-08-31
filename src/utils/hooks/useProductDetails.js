import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GET_PRODUCT_API } from "../constants";

const useProductDetails = (id) => {
  const onlineStatus = useSelector((store) => store.networkStatusSlice.onlineStatus);
  const [productDetails, setProductDetails] = useState(null);

  const getProductDetails = async () => {
    try {
      const data = await fetch(GET_PRODUCT_API + id);
      const json = await data.json();
      setProductDetails(json);
    } catch (error) {
      // Intentionally left empty to do nothing on error as shimmer effect handled that
    }
  };

  useEffect(() => {
    if (onlineStatus) getProductDetails();
  }, [onlineStatus]);

  return productDetails;
};

export default useProductDetails;
