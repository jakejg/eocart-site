import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const CtaTree = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/shell.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "7682224",
          formId: "32756575-d700-41e5-92a8-c8a1eeb94114",
          target: "#hubspotForm2",
        });
      }
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "7682224",
          formId: "32756575-d700-41e5-92a8-c8a1eeb94114",
          target: ".hubForm2",
        });
      }
    });
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
              <strong>Add to Chrome</strong> — We'll plant a tree!
            </a>
          </Col>
        </Row>
        <div id="hubspotForm2"></div>
      </Container>
    </section>
  );
};

export default CtaTree;
