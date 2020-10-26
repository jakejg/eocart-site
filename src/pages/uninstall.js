import React, { useState } from "react";
import Layout from "../components/layout";
import { Container, Row, Col, Button } from "react-bootstrap";
import SEO from "../components/seo";
import '../styles/pages/_uninstall.scss';
import uninstallDane from '../images/uninstall-dane.png';
import sadFaceIcon from '../images/disappointed-face.png';

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
        <Layout>
          <SEO title="Uninstall" />
          <div className="uninstall">
                <section className="uninstall-section-1">
                    <div className="top-space"></div>
                    <Container className="uninstall-title">
                        <h1 className="uninstall-title"> We’re sorry to see you go <img className="sad-icon" src={sadFaceIcon} /></h1>
                        <h3>Didn’t mean to uninstall?</h3>
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

                      <Container className="uninstall-container">
                          {!showThanks &&
                          <form className="uninstall-options-form">
                              <h2>Let us know why you’re leaving so we can do better</h2>
                              {options.map(option => {
                                  return <div className={selected === option.id ? "options options-selected" : "options"} id={option.id} value={option.text} onClick={handleSelect}>{option.text}</div>
                              })}
                              <input placeholder="Other (write in)" id={4} onClick={handleSelect} value={customInput} onChange={handleChange} className={selected === 4 ? "options u-input options-selected" : "options u-input"}/>
                              <div className=" btn uninstall-buttons submit-button" onClick={handleSubmit}>Submit</div>
                          </form>
                          }
                          {showThanks &&
                          <div className="uninstall-thank-you">Thank you for your feedback! We’re always just 2 clicks away if you change your mind.
                          </div>
                          }
                      </Container>
                </section>
                <section className="uninstall-section-2">
                        <img className="uninstall-dane" src={uninstallDane} />
                </section>
            </div>
        </Layout>
    );
};

export default Uninstall;
