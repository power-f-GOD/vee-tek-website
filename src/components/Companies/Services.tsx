import React from "react";
import GearService from "./GearsCompany/Services";

const Services = ({ consumer }: any) => {
  const forGears = consumer === "switch-gears";

  return forGears ? (
    <div className="fade-in my-5">
      <GearService />
    </div>
  ) : (
    <div className="fade-in my-5 py-5">
      <h1>This is the Services component for PipesCompany</h1>
      <h1>PipesCompany's Services content goes here.</h1>
    </div>
  );
};

export default Services;
