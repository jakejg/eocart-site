import { Link } from "gatsby";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <div className="footer-component" style={{ backgroundColor: "#262626" }}>
      <Container>
        <Row className="no-gutters">
          <Col className="no-gutters" sm={12}>
            <Row className="logo-ecocart-businesses no-gutters">
              <Col className="footer-logo" sm={6}>
                <img
                  className="ecocart-logo"
                  width="256"
                  src={logo}
                  alt="ecocart logo"
                ></img>
              </Col>
              <Col className="ecocart-businesses" sm={3}>
                <div className="footer-ecocart">
                  <h2>EcoCart</h2>
                  <Link to="/about">About Us</Link>
                  <a
                    href="https://app.ecocart.io/blog/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                  <Link to="/terms-of-services-us">Terms of Service(US)</Link>
                  <Link to="/terms-of-services-eu">Terms of Service(EU)</Link>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                  <Link to="/help">Help</Link>
                </div>
              </Col>
              <Col className="ecocart-businesses" sm={3}>
                <div className="footer-businesses">
                  <h2>For Businesses</h2>
                  <a
                    href="https://app.ecocart.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shopify App
                  </a>
                  <a
                    href="mailto:hello@ecocart.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Become an Affiliate
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col className="no-gutters" sm={12}>
            <div className="footer-underline">
              <Col className="footer-underline-col no-gutters" sm={4}>
                <a
                  href="https://www.instagram.com/ecocart.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://app.ecocart.io/wp-content/themes/ecocart/images/instagram_logo.svg"
                    alt="instagram logo"
                  ></img>
                </a>
                <a
                  href="https://www.linkedin.com/company/ecocart-io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://app.ecocart.io/wp-content/themes/ecocart/images/linkedin_logo.svg"
                    alt="linkedin logo"
                  ></img>
                </a>
                <a
                  href="https://twitter.com/EcoCart_io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://app.ecocart.io/wp-content/themes/ecocart/images/twitter_logo.svg"
                    alt="twitter logo"
                  ></img>
                </a>
              </Col>
              <Col className="no-gutters" sm={4}>
                <div className="madewith">
                  Made with <i className="heart"></i> in San Francisco, CA
                </div>
              </Col>
              <Col className="no-gutters" sm={4}>
                <div className="text-right copyright">
                  All rights reserved<br></br>&copy; EcoCart 2020
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
