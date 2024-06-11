import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import { removeUserDataFromLocalStorage } from '../../util/localStorageUtils.js'
import { useLocation, useNavigate } from 'react-router-dom'

const NavBarComponent = (props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    if (location.pathname === '/home') {
      window.location.reload() // Reload the page if already on /home
    } else {
      navigate('/home') // Navigate to the home page otherwise
    }
  }

  const onLogout = () => {
    removeUserDataFromLocalStorage()
    navigate('/login')
  }

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: '#f9f9f9',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <Container>
        <Nav className="me-auto"></Nav>
        <Navbar.Brand>MeiMoreIs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={handleClick}>Home</Nav.Link>{' '}
            <NavDropdown
              title={
                <img
                  loading="lazy"
                  src={props.image}
                  className="rounded-circle"
                  alt="User"
                  style={{ width: '20px', height: '20px' }}
                />
              }
              id="basic-nav-dropdown"
            >
              {props.name && (
                <NavDropdown.Item onClick={() => navigate('/profile')}>
                  {props.name}
                </NavDropdown.Item>
              )}

              <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarComponent
