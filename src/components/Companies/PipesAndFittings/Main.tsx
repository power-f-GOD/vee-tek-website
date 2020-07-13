import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Box from '@material-ui/core/Box';

let lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum optio quo non suscipit accusantium ipsa excepturi totam! Libero repudiandae nemo similique, aspernatur reiciendis harum sunt distinctio quia dolore quas.';

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

      {/* section 1 */}
      <Container as='section'>
        <Row>
          <Col md={8} className='my-5'>
            <Row className='heading-container'>
              <Col as='h2' xs={12} className='p-0'>
                PVC
              </Col>
              <Col as='span'>{lorem.slice(0, 30).toUpperCase()}</Col>
            </Row>
            <Col as='p'>
              {lorem} {lorem}
            </Col>
          </Col>
          <Col md={4} className='my-5'>
            <img src='/images/pipes-fittings.png' alt='Pipes and fittings' />
          </Col>
        </Row>
      </Container>

      {/* section 2 */}
      <Row as='section' className='section-with-bg'>
        <Container>
          <Row>
            <Col xs={12} className='heading-container my-5'>
              <Col as='h2' className='text-center'>
                PVC
              </Col>
              <Col className='text-center'>
                {lorem.slice(0, 20).toUpperCase()}
              </Col>
              <Col as='p' className='mt-5'>
                {lorem}
              </Col>
            </Col>
            <Row className='mt-2 mb-3'>
              {Array(6)
                .fill('')
                .map((_, i) => (
                  <Col md={4} className='my-3' key={i}>
                    <Col as='h3' className='sub-section-heading mb-2'>
                      {lorem.slice(0, 20).toUpperCase()}
                    </Col>
                    <Col as='p'>{lorem.slice(0, lorem.indexOf('!'))}</Col>
                  </Col>
                ))}
            </Row>
          </Row>
        </Container>
      </Row>

      {/* section 3 */}
      <Row as='section'>
        <Container>
          <Row className='my-3'>
            <Col xs={12} className='heading-container text-center'>
              <Col as='h2' xs={12} className='p-0'>
                PVC
              </Col>
              <Col as='p'>{lorem.slice(0, 20).toUpperCase()}</Col>
            </Col>
            <Row className='my-5'>
              {Array(6)
                .fill('')
                .map((_, i) => (
                  <Col md={4} className='my-4 text-center' key={i}>
                    <Col xs={12}>
                      <Icon
                        color1='rgb(115, 70, 15)'
                        color2='rgb(165, 115, 65)'
                      />
                    </Col>
                    <Col as='p'>{lorem.slice(0, 20).toUpperCase()}</Col>
                  </Col>
                ))}
            </Row>
          </Row>
        </Container>
      </Row>

      {/* section 4 */}
      <Container as='section' className='last-section'>
        {Array(2)
          .fill('')
          .map((_, i) => (
            <Row className={`pb-5 ${i === 0 ? 'mt-2 mb-5' : 'my-5'}`} key={i}>
              <Col
                md={6}
                className={`heading-container my-5 ${
                  i % 2 === 0 ? 'text-right' : 'text-left order-1'
                }`}>
                <Col as='h2'>PVC</Col>
                <Col as='span'>{lorem.slice(0, 20).toUpperCase()}...</Col>
              </Col>
              <Col
                md={6}
                className={`my-5 ${
                  i % 2 === 0 ? 'text-left order-1' : 'text-right'
                }`}>
                {lorem} {lorem}
              </Col>
            </Row>
          ))}
      </Container>
    </Box>
  );
};

