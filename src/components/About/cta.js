import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Cta = () => {
  return (
    <section className="cta">
      <Container>
        <Row>
          <Col sm>
            <h2>
              Ready to start
              <br />
              shopping sustainabliy?
            </h2>
            <a
              className="btn navbar-button"
              size="small"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Add to Chrome</strong> — It's Free!
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cta;
