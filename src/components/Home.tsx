import React from 'react';

import Slider from './crumbs/Slider';

const Home = () => {
  React.useEffect(() => () => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='fade-in'>
      <Slider />
      <div className='Divider' />

      <div className='Divider' />
    </div>
  );
};

export default Home;
