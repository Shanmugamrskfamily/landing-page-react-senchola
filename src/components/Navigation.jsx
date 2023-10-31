import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = () => {

const tostHome=()=>{
  toast.success("Home Page Loaded");
}

const toAbout=()=>{
  toast.success("About Page Loaded");
}
const toServices=()=>{
  toast.success("Services Page Loaded");
}
const toSignup=()=>{
  toast.success("Signup Page Loaded");
}
const toContact=()=>{
  toast.success("Contact Page Loaded");
}

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
      <Navbar.Brand  href="/">
        <img src="./images/logo.png" onClick={tostHome} height="100" width="120" alt="RSK Logo" />
      </Navbar.Brand>
      <Navbar.Toggle style={{ background: 'white' }} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='text-white' onClick={tostHome} as={Link} to="/" style={{ fontSize: '1.2rem' }}>
            Home
          </Nav.Link>
          <Nav.Link className='text-white' onClick={toAbout} as={Link} to="/about" style={{ fontSize: '1.2rem' }}>
            About
          </Nav.Link>
          <Nav.Link className='text-white' onClick={toServices} as={Link} to="/services" style={{ fontSize: '1.2rem' }}>
            Services
          </Nav.Link>
          <Nav.Link className='text-white' onClick={toContact} as={Link} to="/contact" style={{ fontSize: '1.2rem' }}>
            Contact
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/signup">
            <button className='btn btn-primary' onClick={toSignup} style={{ fontSize: '1.2rem' }}>
              Signup
            </button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
