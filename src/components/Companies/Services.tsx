import React from 'react';

const Services = ({ consumer }: any) => {
  const forGears = consumer === 'switch-gears';

  return (
    <div className='fade-in my-5 py-5'>
      <h1>
        This is the Services component for{' '}
        {forGears ? 'GearsCompany' : 'PipesCompany'}!
      </h1>
      <h1>
        {forGears
          ? "GearsCompany's Services content goes here."
          : "PipesCompany's Services content goes here."}
      </h1>
    </div>
  );
};

export default Services;
