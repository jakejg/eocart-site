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

const whiteSocials = {color:"white"}

const shareSub = {"marginTop":"2rem","marginBottom":"-2rem","fontSize":"2rem","fontWeight":"700"}

const copyButton = {"marginLeft":"-2rem","height":"5.7rem","width":"10rem","backgroundColor":"rgb(0, 176, 80)","borderRadius":"5px","border":"none","color":"white","fontWeight":"700","fontSize":"2rem","fontFamily":"Montserrat","cursor":"pointer","marginTop":"35px","verticalAlign":"middle"}

function copyText(e) {
  var copyText = document.getElementById('refLink');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
  var copyBtn = document.getElementById("copyBtn");
  copyBtn.innerText = "Copied";
  copyBtn.style.backgroundColor = 'white';
  copyBtn.style.color = "rgb(0, 176, 80)";
  copyBtn.style.border = 'solid black 2px';
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
              value={"Ecocart.io/share/"+ refLink}
              style={inviteTextBox}/>
              <button style={copyButton} id="copyBtn" onClick={copyText}>Copy</button>
              <p class = "or-gap">
              or
              </p>
              <p style={shareSub}>Share via:</p>
              <div class="social-icons">
              <a href="https://twitter.com/intent/tweet?text=Friends%20don’t%20let%20friends%20shop%20online%20without%20EcoCart.%20Automatically%20plant%20trees%20for%20free%20at%20your%20favorite%20stores.%0ahttps://ecocart.io/share/{{refCode}}"  onclick="window.open('https://twitter.com/intent/tweet?text=Friends%20don’t%20let%20friends%20shop%20online%20without%20EcoCart.%20Automatically%20plant%20trees%20for%20free%20at%20your%20favorite%20stores.%0ahttps://ecocart.io/share/{{refCode}}','name','width=650,height=450');return false;">
                  <div class="mainContainer-0-2-209 twitter"><div class="h-icon icon-0-2-34"><svg width="21" height="21" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.997 4.372a3.76 3.76 0 001.533-2.095 6.684 6.684 0 01-2.216.92C14.678 2.46 13.771 2 12.768 2c-1.927 0-3.49 1.696-3.49 3.787 0 .296.032.586.091.863C6.47 6.492 3.9 4.984 2.18 2.692c-.301.56-.472 1.21-.472 1.904 0 1.314.805 2.472 1.742 3.152-.572-.02-1.39-.19-1.39-.474v.047c0 1.835 1.013 3.366 2.609 3.714a3.937 3.937 0 01-1.015.133c-.226 0-.491-.024-.705-.068.444 1.504 1.708 2.6 3.235 2.63-1.193 1.016-2.711 1.621-4.346 1.621-.281 0-.565-.018-.837-.053C2.544 16.372 4.374 17 6.345 17c6.417 0 9.924-5.771 9.924-10.776 0-.165-.003-.328-.01-.49a7.446 7.446 0 001.739-1.96 6.486 6.486 0 01-2.001.598z" fill="white"></path></svg></div></div>
              </a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=ecocart.io/share/{{refCode}}" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=ecocart.io/share/{{refCode}}','name','width=650,height=450');return false;" style={whiteSocials}>
                  <div class="mainContainer-0-2-209 facebook"><div class="h-icon icon-0-2-34"><svg width="21" height="21" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.288.018c-.275-.04-1.954 0-3.054 0-2.301 0-4.358 1.129-4.358 3.702v2.645H3.7v3.173h3.176V18h3.177V9.538h3.176l1.06-3.173h-4.236V4.249c0-.864.336-1.058 1.588-1.058h2.647V.018z" fill="white"></path></svg></div></div>
              </a>
              <a href="https://www.facebook.com/dialog/send?app_id=583933058891864&link=https%3A%2F%2Fecocart.io%2Fshare%2F{{refCode}}&redirect_uri=https%3A%2F%2Fecocart.io%2Fshare%2F{{refCode}}" onclick="window.open('https://www.facebook.com/dialog/send?app_id=583933058891864&link=https%3A%2F%2Fecocart.io%2Fshare%2F{{refCode}}&redirect_uri=https%3A%2F%2Fecocart.io%2Fshare%2F{{refCode}}','name','width=650,height=450');return false;" style={whiteSocials}>
              <div class="mainContainer-0-2-209 messenger"><div class="h-icon icon-0-2-34"><svg width="21" height="21" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C4.03 0 0 3.73 0 8.333c0 2.623 1.309 4.962 3.354 6.49V18l3.064-1.682A9.672 9.672 0 009 16.667c4.97 0 9-3.731 9-8.334C18 3.731 13.97 0 9 0zM7.593 8.66L3.5 11l4.553-5 2.411 2.34L14.5 6l-4.553 5-2.354-2.34z" fill="white"></path></svg></div></div>
              </a>
              </div>
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
