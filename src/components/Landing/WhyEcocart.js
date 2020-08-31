import React from "react";

import rewards from "../../images/rewards.svg";
import data from "../../images/data.svg";
import control from "../../images/control.svg";

import { Container, Row, Col } from "react-bootstrap";

const WhyEcocart = () => {
  return (
    <div id="why-ecocart">
      <Container className="px-4">
        <Row className="justify-content-center mb-3 no-gutters">
          <h1>Why EcoCart?</h1>
        </Row>
        <Row className="no-gutters">
          <Col className="mb-4" md={12} lg={4}>
            <img src={data} className="reason-icon" alt="reason icon"></img>
            <h3 className="reason-title">We Don't Sell Your Data</h3>
            <p className="reason-description">
              We're in the business of saving the planet, not violating your
              privacy.
            </p>
          </Col>
          <Col className="mb-4" md={12} lg={4}>
            <img src={rewards} className="reason-icon" alt="reason icon"></img>
            <h3 className="reason-title">Rewards You'll Love</h3>
            <p className="reason-description">
              Fight climate change and earn gift cards to your favorite stores.
            </p>
          </Col>
          <Col className="mb-4" md={12} lg={4}>
            <img
              src={control}
              className="reason-icon control-icon"
              alt="reason icon"
            ></img>
            <h3 className="reason-title">You're in Control</h3>
            <p className="reason-description">
              Support the project that inspires you most.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyEcocart;
