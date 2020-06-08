import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './Products';
import Services from './Services';
import _404 from '../_404';

const PipesCompany = () => {
  const main = '/companies/pipes-and-fittings';
  const [products, services, order] = [
    `${main}/products`,
    `${main}/services`,
    `${main}/order`
  ];
  const consumer = 'pipes-and-fittings';

  return (
    <Switch>
      <Route path={main} exact component={Main} />
      <Route
        path={products}
        render={(props: any) => <Products {...props} consumer={consumer} />}
      />
      <Route
        path={services}
        render={(props: any) => <Services {...props} consumer={consumer} />}
      />
      <Route path={order} component={Order} />
      <Route component={_404} />
    </Switch>
  );
};

function Main() {
  return (
    <div className='fade-in my-5 py-5'>
      <h1>This is the PipesCompany's Main component!</h1>
      <h1>PipesCompany's Main content goes here!</h1>
    </div>
  );
}

function Order() {
  return (
    <div className='fade-in my-5 py-5'>
      <h1>This is the PipesCompany's Order component!</h1>
      <h1>PipesCompany's Order content goes here!</h1>
    </div>
  );
}

export default PipesCompany;