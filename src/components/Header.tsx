import React from 'react';
import {
  Container,
  Image,
  Nav,
  Navbar
} from 'react-bootstrap';
import '../styles/index.min.css';

const Header = () => {
  return (
    <Navbar bg='light' expand='md' className='shadow-sm'>
      <Container>
        <Navbar.Brand href='#home'>
          <Image src='./images/logo.png' thumbnail width='40rem' />
          <Navbar.Text className='ml-3 font-weight-bold'>Vee-Tek</Navbar.Text>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <Nav.Link href='#companies'>Our Companies</Nav.Link>
            <Nav.Link href='#blog'>Blog</Nav.Link>
            <Nav.Link href='#gallery'>Gallery</Nav.Link>
            <Nav.Link href='#contact'>Contact Us</Nav.Link>
            <Nav.Link href='#about'>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
