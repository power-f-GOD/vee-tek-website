import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';

const Header = () => {
  return (
    <Box marginBottom='8rem'>
      <AppBar position='fixed' className='mobile-width'>
        <Box className='top-nav-links-wrapper'>
          <Container>
            <Grid container justify='space-between' alignItems='center'>
              <Grid item>
                <EmailIcon /> vee-tek@vee-tek-group.com | <PhoneIcon />{' '}
                +2341234567890
              </Grid>
              <Grid item className='social-media-links-wrapper'>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <YouTubeIcon />
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container>
          <Toolbar className='nav-toolbar'>
            <Link to='/' className=''>
              <Box component='h5' className='logo font-weight-bold'>
                <img src='images/logo.png' alt='Vee-Tek Group logo' /> Vee-Tek Group
              </Box>
            </Link>

            <Box className='nav-links-wrapper app-bar-links'>
              <NavLinks />
            </Box>

            <TemporaryDrawer>
              <NavLinks />
            </TemporaryDrawer>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

function NavLinks() {
  return (
    <>
      <NavLink to='/about' className='nav-link'>
        About Us <ExpandMoreIcon />
        <Grid container className='nav-link-menu' direction='column'>
          <Link to='#!'>Who We Are?</Link>
          <Link to='#!'>Our People</Link>
          <Link to='#!'>Certificates (Quality Assurance)</Link>
          <Link to='#!'>Sustainability Strategy</Link>
        </Grid>
      </NavLink>
      <NavLink to='/companies' className='nav-link'>
        Our Companies <ExpandMoreIcon />
        <Grid container className='nav-link-menu' direction='column'>
          <Link to='#!' className='nav-link-sub-menu'>
            Switch-gears Engineering and Manufacturing{' '}
            <ArrowForwardIosIcon fontSize='inherit' />
            <Grid
              container
              className='nav-link-menu sub-menu'
              direction='column'>
              <Link to='#!'>Our Projects</Link>
              <Link to='#!'>Our Products</Link>
            </Grid>
          </Link>
          <Link to='#!'>
            Pipes and Fittings <ArrowForwardIosIcon fontSize='inherit' />
            <Grid
              container
              className='nav-link-menu sub-menu'
              direction='column'>
              <Link to='#!'>Our Products</Link>
            </Grid>
          </Link>
        </Grid>
      </NavLink>
      <NavLink to='/blog' className='nav-link'>
        News and Events
      </NavLink>
      <NavLink to='/gallery' className='nav-link'>
        Gallery
      </NavLink>
      <NavLink to='/contact' className='nav-link'>
        Contact Us
      </NavLink>
    </>
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
