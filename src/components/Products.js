import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1 className="font-bold text-2xl text-center mt-4 mb-8">LATEST COLLECTIONS</h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {products.map((product) => (
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

export default Products;
