import React, { Component } from "react";

class MailWidget extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/shell.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "7682224",
          formId: "32756575-d700-41e5-92a8-c8a1eeb94114",
          target: "#hubspotForm",
        });
      }
    });
  }
  render() {
    return <div id="hubspotForm"></div>;
  }
}

export default MailWidget;
