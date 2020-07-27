import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import { NavContext } from '../../App';
import NavLinks from './Nav.NavLinks';
import TopNavLinks from './Nav.TopNavLinks';

const DrawerContext = React.createContext<any>(null);

export interface BreadCrumbsData {
  href: string;
  title: string;
}

const Nav = () => {
  const [drawerIsOpen, toggleDrawerIsOpen] = React.useState(false);

  return (
    <Box component='nav' marginBottom='0'>
      <ElevationScroll>
        <AppBar position='fixed'>
          <TopNavLinks />

          <Container className='nav-toolbar-container'>
            <Toolbar className='nav-toolbar d-flex flex-wrap'>
              <Box component='h5' className='logo font-weight-bold'>
                <NavLink
                  to='/'
                  exact
                  // isActive={(_, location) =>
                  //   /^\/(.+-gears|.+-fittings)?$/.test(location.pathname)
                  // }
                >
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

              <DrawerContext.Provider value={drawerIsOpen}>
                <TemporaryDrawer toggleDrawerIsOpen={toggleDrawerIsOpen}>
                  <NavLinks toggleDrawerIsOpen={toggleDrawerIsOpen} />
                  <TopNavLinks toggleDrawerIsOpen={toggleDrawerIsOpen} />
                </TemporaryDrawer>
              </DrawerContext.Provider>
            </Toolbar>
          </Container>

          <BreadCrumbs />
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};

function TemporaryDrawer(props: any) {
  const { children, toggleDrawerIsOpen } = props;
  const open = useContext(DrawerContext);

  // const [open, setOpen] = React.useState(Boolean);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event?.type === 'keydown' &&
      ((event as React.KeyboardEvent)?.key === 'Tab' ||
        (event as React.KeyboardEvent)?.key === 'Shift')
    )
      return;

    toggleDrawerIsOpen(open);
  };

  window.onpopstate = () => toggleDrawerIsOpen(false);

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
        {children}
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
      // case /switch/.test(link):
      //   title = 'Switchgears Company';
      //   break;
      // case /pipes/.test(link):
      //   title = 'Pipes Company';
      //   break;
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
          <Box component='span' className='text-bold'>
            {links.slice(-1)[0].title}
          </Box>
        </Breadcrumbs>
      </Box>
    </Box>
  );
}

function ElevationScroll(props: { children: React.ReactElement }) {
  const navState = useContext(NavContext);
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 5,
    target: window
  });
  const isLanding = /(fittings)$/.test(navState);

  const [atTop, setAtTop] = React.useState<boolean>(true);

  window.addEventListener('scroll', () => {
    setAtTop(window.scrollY < 5);
  });

  return React.cloneElement(children, {
    className: `${navState === '/' ? 'for-home' : ''} ${
      isLanding && atTop ? 'for-home' : ''
    } ${trigger ? 'hide-mini-nav' : ''} `
  });
}

export default Nav;
