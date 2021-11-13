import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import background from "../../assets/background.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Container>
        <Row className="main-row-landing-page">
          <Col>
            <h1 className="landing-page-heading">Notes Application</h1>
            <p>One secure and easy place to store all your notes</p>
            <Row className="buttons-landing-page">
              <Col>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <button type="button" className="btn btn-primary">
                    Login
                  </button>
                </Link>
              </Col>
              <Col>
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <button type="button" className="btn btn-outline-primary">
                    Register
                  </button>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <img
              src={background}
              alt="notes png file"
              className="notes-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
