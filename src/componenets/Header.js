import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import logo from "./../images/logo.jpg";
const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="Systematrix Solutions logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/about">About Us</Nav.Link>

            <Nav.Link href="/products">Products</Nav.Link>

            <Nav.Link href="/ai">AI</Nav.Link>
            <Nav.Link href="/team">The Team</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
