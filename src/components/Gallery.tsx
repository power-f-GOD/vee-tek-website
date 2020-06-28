import React from 'react';

const Gallery = (props: any) => {
  const { callSetNavState, location } = props;
  const { pathname } = location;

  React.useEffect(() => {
    callSetNavState(pathname);

    return () => {
      callSetNavState('/');
    };
  }, [pathname, callSetNavState]);

  return (
    <div className='fade-in my-5 py-5 container'>
      <h1>This is the Gallery component!</h1>
      <h1>Gallery content goes here!</h1>
    </div>
  );
};

export default Gallery;
