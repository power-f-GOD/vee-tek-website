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
      About Us
    </Row>
    <Container className='px-0 pt-4 pb-5'>
      <Row className='mx-0'>
        <Col sm={12} className='mb-4 px-0'>
          <Col as='h2' className='mb-4'>
            Our History
          </Col>
          <Col as='p'>
            Vee-Tek Nigeria Limited was registered in 1991 as an indigenous
            electrical engineering company primarily engaged in the design,
            construction and manufacturing of medium-voltage switch gears and
            general electrical engineering services, particularly heavy power
            installations such as transmission lines and injection substations.
            We maintain technical R&D partnerships with{' '}
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
        <Col as='p' md={4} className='align-self-center text-center py-5'>
          <img
            className='rounded-circle'
            src='/images/logos/logo-192.png'
            alt='Vee-Tek Group'
          />
        </Col>
      </Row>
    </Container>
    <Box className='my-5 include-page-header second' position='relative'>
      <Row as='h2' className='page-title'>
        Our Clients
      </Row>
    </Box>
    <Container className='pt-4 pb-5'>
      <Col as='h2' className='mb-4'>
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
              <div className={`d-inline-block m-2 my-4 Client-Image-${client.image}`}></div>
            </Col>
          </Tooltip>
        ))}
      </Row>
    </Container>
  </Container>
);
export default WhoWeAre;
