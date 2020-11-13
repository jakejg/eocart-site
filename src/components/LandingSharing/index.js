import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import MailWidget from "../General/mailWidget";
import './linkShare.css';

const inviteTitle = {
  fontSize: '4rem',
  paddingTop: '26px',
  paddingLeft: '19px'
}

const inviteSub = {
  marginTop: '3rem',
  marginBottom: '-2rem',
  fontSize: '2rem',
  fontWeight: 700
}

const inviteTextBox = {
  height: '5.7rem',
  width: '33rem',
  marginRight: '0rem',
  border: '1px solid rgb(196, 196, 196)',
  borderRadius: '5px',
  textIndent: '0.5rem',
  color: 'rgb(89, 89, 89)',
  fontFamily: 'Montserrat',
  fontWeight: 500,
  fontSize: '2rem',
  marginTop: '35px',
  verticalAlign: 'middle',
  textAlign: 'center'
}

const Landing = React.forwardRef((props, ref) => {
  return (
    <section id="landing">
      <div ref={ref}>
        <div id="content">
          <div class="refForm">
            <h1 style={inviteTitle}>Tell your friends, plant 10 trees</h1>
            <p style={inviteSub}>Share your referral link:</p>
            <input
              type="text"
              readonly=""
              id="refLink"
              value="Ecocart.io/share/{{refCode}}"
              style={inviteTextBox}/>
          </div>
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
