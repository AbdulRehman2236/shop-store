import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const BodyContainer = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const getLatestProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products?limit=4");
    const json = await data.json();
    setLatestProducts(json);
  };

  useEffect(() => {
    getLatestProducts();
  }, []);

  return latestProducts.length === 0 ? (
    <Shimmer />
  ) : (
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
  );
};

export default BodyContainer;
