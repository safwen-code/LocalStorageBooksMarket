import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav } from "react-bootstrap";
const Navbars = (props) => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>List Document</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/addDoc">
            <Nav.Link>Add Doc</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
