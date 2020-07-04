import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Main, Aside } from './';

const CompanyNews = () => {
  return (
    <Container className='CompanyNews fade-in px-0'>
      <Row className='mx-0'>
        <Main as='main' lg={9} pageTitle='Company News' />
        <Aside as='aside' lg={3} />
      </Row>
    </Container>
  );
};

export default CompanyNews;