function Icon(props: { color1: string; color2: string }) {
  const { color1, color2 } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      id='Layer_1'
      x='0px'
      y='0px'
      width='115px'
      height='115px'
      viewBox='0 0 115 115'
      enableBackground='new 0 0 115 115'
      className='attachment-full size-full style-svg replaced-svg svg-replaced-2'>
      <path
        fill={color2}
        d='M55.27,47.518v-4.91h3.51c1.16,0,2.109-0.95,2.109-2.11c0-0.22-0.04-0.44-0.1-0.64  c1.57-0.56,3.02-1.45,4.25-2.63c3.06-2.95,4.32-7.35,3.3-11.47c-0.18-0.73-0.74-1.31-1.46-1.52c-4.09-1.17-8.53-0.07-11.58,2.88  c-0.86,0.83-1.58,1.77-2.14,2.79c-0.56-1.02-1.28-1.96-2.14-2.79c-3.06-2.95-7.49-4.05-11.58-2.88c-0.72,0.21-1.28,0.79-1.46,1.52  c-1.02,4.12,0.24,8.52,3.29,11.47c1.24,1.18,2.69,2.07,4.26,2.63c-0.06,0.2-0.1,0.42-0.1,0.64c0,1.16,0.95,2.11,2.11,2.11h3.51v4.91  H55.27z M50.43,36.298c-2.26,0.26-4.56-0.5-6.23-2.11c-1.66-1.6-2.51-3.88-2.33-6.15c2.26-0.25,4.56,0.51,6.22,2.12  C49.76,31.758,50.6,34.028,50.43,36.298z M62.12,34.188c-1.67,1.61-3.97,2.37-6.23,2.11c-0.17-2.27,0.67-4.54,2.34-6.14  c1.659-1.61,3.96-2.37,6.229-2.12C64.63,30.308,63.79,32.588,62.12,34.188z'></path>
      <g>
        <g>
          <path
            fill={color1}
            d='M42.135,46.574c-1.162,0.002-2.103,0.946-2.103,2.107v0.682h-9.865c-1.164,0-2.107,0.944-2.107,2.107    v7.728c0,1.163,0.943,2.107,2.107,2.107h9.865v0.821c0,0.561,0.223,1.098,0.62,1.492c0.396,0.395,0.931,0.617,1.489,0.617h0.004    l22.041-0.057c1.16-0.003,2.102-0.946,2.102-2.107v-0.767h6.787v6.457c-1.076,0.092-1.923,0.996-1.923,2.099    c0,1.163,0.944,2.107,2.107,2.107h11.574c1.164,0,2.107-0.944,2.107-2.107c0-1.103-0.847-2.007-1.923-2.099l0,0v-8.564    c0-5.423-4.412-9.835-9.835-9.835h-8.896v-0.736c0-0.561-0.223-1.098-0.619-1.492c-0.396-0.395-0.931-0.561-1.489-0.561    l-0.005-0.056L42.135,46.574z M40.033,57.092h-7.758v-3.513h7.758V57.092z M62.072,59.971l-17.825,0.046v-9.232l17.825-0.045    V59.971z M80.803,67.755H77.29v-6.583c0-2.25-1.831-4.08-4.081-4.08h-6.922v-3.513h8.896c3.099,0,5.62,2.521,5.62,5.621V67.755z     M80.803,67.755'></path>
        </g>
        <path
          fill={color2}
          d='M81.043,75.234c-0.289-0.856-1.092-1.433-1.996-1.433s-1.708,0.576-1.998,1.433l-3.259,9.667   c-0.568,1.689-0.287,3.561,0.751,5.008c1.04,1.446,2.725,2.311,4.506,2.311c1.779,0,3.464-0.864,4.504-2.311   c1.038-1.448,1.32-3.318,0.751-5.008L81.043,75.234z M80.127,87.451c-0.12,0.166-0.464,0.553-1.08,0.553   c-0.617,0-0.962-0.387-1.082-0.553c-0.119-0.168-0.375-0.618-0.18-1.202l1.262-3.742l1.262,3.742   C80.505,86.833,80.247,87.283,80.127,87.451L80.127,87.451z M80.127,87.451'></path>
      </g>
    </svg>
  );
}

export default Main;
