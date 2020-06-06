import React from 'react';

const Products = ({ consumer }: any) => {
  const forGears = consumer === 'switch-gears';

  return (
    <div className='fade-in my-5 py-5'>
      <h1>
        This is the Products component for{' '}
        {forGears ? 'GearsCompany' : 'PipesCompany'}!
      </h1>
      <h1>
        {forGears
          ? "GearsCompany's Products content goes here."
          : "PipesCompany's Products content goes here."}
      </h1>
    </div>
  );
};

export default Products;
