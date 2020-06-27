import React from 'react';

const Events = (props: any) => {
  const { callSetNavState, location } = props;
  const { pathname } = location;

  React.useEffect(() => {
    callSetNavState(pathname);

    return () => {
      callSetNavState('/');
    };
  }, [pathname, callSetNavState]);

  return (
    <div className='fade-in my-5 py-5'>
      <h1>This is the Events component!</h1>
      <h1>News and Events content goes here!</h1>
    </div>
  );
};

export default Events;
