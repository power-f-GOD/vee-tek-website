import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';
import Products from './Products';
import Services from './Services';
import Portfolio from './Portfolio';
import Inquiry from './Inquiry';
import FooterNavigator, { Page } from '../../crumbs/FooterNavigator';
import _404 from '../../_404';

const main = '/companies/switch-gears';
const [products, services, portfolio, inquiry] = [
  `${main}/products`,
  `${main}/services`,
  `${main}/portfolio`,
  `${main}/inquiry`
];
const pagesData: Page[] = [
  {
    pathname: '/about/sustainability-strategy',
    name: 'About Us',
    notRelative: true
  },
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
  },
  {
    pathname: '/companies/pipes-and-fittings',
    name: 'Pipes Company',
    notRelative: true
  }
];

const Switchgears = () => {
  React.useEffect(() => {
    document.body.classList.remove('companies');

    return () => {
      window.scrollTo(0, 0);
    };
  });

  return (
    <>
      <Switch>
        <Route path={main} exact component={Main} />
        <Route path={products} exact component={Products} />
        <Route path={services} exact component={Services} />
        <Route path={portfolio} exact component={Portfolio} />
        <Route path={inquiry} exact component={Inquiry} />
        <Route component={_404} />
      </Switch>

      <FooterNavigator pages={pagesData} />
    </>
  );
};

export default Switchgears;
