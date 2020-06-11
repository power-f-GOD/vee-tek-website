import React from "react";
import { Gear } from "../../../constants";
import ProductTile from "../../crumbs/ProductTile";

const Products = () => {
  return (
    <div className="Main-Wrapper">
      {Gear.products.map((item, _) => (
        <ProductTile image={item.key} product={item.product} desc={item.desc} />
      ))}
    </div>
  );
};

export default Products;
