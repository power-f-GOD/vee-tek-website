import React, { useContext } from 'react';
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
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import { userDeviceIsMobile } from '../..';
import { NavContext } from '../../App';

export interface BreadCrumbsData {
  href: string;
  title: string;
}

const Nav = () => {
  return (
    <Box component='nav' marginBottom='0'>
      <ElevationScroll>
        <AppBar
          position='fixed'
          className={userDeviceIsMobile ? 'mobile-width' : ''}>
          <TopNavLinks />

          <Container className='nav-toolbar-container'>
            <Toolbar className='nav-toolbar d-flex flex-wrap'>
              <Box component='h5' className='logo font-weight-bold'>
                <NavLink
                  to='/'
                  exact
                  isActive={(_, location) =>
                    /^\/(.+-gears|.+-fittings)?$/.test(location.pathname)
                  }>
                  {' '}
                  <img
                    src='/images/logos/logo-64.png'
                    alt='Vee-Tek Group logo'
                  />{' '}
                  Vee-Tek Group
                </NavLink>
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

          <BreadCrumbs />
        </AppBar>
      </ElevationScroll>
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
      <Col className='nav-link-wrapper p-0'>
        <NavLink to='/about' onClick={preventRedirect} className='nav-link'>
          About Us <ExpandMoreIcon />
        </NavLink>

        <Row className='nav-menu flex-column m-0'>
          <Link to='/about/who-we-are'>Who We Are</Link>
          <Link to='/about/our-people'>Our People</Link>
          <Link to='/about/certificates'>Certificates (Quality Assurance)</Link>
          <Link to='/about/sustainability'>Sustainability Strategy</Link>
        </Row>
      </Col>

      <Col className='nav-link-wrapper p-0'>
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

      <Col className='nav-link-wrapper p-0'>
        <NavLink to='/news' onClick={preventRedirect} className='nav-link'>
          <span>News</span> <ExpandMoreIcon />
        </NavLink>

        <Row className='nav-menu flex-column m-0'>
          <Col className='p-0'>
            <Link to='/news/company-news' className='nav-menu-link'>
              Company News
            </Link>
          </Col>

          <Col className='p-0'>
            <Link to='/news/industry-news' className='nav-menu-link'>
              Industry News
            </Link>
          </Col>

          <Col className='p-0'>
            <Link to='/news/educational-packs' className='nav-menu-link'>
              Educational Packs
            </Link>
          </Col>
        </Row>
      </Col>
      <Col className='nav-link-wrapper p-0'>
        <NavLink to='/gallery' className='nav-link'>
          Gallery
        </NavLink>
      </Col>
      <Col className='nav-link-wrapper p-0'>
        <NavLink to='/contact' className='nav-link'>
          Contact Us
        </NavLink>
      </Col>
    </Row>
  );

  return (
    <NavContext.Consumer>
      {(pathname: string) => {
        const [gears, pipes] = [
          '/companies/switch-gears',
          '/companies/pipes-and-fittings'
        ];
        const forIndex = !new RegExp(`${gears}|${pipes}`).test(pathname);
        const forGears = new RegExp(gears).test(pathname);
        const forPipes = new RegExp(pipes).test(pathname);

        return (
          <>
            {forIndex && indexNavLinks}
            {(forGears || forPipes) && (
              <Row className='m-0'>
                <Col className='nav-link-wrapper p-0'>
                  <NavLink
                    to={`${forGears ? gears : pipes}/products`}
                    className='nav-link'>
                    Products
                  </NavLink>
                </Col>
                {forGears && (
                  <Col className='nav-link-wrapper p-0'>
                    <NavLink to={`${gears}/services`} className='nav-link'>
                      Services
                    </NavLink>
                  </Col>
                )}
                {forGears && (
                  <Col className='nav-link-wrapper p-0'>
                    <NavLink to={`${gears}/portfolio`} className='nav-link'>
                      Portfolio
                    </NavLink>
                  </Col>
                )}
                <Col className='nav-link-wrapper p-0'>
                  {forGears ? (
                    <NavLink
                      to={`${gears}/inquiry`}
                      className='nav-link button contained'>
                      <span className='long-desc'>Make an Inquiry</span>
                      <span className='short-desc'>Inquire</span>
                    </NavLink>
                  ) : (
                    <NavLink
                      to={`${pipes}/order`}
                      className='nav-link button contained'>
                      <span className='long-desc'>Place an Order</span>
                      <span className='short-desc'>Order</span>
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

function BreadCrumbs() {
  const navState = useContext(NavContext);
  // const { links, current } = props;
  let history = '';
  const links: BreadCrumbsData[] = navState.split('/').map((link) => {
    let title = '';

    switch (true) {
      case /switch/.test(link):
        title = 'Switchgears Company';
        break;
      case /pipes/.test(link):
        title = 'Pipes Company';
        break;
      default:
        title = link
          .split('-')
          .map((word) =>
            word && !/^(and|on|in|of|with)$/.test(word)
              ? word[0].toUpperCase() + word.slice(1)
              : word
          )
          .join(' ');
    }
    history += history.slice(-1) === '/' ? link : '/' + link;

    return { href: history, title: link === '' ? 'Vee-Tek Group' : title };
  });

  return (
    <Box component='section' className='breadcrumbs-wrapper'>
      <Box
        className={`breadcrumbs-container ${navState === '/' ? 'hide' : ''}`}>
        <Breadcrumbs aria-label='breadcrumb'>
          {links
            .slice(0, -1)
            .filter((link) => !/^(\/companies|\/about|\/news)$/.test(link.href))
            .map(({ href, title }: BreadCrumbsData, key: number) => (
              <Link to={href} key={key}>
                {title}
              </Link>
            ))}
          <Box component='span' className='current'>
            {links.slice(-1)[0].title}
          </Box>
        </Breadcrumbs>
      </Box>
    </Box>
  );
}

function ElevationScroll(props: { children: React.ReactElement }) {
  const { children } = props;

  let trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 5,
    target: window
  });

  return React.cloneElement(children, {
    className: trigger
      ? userDeviceIsMobile
        ? 'mobile-width hide-mini-nav'
        : 'hide-mini-nav'
      : 'mobile-width'
  });
}

export default Nav;
