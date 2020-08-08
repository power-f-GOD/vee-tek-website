import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from '@material-ui/core/Box';

const Certificates = () => {
  return (
    <Container
      fluid
      className='Certificate include-page-header fade-in p-0 mt-5'>
      <Row as='h1' className='page-title px-1'>
        <Box className='before'>
          <picture>
            <source srcSet='/images/assurance.webp' type='image/webp' />
            <img
              src='/images/assurance.jpg'
              alt={'/images/assurance.jpg'.split('/').slice(-1)[0]}
            />
          </picture>
        </Box>
        Certificate
        <Box className='after' />
      </Row>
      <Container className='mb-5 mt-5 p-0'>
        <Row>
          <Col as='p' lg={5} className='mb-5'>
            Every product we make passes through a rigorous test of quality
            certification before leaving the factory. This process guarantees
            client’s absolute satisfaction. As a result, Vee-Tek products and
            services compare excellently well with international standards at a
            very reasonable budget and with the added advantage of customization
            to individual clients’ particular needs.
          </Col>
          <Col lg={7}>
            <picture>
              <source srcSet='/images/cert.webp' type='image/webp' />
              <img
                className='Certificate img-thumbnail mb-2 Certificate-One'
                src='/images/cert.jpg'
                alt='Certificate'
              />
            </picture>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Certificates;
