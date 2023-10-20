import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="bare-link home-link">
              {title}
            </Link>
          </Navbar.Brand>
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
    </header>
  )
}

export default Header
