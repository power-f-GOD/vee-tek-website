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

import { NavContext } from '../../App';

const Nav = () => {
  return (
    <Box marginBottom='0'>
      <AppBar position='fixed' className='mobile-width'>
        <TopNavLinks />

        <Container>
          <Toolbar className='nav-toolbar d-flex flex-wrap'>
            <Box component='h5' className='logo font-weight-bold'>
              <Link to='/'>
                {' '}
                <img src='/images/logo.png' alt='Vee-Tek Group logo' /> Vee-Tek
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
  const preventRedirect = (e: any) => e.preventDefault();

  const indexNavLinks = (
    <Row className='m-0'>
      <Col className='nav-link-wrapper p-0 d-flex'>
        <NavLink to='/about' onClick={preventRedirect} className='nav-link'>
          About Us <ExpandMoreIcon />
        </NavLink>

        <Row className='nav-menu flex-column m-0'>
          <Link to='/about/who-we-are'>Who We Are?</Link>
          <Link to='/about/our-people'>Our People</Link>
          <Link to='/about/certificates'>Certificates (Quality Assurance)</Link>
          <Link to='/about/sustainability'>Sustainability Strategy</Link>
        </Row>
      </Col>

      <Col className='nav-link-wrapper p-0 d-flex'>
        <NavLink to='/companies' onClick={preventRedirect} className='nav-link'>
          <span>Our Companies</span> <ExpandMoreIcon />
        </NavLink>

        <Row className='nav-menu flex-column m-0'>
          <Col className='p-0'>
            <Link to='/companies/switch-gears' className='nav-menu-link'>
              Switch-gears Engineering and Manufacturing{' '}
              {/* <ArrowForwardIosIcon fontSize='inherit' /> */}
            </Link>
          </Col>

          <Col className='p-0'>
            <Link to='/companies/pipes-and-fittings' className='nav-menu-link'>
              Pipes and Fittings
              {/* <ArrowForwardIosIcon fontSize='inherit' /> */}
            </Link>
          </Col>
        </Row>
      </Col>

      <Col className='nav-link-wrapper p-0 d-flex'>
        <NavLink to='/events' className='nav-link'>
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

  return (
    <NavContext.Consumer>
      {(pathname: string) => {
        const [index, gears, pipes] = [
          '/',
          '/companies/switch-gears',
          '/companies/pipes-and-fittings'
        ];
        const forIndex = pathname === index;
        const forGears = new RegExp(gears).test(pathname);
        const forPipes = new RegExp(pipes).test(pathname);

        return (
          <>
            {forIndex && indexNavLinks}
            {(forGears || forPipes) && (
              <Row className='m-0'>
                <Col className='nav-link-wrapper p-0 d-flex'>
                  <NavLink
                    to={`${forGears ? gears : pipes}/products`}
                    className='nav-link'>
                    Products
                  </NavLink>
                </Col>
                <Col className='nav-link-wrapper p-0 d-flex'>
                  <NavLink
                    to={`${forGears ? gears : pipes}/services`}
                    className='nav-link'>
                    Services
                  </NavLink>
                </Col>
                {forGears && (
                  <Col className='nav-link-wrapper p-0 d-flex'>
                    <NavLink to={`${gears}/portfolio`} className='nav-link'>
                      Portfolio
                    </NavLink>
                  </Col>
                )}
                <Col className='nav-link-wrapper p-0 d-flex'>
                  {forGears ? (
                    <NavLink to={`${gears}/inquiry`} className='nav-link button'>
                      Make an Inquiry
                    </NavLink>
                  ) : (
                    <NavLink to={`${pipes}/order`} className='nav-link button'>
                      Make an Order
                    </NavLink>
                  )}
                </Col>
              </Row>
            )}
          </>
        );
      }}
    </NavContext.Consumer>
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

export default Nav;
