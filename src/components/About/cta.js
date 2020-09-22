import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MailWidget from "../General/mailWidget";

const Cta = () => {
  return (
    <section className="cta">
      <Container>
        <Row>
          <Col sm>
            <h2>
              Ready to start
              <br />
              shopping sustainably?
            </h2>
            <a
              className="btn navbar-button"
              size="small"
              href="https://chrome.google.com/webstore/detail/ecocart-carbon-neutral-sh/oiafedhhdhinjnianpfeaenmchnknchi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Add to Chrome</strong> — It's Free!
            </a>
            <MailWidget />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cta;
