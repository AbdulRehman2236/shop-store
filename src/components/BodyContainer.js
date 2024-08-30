import React from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import useLatestProducts from "../utils/hooks/useLatestProducts";

const BodyContainer = () => {
  const latestProducts = useLatestProducts();

  return latestProducts.length === 0 ? (
    <Shimmer placeholderCount={5} />
  ) : (
    <div className="px-16 sm:px-4">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {latestProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.title}
            price={"$" + product.price}
            img={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyContainer;
