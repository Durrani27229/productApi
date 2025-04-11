import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {
  return (
    <Navbar expand="lg" className="header" >
    <Container fluid >
    <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://images.seeklogo.com/logo-png/36/2/api-logo-png_seeklogo-365858.png"
              width="60"
              height="30"
              className="d-inline-block align-top fw-bold fs-5"
            />{' '}
            <Link to="" className='text-decoration-none fw-bold text-dark'>Product Api</Link>
            
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto mx-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link className='nav-link fw-bold fs-5' to="/">Home</Link>
          <Link className='nav-link fw-bold fs-5' to="product">Product</Link>
          <Link className='nav-link fw-bold fs-5' to="about">About</Link>
          <Link className='nav-link fw-bold fs-5' to="contact">Contact</Link>
          
          
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar
