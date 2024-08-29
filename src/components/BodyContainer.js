import React from "react";
import ProductCard from "./ProductCard";

const BodyContainer = () => {
  return (
    <div className="flex justify-between">
      <ProductCard name="Men's Casual" price="$ 109.5" img="81fPKd-2AYL._AC_SL1500_.jpg" />
      <ProductCard name="Men's Casual" price="$ 109.5" img="71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
      <ProductCard name="Men's Casual" price="$ 109.5" img="81fPKd-2AYL._AC_SL1500_.jpg" />
      <ProductCard name="Men's Casual" price="$ 109.5" img="81fPKd-2AYL._AC_SL1500_.jpg" />
      <ProductCard name="Men's Casual" price="$ 109.5" img="81fPKd-2AYL._AC_SL1500_.jpg" />
    </div>
  );
};

export default BodyContainer;
