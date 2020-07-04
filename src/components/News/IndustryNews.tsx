import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Main, Aside } from './';

const IndustryNews = () => {
  return (
    <Container className='IndustryNews fade-in px-0'>
      <Row className='mx-0'>
        <Main as='main' lg={9} pageTitle='Industry News' />
        <Aside as='aside' lg={3} />
      </Row>
    </Container>
  );
};

export default IndustryNews;
