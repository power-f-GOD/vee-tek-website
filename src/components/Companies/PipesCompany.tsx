import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './Products';
import _404 from '../_404';
import FooterNavigator, { Page } from '../crumbs/FooterNavigator';

const main = '/companies/pipes-and-fittings';
const [products, order] = [`${main}/products`, `${main}/order`];
const consumer = 'pipes-and-fittings';
const pagesData: Page[] = [
  {
    pathname: main,
    name: 'Overview'
  },
  {
    pathname: products,
    name: 'Our Products'
  },
  {
    pathname: order,
    name: 'Make an Order'
  }
];

const PipesCompany = () => {
  return (
    <>
      <Switch>
        <Route path={main} exact component={Main} />
        <Route
          path={products}
          render={(props: any) => <Products {...props} consumer={consumer} />}
        />

        <Route path={order} component={Order} />
        <Route component={_404} />
      </Switch>

      <FooterNavigator pages={pagesData} />
    </>
  );
};

function Main() {
  return (
    <div className='fade-in my-5 py-5 container'>
      <h1>This is the PipesCompany's Main component!</h1>
      <h1>PipesCompany's Main content goes here!</h1>
    </div>
  );
}

function Order() {
  return (
    <div className='fade-in my-5 py-5 container'>
      <h1>This is the PipesCompany's Order component!</h1>
      <h1>PipesCompany's Order content goes here!</h1>
    </div>
  );
}

export default PipesCompany;
