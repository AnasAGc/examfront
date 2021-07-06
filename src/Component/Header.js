import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Drinks </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/favorite">Favorite</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
