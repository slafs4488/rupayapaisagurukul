import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashLink as Link } from "react-router-hash-link";
import './Header.css'

function Header() {
  return (
    <div className="header">
      <Navbar expand="md" className="">
        <Container>
          <Navbar.Brand as={Link} to="#home" className="navbar-brand">
          RUPAYAPAISAGURUKUL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="navbar-items">
              <Nav.Link as={Link} to="#services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="#team">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
