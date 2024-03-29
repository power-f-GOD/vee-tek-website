import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Row className='Home fade-in m-0'>
      <Col md={5} className='splash-wrapper'>
        <Container fluid className='splash-container'>
          <Row className='splash-links-container align-items-center text-center m-0'>
            <Col>
              <Col md={12} className='splash-logo'>
                <picture>
                  <source
                    srcSet='/images/logos/logo-192.webp'
                    type='image/webp'
                  />
                  <img
                    src='/images/logos/logo-192.png'
                    alt={
                      'Logo ' +
                      '/images/logos/logo-192.png'.split('/').slice(-1)[0]
                    }
                  />
                </picture>
                <Col>
                  <Col as='h1' className='d-inline-block mt-4 p-0'>
                    Vee-Tek Group
                  </Col>
                </Col>
              </Col>
              <Col className='p-0'>
                <Col className='social-media-links-wrapper d-flex justify-content-between'>
                  <a
                    href='https://facebook.com/veetekgroup'
                    rel='noopener noreferrer'
                    target='_blank'>
                    <FacebookIcon />{' '}
                  </a>
                  <a
                    href='https://twitter.com/veetekgroup'
                    rel='noopener noreferrer'
                    target='_blank'>
                    <TwitterIcon />
                  </a>
                  <a
                    href='https://instagram.com/veetekgroup'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <InstagramIcon />{' '}
                  </a>
                  <a
                    href='https://www.youtube.com/channel/UCflyiiyltpkWsV6EyxuvMhw'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <YouTubeIcon />
                  </a>
                </Col>
              </Col>
            </Col>
          </Row>
        </Container>
      </Col>
      <Col
        md={12}
        className='description-wrapper align-items-center d-flex p-0'>
        <Col className='home-background-img'>
          <picture>
            <source srcSet='/images/switch-gears-4.webp' type='image/webp' />
            <img
              src='/images/switch-gears-4.jpg'
              alt={
                'Background ' +
                '/images/switch-gears-4.jpg'.split('/').slice(-1)[0]
              }
            />
          </picture>
        </Col>
        <Col className='home-background-img'>
          <picture>
            <source srcSet='/images/pipes-1.webp' type='image/webp' />
            <img
              src='/images/pipes-1.jpg'
              alt={'Background ' + '/images/pipes-1.jpg'.split('/').slice(-1)[0]}
            />
          </picture>
        </Col>

        <Container>
          <Col
            sm={10}
            md={6}
            className='description-container ml-auto text-right'>
            <Col className='company-desc-container'>
              <Col as='h2'>Pipes and Fittings</Col>
              <Col className='desc'>
                Vee-Tek pipes and fittings are a product of materials of the
                highest grade, tried-and-tested formulas, world-class equipment
                and constant innovation. Our pipes help build infrastructure for
                the future. Quality makes us #1.
              </Col>
              <Link to='/companies/pipes-and-fittings' className='cta-link'>
                Goto Pipes and Fittings
              </Link>
            </Col>
            <Col className='company-desc-container'>
              <Col as='h2'>Switchgears &amp; Electrical Engineering</Col>
              <Col className='desc'>
                We are transforming lives by building infrastructure to
                distribute power across the federation. Our Switchgears and
                Electrical Engineering services come with decades of experience,
                training and engineering innovation.
              </Col>
              <Link to='/companies/switchgears' className='cta-link'>
                Goto Switchgears
              </Link>
            </Col>
          </Col>
        </Container>
      </Col>
    </Row>
  );
};

export default Home;
