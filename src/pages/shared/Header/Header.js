import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaJenkins } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

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
              <Link
                className="text-decoration-none text-secondary me-2"
                to="/frameworks"
              >
                Frameworks
              </Link>
              <Link
                className="text-decoration-none text-secondary me-2"
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="text-decoration-none text-secondary me-2"
                to="/faq"
              >
                FAQ
              </Link>
            </Nav>

            <Nav.Link eventKey={2} href="#profile" className="ms-2">
              {user?.photoURL ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaJenkins></FaJenkins>
              )}
            </Nav.Link>
            <Nav>
              <Nav.Link eventKey={2} href="#profile">
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <Button
                      className="bg-transparent border border-0 text-secondary"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      className="text-decoration-none text-secondary me-2 mb-0 pb-0"
                      to="/register"
                    >
                      Register
                    </Link>
                    <Link
                      className="text-decoration-none text-secondary me-2 mb-0 pb-0"
                      to="/login"
                    >
                      Login
                    </Link>
                  </>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
