import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#f9f9f9" }}>
      <Container>
        <Nav className="me-auto">{/* Add your leftmost Nav items here */}</Nav>
        <Navbar.Brand href="#home">MeiMoreIs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown
              title={
                <img
                  src="https://i8.amplience.net/i/naras/MI0004224402-MN0002709646"
                  className="rounded-circle"
                  alt="User"
                  style={{ width: "20px", height: "20px" }}
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
