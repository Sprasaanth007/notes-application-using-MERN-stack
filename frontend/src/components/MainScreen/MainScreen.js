import React from "react";
import { Container, Row } from "react-bootstrap";
import "./MainScreen.css";

const MainScreen = ({ title, children }) => {
  return (
    <div>
      <Container>
        <div className="main-screen">
          <Row>
            {title && (
              <>
                <h1 className="heading">{title}</h1>
              </>
            )}
          </Row>
          <Row>{children}</Row>
        </div>
      </Container>
    </div>
  );
};

export default MainScreen;
