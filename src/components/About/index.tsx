import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import WhoWeAre from './WhoWeAre';
import OurPeople from './OurPeople';
import Certificates from './Certificates';
import SustainabilityStrategy from './SustainabilityStrategy';
import FooterNavigator, { Page } from '../crumbs/FooterNavigator';
import _404 from '../_404';

const main = '/about';
const [whoWeAre, ourPeople, certificates, sustainabilityStrategy] = [
  `${main}/who-we-are`,
  `${main}/our-people`,
  `${main}/certificates`,
  `${main}/sustainability-strategy`
];
const pagesData: Page[] = [
  {
    pathname: whoWeAre,
    name: 'Who We Are'
  },
  {
    pathname: ourPeople,
    name: 'Our People'
  },
  {
    pathname: certificates,
    name: 'Certificates'
  },
  {
    pathname: sustainabilityStrategy,
    name: 'Sustainability Strategy'
  },
  {
    pathname: '/companies/switchgears',
    name: 'Our Companies',
    notRelative: true
  }
];

const About = (props: any) => {
  const { setNavState, location } = props;
  const { pathname } = location;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setNavState(pathname);

    return () => {
      setNavState('/');
    };
  }, [pathname, setNavState]);

  return (
    <Box className='About' position='relative'>
      <Switch>
        <Route path={whoWeAre} component={WhoWeAre} />
        <Route path={ourPeople} component={OurPeople} />
        <Route path={certificates} component={Certificates} />
        <Route
          path={sustainabilityStrategy}
          component={SustainabilityStrategy}
        />
        <Route component={_404} />
      </Switch>

      <FooterNavigator pages={pagesData} />
    </Box>
  );
};

export default About;
