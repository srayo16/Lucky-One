import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
        <div className='mb-5'>
            <Navbar bg="dark" className='navhandle' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#" className="text-light fw-bold ms-5 ps-5" >Eye-Phone Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" className='tog'/>
    <Navbar.Collapse id="navbarScroll" >
      <Nav
        className="ms-auto me-3  my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1" className='text-light'>Home</Nav.Link>
        <Nav.Link href="#action2" className='text-light'> cart </Nav.Link>
        <Nav.Link href="#action1" className='text-light'>Log in</Nav.Link>
        <Nav.Link href="#action2" className='text-light'>About us</Nav.Link>
        
      </Nav>
      <Form className="d-flex me-5 pe-5 ">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
         
          aria-label="Search"
        />
        <Button variant="outline-success" >Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;