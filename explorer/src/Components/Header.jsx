import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <header className="bg-dark border-bottom border-secondary w-100 position-fixed top-0 left-0 ">
      <Navbar className="p-0" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand
            className="border-end border-secondary py-4"
            href="#home"
          >
            <img
              alt=""
              src="https://react-bootstrap.netlify.app/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <span className="me-4">React Bootstrap</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="text-center">
              <Nav.Link className="mx-4" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="mx-4" href="#pricing">
                About
              </Nav.Link>
              <Nav.Link className="mx-4" href="#features">
                Features
              </Nav.Link>
              <Nav.Link className="mx-4" href="#pricing">
                Pricing
              </Nav.Link>
              <Nav.Link className="mx-4" href="#pricing">
                Service
              </Nav.Link>
              <Nav.Link className="mx-4" href="#pricing">
                Help
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
