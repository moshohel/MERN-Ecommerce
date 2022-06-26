import React from 'react'
// LinkContainer works same as like Link
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to={'/'}>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to={'/cart'}>
                <Nav.Link>
                  <i>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </i>{' '}
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/login'}>
                <Nav.Link>
                  <i>
                    <FontAwesomeIcon icon={faUser} />
                  </i>{' '}
                  Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
