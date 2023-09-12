// import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
const NavigationBar = () => {
    return (
      <Container>
        <Navbar expand='lg' className='bg-body-tertiary'>
          <Container fluid>
            <Navbar.Brand href='#'><img src={logo} alt="" width={150} /></Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
              <Nav
                className='mx-auto my-2 my-lg-0 d-flex gap-2'
                style={{ maxHeight: "150px" }}
                navbarScroll>
                <Link className='text-decoration-none text-secondary' to='/home'>Home</Link>
                <Link className='text-decoration-none text-secondary' to="/destination">Destination</Link>
                <Link className='text-decoration-none text-secondary 'to="/Blogs">Blogs</Link>
            
              </Nav>
              <Form className='d-flex'>
                
                <Button variant='warning'>Login</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
}

export default NavigationBar