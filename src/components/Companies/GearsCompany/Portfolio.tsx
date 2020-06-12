import React from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Typography from '@material-ui/core/Typography';

const Portfolio = () => {
  return (
    <Container className='Portfolio mt-5'>
      <Row as='header' className='m-0'>
        <Typography component='h3' variant='h3'>Our Portfolio</Typography>
      </Row>
    </Container>
  )
};

export default Portfolio;
