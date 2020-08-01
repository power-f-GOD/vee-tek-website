import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import Main from './Main';
import Services from './Services';
import Portfolio from './Portfolio';
import Inquiry from './Inquiry';
import FooterNavigator, { Page } from '../../crumbs/FooterNavigator';
import _404 from '../../_404';
import TechnicalData from './TechnicalData';

const main = '/companies/switchgears';
const [services, portfolio, technicalData, inquiry] = [
  `${main}/services`,
  `${main}/portfolio`,
  `${main}/technical-data`,
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
    pathname: services,
    name: 'Our Services'
  },
  {
    pathname: portfolio,
    name: 'Our Portfolio'
  },
  // {
  //   pathname: technicalData,
  //   name: 'Technical Data'
  // },
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

const Switchgears = (props: any) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('companies');

    return () => {
      document.body.classList.remove('companies');
    };
  });

  return (
    <Box className='Switchgears' position='relative'>
      <Switch>
        <Route path={main} exact component={Main} />
        <Route path={services} exact component={Services} />
        <Route path={portfolio} exact component={Portfolio} />
        <Route path={technicalData} exact component={TechnicalData} />
        <Route path={inquiry} exact component={Inquiry} />
        <Route component={_404} />
      </Switch>

      {!props.location.pathname.endsWith('companies/switchgears') && (
        <FooterNavigator pages={pagesData} />
      )}
    </Box>
  );
};

export default Switchgears;
