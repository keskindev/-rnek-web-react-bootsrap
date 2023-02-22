import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../img/devrim-logo.png";
import { useNavigate } from "react-router-dom";

const MyNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        bg="gray"
        expand="lg"
        onSelect={(eventKey) =>
          eventKey === "home" ? navigate("/") : navigate(`/${eventKey}`)
        }
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link eventKey="home">
              <img style={{ width: "140px" }} src={logo} alt="logo" />
              <i style={{ color: "purple" }} className="display-6 fw-semibold">
                Örnek Tasarım
              </i>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Courses" id="basic-nav-dropdown">
                <NavDropdown.Item eventKey="developing">
                  Full-Stack Developing
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="data-science">
                  Data-Science
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="devops">
                  AWD-DEWOPS
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link eventKey="about">About</Nav.Link>
              <Nav.Link eventKey="instructors">Instructor</Nav.Link>
              <Nav.Link eventKey="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
