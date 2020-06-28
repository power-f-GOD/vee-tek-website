import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CompanyNews from './CompanyNews';
import IndustryNews from './IndustryNews';
import EducationalPacks from './EducationalPacks';
import FooterNavigator, { Page } from '../crumbs/FooterNavigator';
import _404 from '../_404';

const main = '/news';
const [companyNews, industryNews, educationalPacks] = [
  `${main}/company-news`,
  `${main}/industry-news`,
  `${main}/educational-packs`
];
const pagesData: Page[] = [
  {
    pathname: '/companies/pipes-and-fittings/order',
    name: 'Our Companies',
    notRelative: true
  },
  {
    pathname: companyNews,
    name: 'Company News'
  },
  {
    pathname: industryNews,
    name: 'Industry News'
  },
  {
    pathname: educationalPacks,
    name: 'Educational Packs'
  }
];

const News = (props: any) => {
  const { callSetNavState, location } = props;
  const { pathname } = location;

  React.useEffect(() => {
    callSetNavState(pathname);

    return () => {
      callSetNavState('/');
    };
  }, [pathname, callSetNavState]);

  return (
    <>
      <Switch>
        <Route path={companyNews} component={CompanyNews} />
        <Route path={industryNews} component={IndustryNews} />
        <Route path={educationalPacks} component={EducationalPacks} />
        <Route component={_404} />
      </Switch>

      <FooterNavigator pages={pagesData} />
    </>
  );
};

export default News;
