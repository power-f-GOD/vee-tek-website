import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

const WhoWeAre = () => (
  <Container
    as='main'
    fluid
    className='WhoWeAre fade-in include-page-header p-0'>
    <Row as='h1' className='page-title'>
      <Box className='before'>
        <picture>
          <source srcSet='/images/who-we-are-one.webp' type='image/webp' />
          <img
            src='/images/who-we-are-one.jpg'
            alt={'/images/who-we-are-one.jpg'.split('/').slice(-1)[0]}
          />
        </picture>
      </Box>
      About Us
      <Box className='after' />
    </Row>
    <Container className='px-0 pt-2 pb-5'>
      <Row className='mx-0'>
        <Col sm={12} md={8} className='my-5 px-0 order-sm-1 order-md-0'>
          <Col as='h2' className='mb-4'>
            Our History
          </Col>
          <Col as='p'>
            Vee-Tek Nigeria Limited was registered in 1991 as an indigenous
            electrical engineering company primarily engaged in the design,
            construction and manufacturing of medium-voltage switch gears and
            general electrical engineering services, particularly heavy power
            installations such as transmission lines and injection substations.
            We maintain technical R&amp;D partnerships with{' '}
            <a href='http://www.pronutec.com/'>Pronutec</a> and{' '}
            <a href='http://www.telergon.es/'>Telergon</a> whose switchgear
            products we equally distribute. We later expanded into pipe
            manufacturing in 2015, making top-quality PVC conduit, pressure,
            waste pipes and fittings at affordable prices. In the three decades
            since our inception, we have served clients in Federal and State
            governments, the power sector, oil and gas companies, private and
            corporate organisations, other manufacturing firms, and people like
            you and I who are building and living in homes for our future. We
            are committed to Quality, Innovation and Service.
          </Col>
        </Col>
        <Col
          as='p'
          sm={12}
          md={4}
          className='align-self-center order-sm-0 order-md-1 text-center pt-4 pb-5'>
          <picture>
            <source srcSet='/images/logos/logo-192.webp' type='image/webp' />
            <img
              className='rounded-circle logo-img'
              src='/images/logos/logo-192.png'
              alt={
                'Vee-Tek Group' +
                '/images/logos/logo-192.png'.split('/').slice(-1)[0]
              }
            />
          </picture>
        </Col>
      </Row>
    </Container>
    <Box className='my-5 include-page-header second' position='relative'>
      <Row as='h2' className='page-title'>
        <Box className='before'>
          <picture>
            <source srcSet='/images/who-we-are-two.webp' type='image/webp' />
            <img
              src='/images/who-we-are-two.jpg'
              alt={'/images/who-we-are-two.jpg'.split('/').slice(-1)[0]}
            />
          </picture>
        </Box>
        Our Clients
        <Box className='after' />
      </Row>
    </Box>
    <Container className='pt-4 pb-5'>
      <Col as='h3' className='mb-4'>
        We've Served
      </Col>
      <Col as='p'>
        We are proud to have served the following companies, organizations and
        more.{' '}
        <Link to='/companies/switchgears/portfolio'>See our portfolio</Link>.
      </Col>

      <Row className='mx-0 mt-4'>
        {[
          { title: 'Enugu State Government', image: 'enugu' },
          { title: 'Nigerian Breweries', image: 'nbp' },
          { title: 'Niger Delta Power Holding Company', image: 'ndphc' },
          { title: 'NNigeria LNG', image: 'nlng' },
          { title: 'Shell Petroleum Development Company', image: 'shell' },
          { title: 'EEDC', image: 'eedc' },
          { title: 'Nigerian Televison Authority', image: 'nta' },
          {
            title: 'Anambra-Imo River Basin Development Authority',
            image: 'arda'
          },
          {
            title: 'University of Nigeria, Nsukka',
            image: 'unn'
          }
        ].map((client, _) => (
          <Tooltip title={client.title} key={_}>
            <Col xs={6} sm={3} md={2} className='text-center'>
              <div
                className={`d-inline-block m-2 my-4 Client-Image-${client.image}`}></div>
            </Col>
          </Tooltip>
        ))}
      </Row>
    </Container>
  </Container>
);
export default WhoWeAre;
