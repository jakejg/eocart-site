import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col, FormGroup, Button, Form, FormControl } from "react-bootstrap";
import SEO from "../components/seo";
import '../styles/pages/_leadcapture.scss';
import logo from "../images/logo.svg";

const leadCapture = () => {
    // const [showThanks, setShowThanks] = useState(false);
    // const [formSelection, setFormSelection] = useState('');
    // const [selected, setSelected] = useState();
    // const [customInput, setCustomInput] = useState('');

    // // submit form if a selction has been made
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (formSelection){
    //         setShowThanks(true);
    //         console.log(formSelection);
    //     }
    // }

    // // Submit form if enter is pressed
    // useEffect(() => {
    //     const listener = (e) => {
    //       if (e.code === "Enter" || e.code === "NumpadEnter") {
    //           handleSubmit(e)
    //       }
    //     };
    //     document.addEventListener("keydown", listener);
    //     return () => {
    //       document.removeEventListener("keydown", listener);
    //     };
    //   }, [handleSubmit]);

    // const options = [
    //     {id: 1, text: "I don’t understand how EcoCart works"},
    //     {id: 2, text: "I’m using another shopping extension"},
    //     {id: 3, text: "I accidentally installed"}
    // ];
  
    // const handleSelect = (e) => {
    //     const { innerText } = e.target;
    //     setFormSelection(innerText);
    //     setSelected(+e.target.id);
    // }

    // const handleChange = (e) => {
    //     const { value } = e.target;
    //     setCustomInput(value);
    //     setFormSelection(value);
    // }

    return (
        <>
          <SEO title="leadCapture" />
          <div className="lead-capture">
                <section className="lead-capture-section-1">
                    <Link className="logo-link" to="/">
                        <img src={logo} alt="logo" className="navbar--logo u-logo" />
                    </Link>
                    <div className="top-space"></div>
                    <Container >
                        <Row>
                            <Col>
                                <h1 className="lead-capture-title">Get Started with EcoCart</h1>
                                <Form>
                                    <FormGroup>
                                        <FormControl type="email" placeholder="Work Email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControl type="text" placeholder="Your ecommerce store URL" />
                                    </FormGroup>
                                    <Button>Quick Start</Button>
                                </Form>
                            </Col>
                            <Col>
                            <iframe src="https://www.youtube.com/embed/nsk9e9ZWRe8">
                          </iframe>
                            </Col>
                        </Row>
                      
                    </Container>
                </section>
           </div>      
        </>
    );
};

export default leadCapture;
