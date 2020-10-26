import React, { useState } from "react";
import { Link } from "gatsby";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";
import SEO from "../components/seo";
import '../styles/pages/_uninstall.scss';
import daneSmile from '../images/dane-smile.png';
import daneSignature from '../images/dane-signature.png';
import sadFaceIcon from '../images/disappointed-face.png';
import logo from "../images/logo.svg";

const Uninstall = () => {
    const [showThanks, setShowThanks] = useState(false);
    const [formSelection, setFormSelection] = useState('');
    const [selected, setSelected] = useState();
    const [customInput, setCustomInput] = useState('');

    const options = [
        {id: 1, text: "I don’t understand how EcoCart works"},
        {id: 2, text: "I’m using another shopping extension"},
        {id: 3, text: "I accidentally installed"}
    ];

    const handleSubmit = () => {
        setShowThanks(true);
        console.log(formSelection)
    }

    const handleSelect = (e) => {
        const { innerText } = e.target;
        setFormSelection(innerText);
        setSelected(+e.target.id)
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setCustomInput(value);
        setFormSelection(value);
    }

    return (
        <>
          <SEO title="Uninstall" />
          <div className="uninstall">
                <section className="uninstall-section-1">
                <Link className="logo-link" to="/">
              <img src={logo} alt="logo" className="navbar--logo u-logo" />
            </Link>
                    <div className="top-space"></div>
                    <Container >
                        <h1 className="uninstall-title"> We’re sorry to see you go <img className="sad-icon" src={sadFaceIcon} alt="Sad icon" /></h1>
                        <Container className="re-install">
                            <h2 className="re-install-text">Didn’t mean to uninstall?</h2>
                            <a
                                className="btn uninstall-buttons"
                                size="small"
                                href="https://chrome.google.com/webstore/detail/ecocart-carbon-neutral-sh/oiafedhhdhinjnianpfeaenmchnknchi"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <strong>Re-Install EcoCart to Chrome</strong>
                              </a>
                            </Container>
                    </Container>

                    <Container className="uninstall-container">
                        {!showThanks &&
                          <form className="uninstall-options-form">
                              <h2 className="uninstall-options-form-header">Let us know why you’re leaving so we can do better</h2>
                              {options.map(option => {
                                  return <div key={option.id} className={selected === option.id ? "options options-selected" : "options"} id={option.id} value={option.text} onClick={handleSelect}>{option.text}</div>
                              })}
                              <input placeholder="Other (write in)" id={4} onClick={handleSelect} value={customInput} onChange={handleChange} className={selected === 4 ? "options u-input options-selected" : "options u-input"}/>
                              <div className=" btn uninstall-buttons submit-button" onClick={handleSubmit}>Submit</div>
                          </form>
                          }
                        {showThanks &&
                            <div className="uninstall-thank-you">
                                <div>Thank you for your feedback!</div>
                                <div>We’re always just 2 clicks away if you change your mind.</div>
                            </div>
                        }
                    </Container>
                </section>
                <section className="uninstall-section-2">
                    <div className="uninstall-dane">
                        <img className="dane-smile" src={daneSmile} alt="Dane"/>
                        <div className="dane-text">
                            <p>
                                <span className="green-bold"> Hi, I’m Dane.</span> We sincerely appreciate you trying out EcoCart, and I would love to hear more about how we could have kept you on board. Please contact me personally at <a className="dane-link" href="mailto:dane@ecocart.io" target="_blank" rel="noreferrer" >dane@ecocart.io</a> with any feedback you can provide.
                            </p>
                            <p>
                                We hope you continue to make choices that positively impact the planet and we’re just 2 clicks away if you would like to give us another shot.
                            </p>
                            <img className="dane-signature" src={daneSignature} alt="Dane's signature" />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Uninstall;
