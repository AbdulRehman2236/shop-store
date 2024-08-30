import React from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import useAllProducts from "../utils/hooks/useAllProducts";
import Sorting from "./Sorting";
import { useSelector } from "react-redux";
import Category from "./Category";
import Search from "./Search";

const Products = () => {
  const showSearch = useSelector((store) => store.search.showSearch);
  const products = useAllProducts();
  const filteredProducts = useSelector((store) => store.product.sortedProducts);

  return products.length === 0 ? (
    <Shimmer placeholderCount={10} />
  ) : (
    <div className="px-16 sm:px-4">
      {showSearch && <Search />}
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl flex items-center mt-4 mb-8">LATEST COLLECTIONS</h1>
        <Sorting />
      </div>

      <div>
        <Category />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mx-auto">
        {filteredProducts.map((product) => (
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
