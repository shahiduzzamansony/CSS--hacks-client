import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaJenkins } from "react-icons/fa";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import ReactSwitch from "react-switch";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Image
            style={{ height: "40px" }}
            src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
          ></Image>
          <Link
            to="/"
            className="fs-1 text-decoration-none text-info mx-3 fw-semibold"
          >
            CSS Hacks
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link
                className="text-decoration-none text-secondary me-2"
                to="/framework"
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

            <Link className="ms-2">
              {user?.photoURL ? (
                <Tippy content={user?.displayName}>
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                </Tippy>
              ) : (
                <FaJenkins className="me-3"></FaJenkins>
              )}
            </Link>
            <Nav>
              <Link className="text-decoration-none text-secondary">
                {user?.uid ? (
                  <Button
                    className="bg-transparent border border-0 text-secondary"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </Button>
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
              </Link>
            </Nav>
            <ReactSwitch></ReactSwitch>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
