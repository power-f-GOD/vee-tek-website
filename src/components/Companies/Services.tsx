import React from "react";
import GearService from "./GearsCompany/Services";
import PipeService from "./PipesCompany/Services";

const Services = ({ consumer }: any) => {
  const forGears = consumer === "switch-gears";

  return forGears ? (
    <div className="fade-in my-5">
      <GearService />
    </div>
  ) : (
    <div className="fade-in py-5">
      <PipeService />
    </div>
  );
};

export default Services;
