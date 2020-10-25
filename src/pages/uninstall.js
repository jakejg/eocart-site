import React, { useState } from "react";
import Layout from "../components/layout";
import { Container, Row, Col, Button } from "react-bootstrap";
import SEO from "../components/seo";
import '../styles/pages/_uninstall.scss';

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
              <div className="top-space"></div>
              <Container className="uninstall-title">
                <h1 className="uninstall-title"> We’re sorry to see you go</h1>
                <h3>Didn’t mean to uninstall?</h3>
                <a
                    className="btn uninstall-buttons"
                    size="small"
                    href="https://chrome.google.com/webstore/detail/ecocart-carbon-neutral-sh/  oiafedhhdhinjnianpfeaenmchnknchi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Re-Install EcoCart to Chrome</strong>
                  </a>
                </Container>

                <Container className="uninstall-container">
                    {!showThanks &&
                    <form className="uninstall-options-form">
                        {options.map(option => {
                            return <div className={selected === option.id ? "options options-selected" : "options"} id={option.id} value={option.text} onClick={handleSelect}>{option.text}</div>
                        })}
                        <input placeholder="Other (write in)" id={4} onClick={handleSelect} value={customInput} onChange={handleChange} className={selected === 4 ? "options options-selected" : "options"}/>
                        <div className=" btn uninstall-buttons" onClick={handleSubmit}>Submit</div>
                    </form>
                    }
                    {showThanks &&
                    <div className="uninstall-thank-you">Thank you for your feedback! We’re always just 2 clicks away if you change your mind.
                    </div>
                    }
                </Container>
                
            </div>
        </Layout>
    );
};

export default Uninstall;
