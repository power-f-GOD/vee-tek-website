import React from 'react';

import Box from '@material-ui/core/Box';

const _404 = (props: any) => {
  const { setNavState, location } = props;
  const { pathname } = location;

  React.useEffect(() => {
    setNavState(pathname);
    window.scrollTo(0, 0);

    return () => {
      setNavState('/');
    };
  }, [pathname, setNavState]);

  return (
    <Box
      className='fade-in d-flex pt-4 justify-content-center container'
      height='100vh'>
      <Box className='align-self-center text-center'>
        <picture>
          <source srcSet='/images/logos/logo-128.webp' type='image/webp' />
          <img
            className='rounded-circle logo-img mb-4'
            src='/images/logos/logo-128.png'
            alt={
              'Vee-Tek Group' +
              '/images/logos/logo-128.png'.split('/').slice(-1)[0]
            }
          />
        </picture>
        <h1>404 Page not found!</h1>
        <h4>Sorry, the page you are looking for was not found!</h4>
      </Box>
    </Box>
  );
};

export default _404;
