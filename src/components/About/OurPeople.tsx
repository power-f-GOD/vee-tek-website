import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from '@material-ui/core/Box';

import us from './ourPeopleData';

const OurPeople = () => (
  <Container
    fluid
    className='OurPeople include-page-header fade-in p-0 pt-2 mt-5'>
    <Row as='h1' className='page-title px-1'>
      <Box className='before'>
        <picture>
          <source srcSet='/images/team/group.webp' type='image/webp' />
          <img
            src='/images/team/group.jpg'
            alt={'/images/team/group.jpg'.split('/').slice(-1)[0]}
          />
        </picture>
      </Box>
      Meet Us
      <Box className='after' />
    </Row>
    <Container className='p-0 text-center'>
      <Col as='h2' className='my-4'>
        Our Teams
      </Col>
      <Col as='p'>
        Across our two companies, our engineering team is made up of competent
        engineers with no less than 30 years hands-on experience in electrical
        engineering. The technical team comprises of engineers, electricians,
        fabricators, welders, operators, mechanics, fitters, surveyor, and more.
        Our plastic production team comprises of experienced electrical,
        mechanical and chemical engineers, a pull of maintenance technicians and
        machine operators. We are also committed to training interns to build
        Nigeria’s talent and capacity for the future.
      </Col>
    </Container>

    <Container className='my-5 p-0'>
      <Row className='mt-md-5 mb-5 justify-content-center'>
        {us.main.map((item, key) => (
          <PersonCard
            image={item.image}
            title={item.title}
            name={item.name}
            key={key}
          />
        ))}
      </Row>
      <Row className='mt-md-5 justify-content-center'>
        {us.others.map((item, key) => (
          <PersonCard
            image={item.image}
            title={item.title}
            name={item.name}
            key={key}
          />
        ))}
      </Row>
    </Container>
  </Container>
);

const PersonCard = (props: { image: string; title: string; name: string }) => (
  <Col xs={10} sm={6} md={4} lg={3} className='p-3 mb-3'>
    <div className='Person-Image-Wrapper text-center mb-2'>
      <picture>
        <source
          srcSet={props.image.replace(/jpe?g|png/, 'webp')}
          type='image/webp'
        />
        <img
          src={props.image}
          className='Person-Image'
          alt={props.image.split('/').slice(-1)[0]}
        />
      </picture>
    </div>
    <div className='text-center'>
      <h5 className='pt-1'>{props.name}</h5>
      <span className='text-secondary'>{props.title}</span>
    </div>
  </Col>
);

export default OurPeople;
