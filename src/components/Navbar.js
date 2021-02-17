import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from ".././images/logo/ohtel-logo.png";
import search from ".././images/icons/search.png";
import user from ".././images/icons/user.png";
import plus from ".././images/icons/plus.png";

const NavBar = () => {
  return (
    <>
      <Navbar bg='dark' expand='lg' className='nav-main'>
        <Navbar.Brand className='brand-logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='navbar-collapse'>
          <div className='search-bar'>
            <img src={search} alt='search-icon' className='search-icon' />
            <Form inline className='search-bar-input'>
              <FormControl
                type='text'
                placeholder='Search For Spaces, Rent, etc..'
                className='mr-sm-2'
              />
            </Form>
          </div>
          <Nav className='nav-bar-links'>
            <Nav.Link className='nav-bar-link'>
              <Link to='/register'>
                <img src={user} alt='user' /> Login/Register
              </Link>
            </Nav.Link>
            <Nav.Link className='nav-bar-link'>
              <Link to='/addpost'>
                <img src={plus} alt='' /> Post an AD
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
