import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from '../Products';
import Services from '../Services';
import _404 from '../../_404';
import Portfolio from './Portfolio';
import FooterNavigator, { Page } from '../../crumbs/FooterNavigator';

const main = '/companies/switch-gears';
const [products, services, portfolio, inquiry] = [
  `${main}/products`,
  `${main}/services`,
  `${main}/portfolio`,
  `${main}/inquiry`
];
const consumer = 'switch-gears';
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
    pathname: services,
    name: 'Our Services'
  },
  {
    pathname: portfolio,
    name: 'Our Portfolio'
  },
  {
    pathname: inquiry,
    name: 'Make an Inquiry'
  }
];

const GearsCompany = () => {
  return (
    <>
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
        <Route path={inquiry} exact component={Inquiry} />
        <Route component={_404} />
      </Switch>

      <FooterNavigator pages={pagesData} />
    </>
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

function Inquiry() {
  return (
    <div className='fade-in my-5 py-5 container'>
      <h1>This is the GearsCompany's Inquiry component!</h1>
      <h1>GearsCompany's Inquiry content goes here!</h1>
    </div>
  );
}

export default GearsCompany;
