import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Cta = () => {
  useEffect(() => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId: "7682224",
        formId: "32756575-d700-41e5-92a8-c8a1eeb94114",
        target: "#hubspotForm2",
      });
    }
  }, []);
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
            <div id="hubspotForm2"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cta;
