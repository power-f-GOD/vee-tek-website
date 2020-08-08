import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from '@material-ui/core/Box';

import servicesData from '../../../constants/switchgearsServicesData';

const Services = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container as='main' className='fade-in include-page-header px-0'>
      <Row as='h1' className='page-title'>
        <Box className='before'>
          <picture>
            <source srcSet='/images/switch-gears-3.webp' type='image/webp' />
            <img
              src='/images/switch-gears-3.jpg'
              alt={'/images/switch-gears-3.jpg'.split('/').slice(-1)[0]}
            />
          </picture>
        </Box>
        Our Services
        <Box className='after' />
      </Row>
      <Row className='justify-content-center pt-5'>
        {servicesData.map((item, key) => (
          <ServiceCard
            image={item.image}
            title={item.title}
            desc={item.desc}
            key={key}
          />
        ))}
      </Row>
    </Container>
  );
};

const ServiceCard = (props: { image: string; title: string; desc: string }) => (
  <Col sm={12} md={6} lg={4} className='mb-4'>
    <div className='Service-Card'>
      <div className='w-100 d-flex justify-content-center'>
        <div className='Circle d-flex justify-content-center align-items-center mb-3'>
          <picture>
            <source
              srcSet={props.image.replace(/jpe?g|png/, 'webp')}
              type='image/webp'
            />
            <img src={props.image} alt={props.image.split('/').slice(-1)[0]} />
          </picture>
        </div>
      </div>
      <div className='d-block mt-2 pt-3 w-auto Service-Card-Text'>
        <h5 className='font-weight-bold mb-2'>{props.title}</h5>
        <p className='p-1'>{props.desc}</p>
      </div>
    </div>
  </Col>
);

export default Services;
