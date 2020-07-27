import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { NavContext } from '../../App';

function NavLinks({ toggleDrawerIsOpen }: { toggleDrawerIsOpen?: Function }) {
  const pathname = React.useContext(NavContext);
  const [gears, pipes] = [
    '/companies/switchgears',
    '/companies/pipes-and-fittings'
  ];
  const forIndex = !new RegExp(`${gears}|${pipes}`).test(pathname);
  const forGears = new RegExp(gears).test(pathname);
  const forPipes = new RegExp(pipes).test(pathname);

  const preventRedirect = React.useCallback((e: any) => e.preventDefault(), []);

  const handleSetDrawerIsOpen = React.useCallback(() => {
    if (toggleDrawerIsOpen) toggleDrawerIsOpen(false);
  }, [toggleDrawerIsOpen]);

  const indexNavLinks = (
    <Row className='m-0'>
      <Col className='nav-link-wrapper p-0'>
        <NavLink to='/about' onClick={preventRedirect} className='nav-link'>
          About Us <ExpandMoreIcon />
        </NavLink>

        <Row className='nav-menu flex-column m-0'>
          <NavLink to='/about/who-we-are' onClick={handleSetDrawerIsOpen}>
            Who We Are
          </NavLink>
          <NavLink to='/about/our-people' onClick={handleSetDrawerIsOpen}>
            Our People
          </NavLink>
          <NavLink to='/about/certificates' onClick={handleSetDrawerIsOpen}>
            Certificates (Quality Assurance)
          </NavLink>
          <NavLink
            to='/about/sustainability-strategy'
            onClick={handleSetDrawerIsOpen}>
            Sustainability Strategy
          </NavLink>
        </Row>
      </Col>

      <Col className='nav-link-wrapper p-0'>
        <Link to='/companies' onClick={preventRedirect} className='nav-link'>
          <span>Our Companies</span> <ExpandMoreIcon />
        </Link>

        <Row className='nav-menu flex-column m-0'>
          <NavLink
            to='/companies/switchgears'
            className='nav-menu-link'
            onClick={handleSetDrawerIsOpen}>
            Switchgears Engineering and Manufacturing
          </NavLink>
          <NavLink
            to='/companies/pipes-and-fittings'
            className='nav-menu-link'
            onClick={handleSetDrawerIsOpen}>
            Pipes and Fittings
          </NavLink>
        </Row>
      </Col>

      <Col className='nav-link-wrapper p-0'>
        <NavLink
          to='/news'
          className='nav-link'
          onClick={handleSetDrawerIsOpen}>
          News
        </NavLink>
      </Col>
      <Col className='nav-link-wrapper p-0'>
        <NavLink
          to='/gallery'
          className='nav-link'
          onClick={handleSetDrawerIsOpen}>
          Gallery
        </NavLink>
      </Col>
      <Col className='nav-link-wrapper p-0'>
        <NavLink
          to='/contact'
          className='nav-link'
          onClick={handleSetDrawerIsOpen}>
          Contact Us
        </NavLink>
      </Col>
    </Row>
  );

  return (
    <>
      {forIndex && indexNavLinks}
      {(forGears || forPipes) && (
        <Row className='m-0'>
          <Col className='nav-link-wrapper p-0'>
            <NavLink to='/about' onClick={preventRedirect} className='nav-link'>
              About Us <ExpandMoreIcon />
            </NavLink>

            <Row className='nav-menu flex-column m-0'>
              <NavLink to='/about/who-we-are' onClick={handleSetDrawerIsOpen}>
                Who We Are
              </NavLink>
              <NavLink to='/about/our-people' onClick={handleSetDrawerIsOpen}>
                Our People
              </NavLink>
              <NavLink to='/about/certificates' onClick={handleSetDrawerIsOpen}>
                Certificates (Quality Assurance)
              </NavLink>
              <NavLink
                to='/about/sustainability-strategy'
                onClick={handleSetDrawerIsOpen}>
                Sustainability Strategy
              </NavLink>
            </Row>
          </Col>

          <Col className='nav-link-wrapper p-0'>
            <Link
              to='/companies'
              onClick={preventRedirect}
              className='nav-link'>
              <span>Our Companies</span> <ExpandMoreIcon />
            </Link>

            <Row className='nav-menu flex-column m-0'>
              <NavLink
                to='/companies/switchgears'
                className='nav-menu-link'
                onClick={handleSetDrawerIsOpen}>
                Switchgears Engineering and Manufacturing
              </NavLink>
              <NavLink
                to='/companies/pipes-and-fittings'
                className='nav-menu-link'
                onClick={handleSetDrawerIsOpen}>
                Pipes and Fittings
              </NavLink>
            </Row>
          </Col>
          {forPipes && (
            <Col className='nav-link-wrapper p-0'>
              <NavLink
                to={`${pipes}/products`}
                className='nav-link'
                onClick={handleSetDrawerIsOpen}>
                Products
              </NavLink>
            </Col>
          )}
          {forGears && (
            <Col className='nav-link-wrapper p-0'>
              <NavLink to={`${gears}/services`} className='nav-link'>
                Services
              </NavLink>
            </Col>
          )}
          {forGears && (
            <Col className='nav-link-wrapper p-0'>
              <NavLink
                to={`${gears}/portfolio`}
                className='nav-link'
                onClick={handleSetDrawerIsOpen}>
                Portfolio
              </NavLink>
            </Col>
          )}
          <Col className='nav-link-wrapper p-0'>
            {forGears ? (
              <NavLink
                to={`${gears}/inquiry`}
                className='nav-link button contained'
                onClick={handleSetDrawerIsOpen}>
                <span className='long-desc'>Make an Inquiry</span>
                <span className='short-desc'>Inquire</span>
              </NavLink>
            ) : (
              <NavLink
                to={`${pipes}/order`}
                className='nav-link button contained'
                onClick={handleSetDrawerIsOpen}>
                <span className='long-desc'>Place an Order</span>
                <span className='short-desc'>Order</span>
              </NavLink>
            )}
          </Col>
        </Row>
      )}
    </>
  );
}

export default NavLinks;
