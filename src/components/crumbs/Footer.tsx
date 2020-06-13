import React from 'react';
import '../../styles/index.min.css';
import { Container } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Grid from '@material-ui/core/Grid';

const Footer = () => {
  return (
    <footer className='fade-in'>
      <div className='Footer-Wrapper-One text-white'>
        <Container className='text-left p-4'>
          <h3 className='font-weight-bold'> Follow Us</h3>
          <Grid item className='social-media-links-wrapper mt-2'>
            <FacebookIcon className='pr-2' />
            <TwitterIcon className='pr-2' />
            <InstagramIcon className='pr-2' />
            <YouTubeIcon className='pr-2' />
          </Grid>
        </Container>
      </div>
      <div className='Footer-Wrapper-Two'>
        <Container>© 2020 Vee-Tek Group</Container>
      </div>
    </footer>
  );
};

export default Footer;
