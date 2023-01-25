import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {
  Link
} from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="xl">
      <Container>
        <Navbar.Brand as={Link} to="/">Explore React</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/social">Social</Nav.Link>
          <Nav.Link as={Link} to="/dynamic-form">DynamicForm</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;