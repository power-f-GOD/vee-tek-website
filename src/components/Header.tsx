import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Image, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg='light' expand='md' className='shadow-sm fixed-top Nav-Wrapper'>
      <Container>
        <Link to='/'>
          <Navbar.Brand>
            <Image src='./images/logo.png' thumbnail width='45px' />
            <Navbar.Text className='ml-3 font-weight-bold'>Vee-Tek Group</Navbar.Text>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <Link to='/companies' className='nav-link'>
              Our Companies
            </Link>
            <Link to='/blog' className='nav-link'>
              Blog
            </Link>
            <Link to='/gallery' className='nav-link'>
              Gallery
            </Link>
            <Link to='/contact' className='nav-link'>
              Contact Us
            </Link>
            <Link to='/about' className='nav-link'>
              About Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
