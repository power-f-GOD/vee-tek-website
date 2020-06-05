import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';

const Header = () => {
  return (
    <Box marginBottom='0'>
      <AppBar position='fixed' className='mobile-width'>
        <TopNavLinks />

        <Container>
          <Toolbar className='nav-toolbar d-flex flex-wrap'>
            <Box component='h5' className='logo font-weight-bold'>
              <Link to='/'>
                {' '}
                <img src='images/logo.png' alt='Vee-Tek Group logo' /> Vee-Tek
                Group
              </Link>
            </Box>

            <Box className='nav-links-wrapper app-bar-links'>
              <NavLinks />
            </Box>

            <TemporaryDrawer>
              <NavLinks />
              <TopNavLinks />
            </TemporaryDrawer>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

function TopNavLinks() {
  return (
    <Box className='top-nav-box'>
      <Container>
        <Row className='top-nav-wrapper'>
          <Col>
            <span>
              <EmailIcon /> vee-tek@vee-tek-group.com
            </span>{' '}
            <span>
              <PhoneIcon /> +2341234567890
            </span>
          </Col>
          <Col className='social-media-links-wrapper d-flex justify-content-between'>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </Col>
        </Row>
      </Container>
    </Box>
  );
}

function NavLinks() {
  return (
    <Row className='m-0'>
      <Col className='nav-link-wrapper p-0 d-flex'>
        <NavLink to='/about' className='nav-link'>
          About Us <ExpandMoreIcon />
        </NavLink>

        <Row className='nav-menu flex-column m-0'>
          <Link to='#!'>Who We Are?</Link>
          <Link to='#!'>Our People</Link>
          <Link to='#!'>Certificates (Quality Assurance)</Link>
          <Link to='#!'>Sustainability Strategy</Link>
        </Row>
      </Col>

      <Col className='nav-link-wrapper p-0 d-flex'>
        <NavLink to='/companies' className='nav-link'>
          <span>Our Companies</span> <ExpandMoreIcon />
        </NavLink>

        <Row className='nav-menu flex-column m-0'>
          <Col className='p-0'>
            <Link to='#!' className='nav-menu-link'>
              Switch-gears Engineering and Manufacturing{' '}
              {/* <ArrowForwardIosIcon fontSize='inherit' /> */}
            </Link>

            {/* <Row className='nav-menu sub-menu flex-column m-0'>
              <Link to='#!'>Our Projects</Link>
              <Link to='#!'>Our Products</Link>
            </Row> */}
          </Col>

          <Col className='p-0'>
            <Link to='#!' className='nav-menu-link'>
              Pipes and Fittings 
              {/* <ArrowForwardIosIcon fontSize='inherit' /> */}
            </Link>

            {/* <Row className='nav-menu sub-menu flex-column m-0'>
              <Link to='#!'>Our Products</Link>
            </Row> */}
          </Col>
        </Row>
      </Col>

      <Col className='nav-link-wrapper p-0 d-flex'>
        <NavLink to='/blog' className='nav-link'>
          News and Events
        </NavLink>
      </Col>
      <Col className='nav-link-wrapper p-0 d-flex'>
        <NavLink to='/gallery' className='nav-link'>
          Gallery
        </NavLink>
      </Col>
      <Col className='nav-link-wrapper p-0 d-flex'>
        <NavLink to='/contact' className='nav-link'>
          Contact Us
        </NavLink>
      </Col>
    </Row>
  );
}

function TemporaryDrawer(props: any) {
  const [open, setOpen] = React.useState(Boolean);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event?.type === 'keydown' &&
      ((event as React.KeyboardEvent)?.key === 'Tab' ||
        (event as React.KeyboardEvent)?.key === 'Shift')
    )
      return;

    setOpen(open);
  };

  return (
    <Box className='drawer'>
      <IconButton
        edge='start'
        className='menu-button'
        color='inherit'
        onClick={toggleDrawer(true)}
        aria-label='menu'>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        className='drawer-nav'
        anchor='right'
        open={open}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}>
        {props.children}
      </SwipeableDrawer>
    </Box>
  );
}

export default Header;
