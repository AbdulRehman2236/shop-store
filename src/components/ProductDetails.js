import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";
import Shimmer from "./Shimmer";
import useProductDetails from "../utils/hooks/useProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const productDetails = useProductDetails(id);

  if (!productDetails) return <Shimmer />;

  return <ProductDetailsCard items={productDetails} />;
};

export default ProductDetails;
