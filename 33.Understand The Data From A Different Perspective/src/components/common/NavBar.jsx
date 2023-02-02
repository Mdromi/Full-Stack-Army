import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="xl">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Explore React
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/social">
            Social
          </Nav.Link>
          <Nav.Link as={Link} to="/dynamic-form">
            DynamicForm
          </Nav.Link>
          <Nav.Link as={Link} to="/checkbox">
            Checkbox
          </Nav.Link>
          <Nav.Link as={Link} to="/productList">
          ProductList
          </Nav.Link>
          <Nav.Link as={Link} to="/todo">
          TODO
          </Nav.Link>
          <Nav.Link as={Link} to="/calculator">
          Calculator
          </Nav.Link> 
          <Nav.Link as={Link} to="/contactForm">
          ContactForm
          </Nav.Link> 
          <Nav.Link as={Link} to="/useEffect">
          UseEffect
          </Nav.Link>
          <Nav.Link as={Link} to="/customHooks">
          CustomHooks
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
