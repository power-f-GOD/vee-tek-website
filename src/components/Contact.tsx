import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Typography from '@material-ui/core/Typography';

const Contact = () => {
  return (
    <Row className='Contact fade-in'>
      <Row className='map-wrapper'></Row>
      <Container className='title'>
        <Typography component='h1' variant='h3'>
          CONTACT US
        </Typography>
      </Container>
      <Container className='form-container'>
        <Row className='contact-form-wrapper'>
          <Col md={9} className='contact-form-col'>
            <h1>Form content goes here</h1>
          </Col>
          <Col md={3} className='social-media-col'>
            <h1>Social media links and phone goes here.</h1>
          </Col>
        </Row>
      </Container>
      <Container></Container>
    </Row>
  );
};

export default Contact;
