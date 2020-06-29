import React from 'react';

import Container from 'react-bootstrap/Container';

const Gallery = (props: any) => {
  const { setNavState, location } = props;
  const { pathname } = location;

  React.useEffect(() => {
    setNavState(pathname);

    return () => {
      setNavState('/');
    };
  }, [pathname, setNavState]);

  return (
    <Container className='fade-in my-5 py-5'>
      <h1 className='mt-3'>This is the Gallery component!</h1>
      <h1>Gallery content goes here!</h1>
    </Container>
  );
};

export default Gallery;
