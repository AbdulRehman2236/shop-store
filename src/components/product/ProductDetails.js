import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";
import useProductDetails from "../../utils/hooks/useProductDetails";
import ProductCardShimmer from "./ProductCardShimmer";

const ProductDetails = () => {
  const { id } = useParams();
  const productDetails = useProductDetails(id);

  if (!productDetails) return <ProductCardShimmer />;

  return <ProductDetailsCard items={productDetails} />;
};

export default ProductDetails;
