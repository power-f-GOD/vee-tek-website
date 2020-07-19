import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const Footer = () => {
  return (
    <footer>
      <div className='Footer-Wrapper-One text-white'>
        <Container className='text-left'>
          <Row className='m-0'>
            <Col xs={12} as='h4' className='font-weight-bold p-0 mt-4'>
              Reach Us
            </Col>
            <Col sm={6} className='social-media-links-wrapper p-0 mt-4 mb-5'>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </Col>
            <Col sm={6} className='contact-info-container p-0 my-4'>
              <span>
                <EmailIcon /> info@vee-tekgroup.com
              </span>
              <span>
                <PhoneIcon /> +234(0)9032663166 (Plastics)
              </span>
              <span>
                <PhoneIcon /> +234(0)8033244062 (Electricals)
              </span>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='Footer-Wrapper-Two'>
        <Container>&copy; 2020 Vee-Tek Group</Container>
      </div>
    </footer>
  );
};

export default Footer;
