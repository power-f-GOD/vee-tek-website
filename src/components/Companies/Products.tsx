import React from "react";

import GearProduct from "./GearsCompany/Products";

import PipeProduct from "./PipesCompany/Products";

const Products = ({ consumer }: any) => {
  const forGears = consumer === "switch-gears";

  return forGears ? (
    <div className="fade-in">
      <GearProduct />{" "}
    </div>
  ) : (
    <div className="fade-in">
      <PipeProduct />
    </div>
  );
};

export default Products;
