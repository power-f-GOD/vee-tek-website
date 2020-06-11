import React from "react";
import { GearProducts } from "../../../constants";
import ProductTile from "../../crumbs/ProductTile";

const Products = () => {
  return (
    <div className="Main-Wrapper">
      {GearProducts.map((item, _) => (
        <ProductTile 
          image={item.key}
          product={item.product}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Products;
