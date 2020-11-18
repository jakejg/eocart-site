import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import MailWidget from "../General/mailWidget";

const Landing = React.forwardRef((props, ref) => {
  return (
    <section id="landing">
        <div id="content">
            <div id = "text-content">
              <h1>Sustainable shopping, simplified</h1>
              <h3>
              With one click, EcoCart automatically calculates and eliminates the carbon footprint of your online orders at 10,000+ stores – all at no extra cost.

              </h3>
              <div className="landing__btn">
                <a
                  className="btn add-button"
                  size="lg"
                  href="https://chrome.google.com/webstore/detail/ecocart-carbon-neutral-sh/oiafedhhdhinjnianpfeaenmchnknchi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>Add to Chrome</b> — We'll plant a tree!
                </a>

              </div>
              <MailWidget formId="hubspotForm" />
              <img class="chrome-product-combined" alt="chrome store product hunt reviews" src={require("../../images/chrome-store-product-hunt-reviews.svg")} />
              <img class="chrome-image" alt="Chrome review" src={require("../../images/chrome-review.png")} />
            </div>
            <div id = "content" style={{paddingTop:0,zIndex:-1}}>
              <div id = "image-content">
                <img alt="splash-image" src={require("../../images/hero-1.png")} />
              </div>
            </div>
        </div>

        <div
          onClick={() => scrollTo("#how-it-works")}
          className="scroll-down"
        ></div>
    </section>
  );
});

export default Landing;
