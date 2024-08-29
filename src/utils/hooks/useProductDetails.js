import { useEffect, useState } from "react";

const useProductDetails = (id) => {
  const [productDetails, setProductDetails] = useState(null);
  const getProductDetails = async () => {
    const data = await fetch("https://fakestoreapi.com/products/" + id);
    const json = await data.json();
    setProductDetails(json);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return productDetails;
};

export default useProductDetails;
