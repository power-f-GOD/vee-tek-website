import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Typography from '@material-ui/core/Typography';

import portfolioData from './portfolioData';

export interface Data {
  header: string;
  description: string;
  imgUrl: string;
}

const Portfolio = () => {
  return (
    <Container fluid className='Portfolio'>
      <Container fluid className='header-image'></Container>
      <Container>
        <Row as='header' className='mx-0'>
          <Col md={7}>
            <Typography component='h3' variant='h3' className='page-title'>
              Our Portfolio
            </Typography>
          </Col>
          <Col md={5}>
            <Col className='intro-text'>
              <Col as='span' className='quote'>
                "
              </Col>
              Over the years, we have mastered the Switch-gear which is evident
              in some of the works we have executed.
              <br />
              <br />
              Below are some of our clients and various works executed for
              them...
            </Col>
          </Col>
        </Row>
        <br />
        <hr className='separator' />
        <Row as='main' className='mx-0 mb-5'>
          {portfolioData.map((data, key: number) => <Work data={data} key={key} />)}
        </Row>
      </Container>
    </Container>
  );
};

//to do: Add onerror style for images

function Work(props: any) {
  const { data } = props;
  const { header, description, imgUrl }: Data = data;
  const imgAlt = header + ' logo';

  return (
    <Row as='section' className='work mx-0 my-3 debugger w-100 align-content-center'>
      <Col md={6} className='work-image-wrapper p-5'>
        <img src={`/images/portfolio/${imgUrl}`} alt={imgAlt} className='work-image d-inline' />
      </Col>
      <Col md={6} className='work-desc-container align-self-center h-100 p-0'>
        <Col className='work-desc-wrapper p-5'>
          <Typography
            component='h3'
            variant='h3'
            className='work-desc-header mb-2'>
            {header}
          </Typography>
          <Col className='work-desc p-0'>
            {description}
          </Col>
        </Col>
      </Col>
    </Row>
  );
}



export default Portfolio;
