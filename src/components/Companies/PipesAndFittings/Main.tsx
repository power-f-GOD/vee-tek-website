import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Box from '@material-ui/core/Box';

const Main = () => {
  return (
    <Box className='Overview fade-in'>
      <Row
        as='header'
        className='align-content-center justify-content-center mx-0'>
        <Container className='px-0'>
          <Col as='h1' className=''>
            Vee-Tek Pipes
          </Col>
          <Col>...the best you can get!</Col>
        </Container>
      </Row>
    </Box>
  );
};

export default Main;
