import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Certificates = () => {
  return (
    <Container
      fluid
      className='Certificate include-page-header fade-in p-0 mt-5'>
      <Row as='h1' className='page-title px-1'>
        Certificate
      </Row>
      <Container className='mb-5 mt-5 p-0'>
        <Row>
          <Col as='p' lg={5}>
            Every product we make passes through a rigorous test of quality
            certification before leaving the factory. This process guarantees
            client’s absolute satisfaction. As a result, Vee-Tek products and
            services compare excellently well with international standards at a
            very reasonable budget and with the added advantage of customization
            to individual clients’ particular needs.
          </Col>
          <Col lg={7}>
            <img
              src='/images/cert.jpg'
              className='Certificate img-thumbnail mb-2 Certificate-One'
              alt='Certificate'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Certificates;
