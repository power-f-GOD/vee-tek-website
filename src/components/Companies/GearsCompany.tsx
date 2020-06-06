import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './Products';
import Services from './Services';
import _404 from '../_404';

const GearsCompany = () => {
  const main = '/companies/switch-gears';
  const [products, services, portfolio] = [
    `${main}/products`,
    `${main}/services`,
    `${main}/portfolio`
  ];
  const consumer = 'switch-gears';

  return (
    <Switch>
      <Route path={main} exact component={Main} />
      <Route
        path={products}
        exact
        render={(props: any) => <Products {...props} consumer={consumer} />}
      />
      <Route
        path={services}
        exact
        render={(props: any) => <Services {...props} consumer={consumer} />}
      />
      <Route path={portfolio} exact component={Portfolio} />
      <Route component={_404} />
    </Switch>
  );
};

function Main() {
  return (
    <div className='fade-in my-5 py-5 container'>
      <h1>This is the GearsCompany's Main component!</h1>
      <h1>GearsCompany's Main content goes here!</h1>
    </div>
  );
}

function Portfolio() {
  return (
    <div className='fade-in my-5 py-5 container'>
      <h1>This is the GearsCompany's Portfolio component!</h1>
      <h1>GearsCompany's Portfolio content goes here!</h1>
    </div>
  );
}

export default GearsCompany;
