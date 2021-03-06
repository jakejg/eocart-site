import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import MailWidget from "../General/mailWidget";

const Landing = React.forwardRef((props, ref) => {
  return (
    <section id="landing">
      <div ref={ref}>
        <div id="content">
          <h1>Click Button. Save Planet.</h1>
          <h3>
            The free Chrome Extension that automatically plants trees while you shop
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
            <img alt="arrowicon" src={require("../../images/arrowicon.svg")} />
          </div>
          <MailWidget formId="hubspotForm" />
        </div>
        <div
          onClick={() => scrollTo("#how-it-works")}
          className="scroll-down"
        ></div>
      </div>
    </section>
  );
});

export default Landing;
