import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";
import Shimmer from "./Shimmer";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const getProductDetails = async () => {
    const data = await fetch("https://fakestoreapi.com/products/" + id);
    const json = await data.json();
    setProductDetails(json);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  if (!productDetails) return <Shimmer />;

  return <ProductDetailsCard items={productDetails} />;
};

export default ProductDetails;
