import React from 'react';

import { Container, Row } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
  return (
    <footer>
      <div className='Footer-Wrapper-One text-white'>
        <Container className='text-left p-4'>
          <h3 className='font-weight-bold'> Reach Us</h3>
          <Row className='social-media-links-wrapper mt-2 mx-0'>
            <FacebookIcon className='pr-2' />
            <TwitterIcon className='pr-2' />
            <InstagramIcon className='pr-2' />
            <YouTubeIcon className='pr-2' />
          </Row>
        </Container>
      </div>
      <div className='Footer-Wrapper-Two'>
        <Container>© 2020 Vee-Tek Group</Container>
      </div>
    </footer>
  );
};

export default Footer;
