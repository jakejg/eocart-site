import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Cta = () => {
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
              <strong>Add to Chrome</strong> — It's Free!
            </a>
          </Col>
        </Row>
        <div id="hubspotForm2"><form novalidate="" accept-charset="UTF-8" action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/7682224/32756575-d700-41e5-92a8-c8a1eeb94114" enctype="multipart/form-data" id="hsForm_32756575-d700-41e5-92a8-c8a1eeb94114" method="POST" class="hs-form stacked hs-form-private hsForm_32756575-d700-41e5-92a8-c8a1eeb94114 hs-form-32756575-d700-41e5-92a8-c8a1eeb94114 hs-form-32756575-d700-41e5-92a8-c8a1eeb94114_017e9325-58c1-4938-9433-98e898028de8" data-form-id="32756575-d700-41e5-92a8-c8a1eeb94114" data-portal-id="7682224" target="target_iframe_32756575-d700-41e5-92a8-c8a1eeb94114" data-reactid=".hbspt-forms-1"><div class="hs_email hs-email hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-1.1:$0"><label id="label-email-32756575-d700-41e5-92a8-c8a1eeb94114" class="" placeholder="Enter your " for="email-32756575-d700-41e5-92a8-c8a1eeb94114" data-reactid=".hbspt-forms-1.1:$0.0"><span data-reactid=".hbspt-forms-1.1:$0.0.0"></span><span class="hs-form-required" data-reactid=".hbspt-forms-1.1:$0.0.1">*</span></label><legend class="hs-field-desc" style="display:none;" data-reactid=".hbspt-forms-1.1:$0.1"></legend><div class="input" data-reactid=".hbspt-forms-1.1:$0.$email"><input id="email-32756575-d700-41e5-92a8-c8a1eeb94114" class="hs-input" type="email" name="email" required="" placeholder="Email" value="" autocomplete="email" data-reactid=".hbspt-forms-1.1:$0.$email.0"></div></div><noscript data-reactid=".hbspt-forms-1.2"></noscript><div class="hs_submit hs-submit" data-reactid=".hbspt-forms-1.5"><div class="hs-field-desc" style="display:none;" data-reactid=".hbspt-forms-1.5.0"></div><div class="actions" data-reactid=".hbspt-forms-1.5.1"><input type="submit" value="Send Me a Link" class="hs-button primary large" data-reactid=".hbspt-forms-1.5.1.0"></div></div><noscript data-reactid=".hbspt-forms-1.6"></noscript><input name="hs_context" type="hidden" value="{&quot;rumScriptExecuteTime&quot;:733.7349999870639,&quot;rumServiceResponseTime&quot;:819.4099999964237,&quot;rumFormRenderTime&quot;:1.2350000033620745,&quot;rumTotalRenderTime&quot;:838.9449999958742,&quot;rumTotalRequestTime&quot;:84.44500001496635,&quot;disableCookieSubmission&quot;:true,&quot;renderRawHtml&quot;:&quot;true&quot;,&quot;lang&quot;:&quot;en&quot;,&quot;embedType&quot;:&quot;REGULAR&quot;,&quot;embedAtTimestamp&quot;:&quot;1602813011603&quot;,&quot;formDefinitionUpdatedAt&quot;:&quot;1600900447044&quot;,&quot;pageUrl&quot;:&quot;https://ecocart.io/&quot;,&quot;pageTitle&quot;:&quot;Home | EcoCart&quot;,&quot;source&quot;:&quot;FormsNext-static&quot;,&quot;timestamp&quot;:1602813011603,&quot;userAgent&quot;:&quot;Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&quot;,&quot;originalEmbedContext&quot;:{&quot;portalId&quot;:&quot;7682224&quot;,&quot;formId&quot;:&quot;32756575-d700-41e5-92a8-c8a1eeb94114&quot;,&quot;target&quot;:&quot;#hubspotForm2&quot;},&quot;formTarget&quot;:&quot;#hubspotForm2&quot;,&quot;correlationId&quot;:&quot;2ca384b4-ba22-4de5-afd3-237bbd0543d1&quot;}" data-reactid=".hbspt-forms-1.7"><iframe name="target_iframe_32756575-d700-41e5-92a8-c8a1eeb94114" style="display:none;" data-reactid=".hbspt-forms-1.8"></iframe></form></div>
      </Container>
    </section>
  );
};

export default Cta;
