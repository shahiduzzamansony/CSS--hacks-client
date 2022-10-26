import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="fs-2">
            CSS Hacks
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#frameworks">Frameworks</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#register">Register</Nav.Link>
              <Nav.Link href="#login">LogIn</Nav.Link>
              <Nav.Link eventKey={2} href="#profile">
                {user?.displayName}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
