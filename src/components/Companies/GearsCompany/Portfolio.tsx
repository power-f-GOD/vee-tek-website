import React, { useCallback, useRef, useEffect } from 'react';

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
    <Container fluid className='Portfolio debugger'>
      <Container fluid className='header-image'></Container>
      <Container className='p-0'>
        <Row as='header' className='mx-0'>
          <Col md={7} className='d-block'>
            <Typography component='h3' variant='h3' className='page-title'>
              Our Portfolio
            </Typography>
            <Col className='rider-texts-wrapper p-0 d-inline-block'>
              <Col as='p' className='rider-text'>
                <span>"Some nice rider text beneath!"</span>
                <br />- Scott
              </Col>
              <Col as='p' className='rider-text'>
                <span>"Another nice rider text beneath!"</span>
                <br />- Smith
              </Col>
              <Col as='p' className='rider-text'>
                <span>"And a third nice rider text beneath!"</span>
                <br />- Jane
              </Col>
            </Col>
          </Col>
          <Col md={5} className=''>
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
          {portfolioData.map((data, key: number) => (
            <Work data={data} key={key} />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

function Work(props: any) {
  const _work = useRef() as any;
  const work = _work.current;
  const { data } = props;
  const { header, description, imgUrl }: Data = data;
  const imgAlt = header + ' logo';

  const hideImageElementOnError = useCallback(
    (e: any) => {
      const img = e.target;
      const noImg = e.target.nextElementSibling;

      img.style.display = 'none';
      noImg.textContent = header[0].toUpperCase();
      noImg.style.display = 'inline-flex';
    },
    [header]
  );

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const threshold = windowHeight * 0.8;

    if (work) {
      const animateChildren = () => {
        const { top } = work.getBoundingClientRect();

        if (top < windowHeight + 200) {
          if (top < threshold) {
            work.classList.add('animate');
          } else if (top >= threshold) {
            work.classList.remove('animate');
          }
        }
      };

      document.body.addEventListener('scroll', animateChildren);

      // call function initiallly in case element passes threshold on page load
      animateChildren();
    }
  }, [work]);

  return (
    <section
      ref={_work}
      className='work row d-flex mx-0 my-3 debugger w-100 align-content-center'>
      <Col md={6} className='work-image-wrapper'>
        <img
          src={`/images/portfolio/${imgUrl}`}
          alt={imgAlt}
          className='work-image'
          onError={hideImageElementOnError}
        />
        <Col as='span' className='no-image-placeholder work-image' />
      </Col>
      <Col md={6} className='work-desc-container align-self-center h-100 p-0'>
        <Col className='work-desc-wrapper'>
          <Typography
            component='h3'
            variant='h3'
            className='work-desc-header mb-2'>
            {header}
          </Typography>
          <Col className='work-desc p-0'>{description}</Col>
        </Col>
      </Col>
    </section>
  );
}

export default Portfolio;
