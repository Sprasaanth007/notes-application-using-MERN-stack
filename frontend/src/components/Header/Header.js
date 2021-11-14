import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Notes Application
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link
                to="/my-notes"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                My Notes
              </Link>
            </Nav.Link>
            <NavDropdown
              title="Prasaanth Santhosh"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item>
                <Link
                  to="/my-profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  My Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  navigate("/");
                }}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search.."
              className="me-2"
              aria-label="Search"
            />
            <button type="button" class="btn btn-primary">
              Search
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
