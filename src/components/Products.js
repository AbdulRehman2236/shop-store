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

  return (
    <div className="px-16 sm:px-4">
      {showSearch && <Search />}
      <div className="flex flex-col sm:mt-10 sm:flex sm:relative items-center mt-3">
        <h1 className="font-bold text-2xl mt-6 mb-8 sm:mb-0 sm:mt-0">LATEST COLLECTIONS</h1>
        <div className="sm:ml-auto mt-2 sm:absolute sm:right-0 sm:mt-0">
          <Sorting />
        </div>
      </div>

      <div>
        <Category />
      </div>

      {products.length === 0 ? (
        <Shimmer placeholderCount={10} />
      ) : (
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
      )}
    </div>
  );
};

export default Products;
