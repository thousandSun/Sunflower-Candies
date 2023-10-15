import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>{title}</Navbar.Brand>
        </Container>
        <Nav>
          <a href="/cart" className="nav-link">
            Cart
          </a>
          <a href="/signin" className="nav-link">
            Log In
          </a>
        </Nav>
      </Navbar>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
