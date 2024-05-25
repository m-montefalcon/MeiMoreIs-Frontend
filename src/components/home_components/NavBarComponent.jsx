import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBarComponent = () => {
  const refreshPage = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#f9f9f9",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Container>
        <Nav className="me-auto">{/* Add your leftmost Nav items here */}</Nav>
        <Navbar.Brand href="#home">MeiMoreIs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={refreshPage}>Home</Nav.Link>{" "}
            {/* Call refreshPage function */}
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
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
