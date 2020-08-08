import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import Main from './Main';
import Products from './Products';
import Order from './Order';
import FooterNavigator, { Page } from '../../crumbs/FooterNavigator';
import _404 from '../../_404';

const main = '/companies/pipes-and-fittings';
const [products, order] = [`${main}/products`, `${main}/order`];
const pagesData: Page[] = [
  {
    pathname: '/companies/switchgears/inquiry',
    name: 'Switchgears',
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
    pathname: order,
    name: 'Place an Order'
  },
  {
    pathname: '/news/company-news',
    name: 'News',
    notRelative: true
  }
];

const PipesAndFittings = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('companies');

    return () => {
      document.body.classList.remove('companies');
    };
  }, []);

  return (
    <Box className='PipesAndFittings'>
      <Switch>
        <Route path={main} exact component={Main} />
        <Route path={products} component={Products} />
        <Route path={order} component={Order} />
        <Route component={_404} />
      </Switch>

      <FooterNavigator pages={pagesData} />
    </Box>
  );
};

export default PipesAndFittings;
