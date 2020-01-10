import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="./about" class="text-black margin-right">
              About Us
            </Link>

            <Link to="./products" class="text-black margin-right">
              Products
            </Link>

            <Link to="./ai" class="text-black margin-right">
              AI
            </Link>
            <Link to="./team" class="text-black margin-right">
              The Team
            </Link>
            <Link to="/contact" class="text-black">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
