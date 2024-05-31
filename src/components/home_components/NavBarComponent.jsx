import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { removeUserDataFromLocalStorage } from "../../util/localStorageUtils.js";

const NavBarComponent = (props) => {
  const navigateTo = useNavigate();
  const refreshPage = () => {
    window.location.reload(); // Reload the page
  };

  const onLogout = () => {
    removeUserDataFromLocalStorage();
    navigateTo("/login");
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
        <Nav className="me-auto"></Nav>
        <Navbar.Brand href="#home">MeiMoreIs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={refreshPage}>Home</Nav.Link>{" "}
            <NavDropdown
              title={
                <img
                  src={props.image}
                  className="rounded-circle"
                  alt="User"
                  style={{ width: "20px", height: "20px" }}
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>{props.name}</NavDropdown.Item>
              <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
