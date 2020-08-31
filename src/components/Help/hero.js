import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DropdownComponent from "../General/dropdownComponent";

const Hero = () => {
  return (
    <div className="hero_section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6} sm={8} xs={12}>
            <h2>How can we help?</h2>
            <DropdownComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
