import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  const { setNavState, location } = props;
  const { pathname } = location;

  React.useEffect(() => {
    setNavState(pathname);

    return () => {
      setNavState('/');
      window.scrollTo(0, 0);
    };
  }, [pathname, setNavState]);

  return (
    <Container fluid className='News px-0'>
      <Switch>
        <Route path={companyNews} component={CompanyNews} />
        <Route path={industryNews} component={IndustryNews} />
        <Route path={educationalPacks} component={EducationalPacks} />
        <Route component={_404} />
      </Switch>

      <FooterNavigator pages={pagesData} />
    </Container>
  );
};

export function Main(props: any) {
  const pageTitle = props.pageTitle;

  return (
    <Col className='Main' {...props}>
      <Row as='h1' className='page-title'>
        {pageTitle}
      </Row>
      <NewsPost />
      <NewsPost />
      <NewsPost />
    </Col>
  );
}

function NewsPost() {
  return (
    <Row className='NewsPost'>
      <Col as='h2' xs={12} className='title p-0'>
        <a href='#!'>Title of the Medium Article</a>
      </Col>
      <Col xs={12} className='author'>
        By Immaculata Abba | 2 February, 2020
      </Col>
      <Col sm={4} className='image-container py-3'>
        <img src='/images/switch-gears.jpg' alt='Switchgears' />
      </Col>
      <Col sm={8} className='text-container py-3'>
        <Col className='desc p-0'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          beatae accusamus totam molestias perspiciatis officiis, ipsum
          laudantium, consectetur ipsam ipsa maiores vero aspernatur qui quas
          est saepe, soluta eos dolores.
        </Col>
        <Col className='p-0 mt-3'>
          <a href='#!' className='link'>
            Read article on Medium...
          </a>
        </Col>
      </Col>
    </Row>
  );
}

export function Aside(props: any) {
  return (
    <Col className='Aside' {...props}>
      <Row className='mx-0'>
        <RecentPosts sm={6} lg={12} />
        <Archive sm={6} lg={12} />
      </Row>
    </Col>
  );
}

function RecentPosts(props: any) {
  return (
    <Col className='RecentPosts mb-5' {...props}>
      <Row as='h2' className='mb-2'>
        Recent Posts
      </Row>
      {Array(5)
        .fill('')
        .map(() => (
          <AsidePost />
        ))}
    </Col>
  );
}

function Archive(props: any) {
  return (
    <Col className='Archive mb-5' {...props}>
      <Row as='h2' className='mb-2'>
        Archive
      </Row>
      {Array(5)
        .fill('')
        .map(() => (
          <AsidePost />
        ))}
    </Col>
  );
}

function AsidePost() {
  return (
    <Row className='AsidePost x-0'>
      <a href='#!'>Lorem ipsum dolor sit amet consectetur.</a>
    </Row>
  );
}

export default News;
