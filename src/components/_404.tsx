import React from 'react';

const _404 = () => {
  React.useEffect(() => () => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='fade-in my-5 py-5 container'>
      <h1>404 Page not found!</h1>
      <h4>Sorry, the page you are looking for was not found!</h4>
    </div>
  );
};

export default _404;
