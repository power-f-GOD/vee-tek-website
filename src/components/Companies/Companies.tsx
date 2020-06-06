import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import GearsCompany from './GearsCompany';
import PipesCompany from './PipesCompany';
import _404 from '../_404';

const Companies = (props: any) => {
  const { callSetNavState, location } = props;
  const { pathname } = location;

  useEffect(() => {
    callSetNavState(pathname);
    document.body.classList.add('companies');

    return () => {
      callSetNavState('/');
      document.body.classList.remove('companies');
    };
  }, [pathname, callSetNavState]);

  return (
    <Container className='fade-in my-5 py-5'>
      <h1>This is the Companies component!</h1>
      <Switch>
        <Route path='/companies/switch-gears' component={GearsCompany} />
        <Route path='/companies/pipes-and-fittings' component={PipesCompany} />
        <Route component={_404} />
      </Switch>
    </Container>
  );
};

export default Companies;
