import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  return (
    <Container className='Contact fade-in'>
      <Container fluid='lg'>
        <Row>
          <Col>
            <h1>Contact content goes here.</h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
