import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Box from '@material-ui/core/Box';

import { PipesIcon, pipesIconsData } from '../../crumbs/Icons';

export const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum optio quo non suscipit accusantium ipsa excepturi totam! Libero repudiandae nemo similique, aspernatur reiciendis harum sunt distinctio quia dolore quas.';

const Main = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className='Overview fade-in'>
      <Row
        as='header'
        className='align-content-center justify-content-center mx-0'>
        <Container className='px-0'>
          <Col as='h1' className=''>
            Vee-Tek Pipes
          </Col>
          <Col>...quality reassured!</Col>
        </Container>
      </Row>

      {/* section 1 */}
      <Container as='section'>
        <Row>
          <Col lg={8} className='my-5'>
            <Row className='heading-container'>
              <Col as='h2' xs={12} className='p-0'>
                PVC Pipes
              </Col>
              <Col as='p' className='rider'>
                Manufacturers of PVC Pipes
              </Col>
            </Row>
            <Col as='p'>
              Vee-Tek manufactures a wide range of pipes of various sizes and
              thickness, all of high tensile strength and high strength to
              weight ratio which enables them absorb various pressure and heat
              ratings. Our pipes are made from 100% virgin material and have an
              exceptional resistance to corrosion or chemical attack. Our
              formula ensures that our pipes have exceptional elasticity that
              prevents brittleness with our conduit pipes being able to bend at
              a 360-degree angle.
            </Col>
          </Col>
          <Col lg={4} className='my-5 text-center'>
            <Col className='animated-cirle'>
              <Col className='text-1'>Durability!</Col>
              <Col className='text-2'>Reliability!</Col>
              <Col className='text-3'>Quality!</Col>
            </Col>
          </Col>
        </Row>
      </Container>

      {/* section 3 */}
      <Row as='section'>
        <Container>
          <Row className='my-3'>
            <Col xs={12} className='heading-container text-center'>
              <Col as='h2' xs={12} className='p-0'>
                PVC Applications
              </Col>
              <Col as='p' className='rider'>
                Our PVC Pipes can be applied in the following:
              </Col>
            </Col>
            <Row className='my-5'>
              {pipesIconsData.map(({ url, desc }) => (
                <Col sm={6} md={4} className='my-5 text-center' key={url}>
                  <Col xs={12}>
                    <PipesIcon url={url} />
                  </Col>
                  <Col as='p' className='desc'>{desc}</Col>
                </Col>
              ))}
            </Row>
          </Row>
        </Container>
      </Row>
    </Box>
  );
};

export default Main;
