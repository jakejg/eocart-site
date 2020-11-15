import React, { useState, useEffect } from "react";
import { Link, navigate } from "gatsby";
import { Container, Row, Col, FormGroup, Button, Form, FormControl, ProgressBar } from "react-bootstrap";
import SEO from "../../components/seo";
import '../../styles/pages/_leadcapture.scss';
import logo from "../../images/logo.svg";
import carbonNeutral from "../../images/lead-capture/Carbon-Neutral-Orders.png";
import InstallCustomize from "../../images/lead-capture/Install-and-customize.png";
import TrackShare from "../../images/lead-capture/track-and-share.png";
import customerLogos from "../../images/lead-capture/Customer-Logos.png";
import savePlanet from "../../images/lead-capture/save-the-planet.png";
import positiveExperience from "../../images/lead-capture/create-positive-experiences.png";
import enhanceBrand from "../../images/lead-capture/Enhance-your-brand.png";
import knowLogo from "../../images/lead-capture/know-logo.png";
import ecocartVideo from "../../images/lead-capture/ecocart-shopify-demo.mp4";
import phoneVideo from "../../images/lead-capture/phone-video.mp4";
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';

const LeadCapture = () => {
    init("user_BqeINgMWL2XI09ExMRiks");
    const [form, setForm] = useState({url: '', email: ''});

    const handleSubmit = (e) => {

        if (form.url && form.email){
            console.log(form);
            // need to save form data to wordpress here
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(String(form.email).toLowerCase())) {
              e.preventDefault();
              emailjs.send("service_a5iwdg8","template_23hcp75",{email:form.email,store_url:form.url});
              navigate('/app/getstarted/signup')
            }
        }
    }

    // Submit form if enter is pressed
    useEffect(() => {
        const listener = (e) => {
          if (e.code === "Enter" || e.code === "NumpadEnter") {
              handleSubmit(e)
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, [handleSubmit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(form => ({...form, [name]: value}));
    }

    return (
        <>
          <SEO title="Get Started" description="Add carbon neutral orders to your online store to attract and retain the next generation of eco-conscious consumers - all at no cost to you!" />
          <div className="lead-capture">
              <div className="lead-capture-header">
                <div className="lead-capture-logo-container">
                    <a href="https://ecocart.io/app">
                        <img src={logo} alt="logo" className="lead-capture-logo" />
                    </a>
                </div>
              </div>
                <section className="lead-capture-section-1">
                    <Container >
                        <Row>
                            <Col sm="5">
                                <h1 className="lead-capture-title">Get started with EcoCart</h1>
                                <h2 className="lead-capture-subtext">Add carbon neutral orders to your online store to attract and retain the next generation of eco-conscious consumers - all at no cost to you!</h2>
                                <Form className="lead-capture-form">
                                    <FormGroup>
                                        <FormControl className="lead-capture-input"
                                                    type="email"
                                                    placeholder="Email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    value={form.email}
                                                   />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControl className="lead-capture-input"
                                                    type="text"
                                                    placeholder="Your ecommerce store URL"
                                                    name="url"
                                                    onChange={handleChange}
                                                    value={form.url}
                                                />
                                    </FormGroup>
                                    <div className="btn-container">
                                        <Button onClick={handleSubmit} type="submit" className="quick-start-btn">Quick Start</Button>
                                    </div>
                                </Form>
                            </Col>
                            <Col sm="7">
                                <video className="ecocart-video"
                                        src={ecocartVideo}
                                        preload="auto"
                                        autoPlay
                                        loop
                                        muted>
                                    Demo of EcoCart Shopify app for carbon neutral shipping
                                </video>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="lead-capture-section-2">
                    <div className="shopify-logo-container">
                        <img width="500px" src={require(`../../images/lead-capture/shopify-review.svg`)} alt="shopify app store plugin"/>
                    </div>
                    <div className="customers-logo-container">
                        <img width="100%" className="customers-logo" src={customerLogos} alt="logos"/>
                    </div>
                </section>
                <section className="lead-capture-section-3">
                        <Row className="lead-capture-benefits-container">
                            <Col xs="12" sm="4" className="phone-box">
                                <img width="300px" src={InstallCustomize} alt="Amavara added EcoCart Shopify plugin to its e-commerce store"/>
                                <h2 className="benefits-header">Install & <br></br>Customize</h2>
                                <p className="benefits-text">Install the EcoCart Shopify app in minutes with just one click. We know how important brand look & feel is. So sit back and let us design and configure EcoCart for you to match your brand - all at no additional cost. </p>
                            </Col>
                            <Col xs="12" sm="4" className="phone-box">
                                <img width="300px" src={carbonNeutral} alt="EcoCart website with information about the Tri City Forest Project, a carbon sequestration project" />
                                <h2 className="benefits-header">Carbon Neutral Orders </h2>
                                <p className="benefits-text">EcoCart’s algorithm will calculate the carbon footprint of each of your orders and make them carbon neutral by directing the funds to certified carbon offset projects like planting trees or building wind farms. </p>
                            </Col>
                            <Col xs="12" sm="4" className="phone-box">
                                <img width="300px" src={TrackShare} alt="EcoCart Shopify app with sustainability metrics dashboard that helps businesses become more sustainable"/>
                                <h2 className="benefits-header">Track & Share Impact</h2>
                                <p className="benefits-text" >Track your impact using easily-digestible sustainability metrics and data visualizations within your personalized analytics dashboard, then share using our content marketing templates and certified sustainability badges.</p>
                            </Col>
                        </Row>
                </section>
                <section className="lead-capture-section-4">
                    <h1 className="stats-header">The new checkout standard</h1>
                    <p className="stats-text">Today’s eco-conscious consumers demand a way to shop without harming the planet. EcoCart aligns your values with your customers’, and leads to increases in brand loyalty and cart conversion.</p>
                    <Row>
                        <Col xs="12" sm="5" className="phone-video-column">
                            <video  height="600"
                                    width="550"
                                    preload="auto"
                                    autoPlay
                                    muted
                                    loop
                                    src={phoneVideo}
                                    className="phone-video">
                                Sustainable business APL e-commerce website checkout page with EcoCart carbon neutral shipping option
                            </video>
                        </Col>
                        <Col xs="12" sm="7" >
                            <div className="stats">
                                <div className="stats-box">
                                    <div className="stats-header">92%  </div>
                                    <div className="stats-muted">Are more likely to trust a company that supports environmental causes</div>
                                </div>
                                    <ProgressBar now={92} />
                                <div className="stats-box">
                                    <div className="stats-header">88%  </div>
                                    <div className="stats-muted"> Are more loyal to a company that supports environmental causes</div>
                                </div>
                                    <ProgressBar now={88} />

                                <div className="stats-box">
                                    <div className="stats-header">77%  </div>
                                    <div className="stats-muted">Have a positive image of a company that supports environmental causes</div>
                                </div>
                                    <ProgressBar now={87} />
                                <div>

                                    <p className="stats-quote">“Since installing EcoCart, the <strong>majority of our buyers have been adding the Carbon Neutral option</strong> to cart, and we've had great feedback from folks that love that we have this option.”
                                    — Julia McCraken, Co-founder
                                    </p>
                                </div>
                                <div>
                                <img width="85px" src={knowLogo} alt="logo"/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="lead-capture-section-5">
                    <Row className="benefits2-row">
                        <Col xs="12" sm="7" className="benefits2-img-container">
                            <img width="350px"  src={enhanceBrand} alt="EcoCart tells e-commerce user that their order has been made carbon neutral at checkout"/>
                        </Col>
                        <Col xs="12" sm="5" className="benefits2-desc-container">
                            <h1 className="benefits2-header">Enhance your brand</h1>
                            <p className="benefits2-text">Aligning with a cause is the most important thing you can do for your brand. EcoCart delivers a simple, seamless way to do just that.</p>
                        </Col>
                    </Row>
                    <Row className="middle-benefit benefits2-row">
                        <Col xs="12" sm="5" className="benefits2-desc-container">
                            <h1 className="benefits2-header">Create positive experiences </h1>
                            <p className="benefits2-text">Your customers will see you care about the planet at the most important step in their shopping experience. You’ll see increased retention and lower cart abandonment.</p>
                        </Col>
                        <Col xs="12" sm="7" className="benefits2-img-container">
                            <img width="350px" src={positiveExperience} alt="Siete foods uses EcoCart to donate to a forest protection project through environmentally friendly shipping"/>
                        </Col>
                    </Row>
                    <Row className="benefits2-row">
                        <Col xs="12" sm="7" className="benefits2-img-container save-planet">
                            <img className="save-planet" src={savePlanet} alt="EcoCart, an app available on the Shopify app store, has a donation project to prevent pollution"/>
                        </Col>
                        <Col xs="12" sm="5" className="benefits2-desc-container">
                            <h1 className="benefits2-header">Save the planet</h1>
                            <p className="benefits2-text">Become a sustainable business in minutes. Combat climate change by contributing to alternative energy, forestry, and other carbon offset projects.</p>
                        </Col>
                    </Row>
                </section>
                <section className="lead-capture-section-6">
                    <h1 className="cost-header">How much does it cost?</h1>
                    <Row className="cost-row">
                        <Col>
                            <h2 className="cost-header2">Merchant:</h2>
                            <div className="cost-text zero">$0</div>
                        </Col>
                        <Col>
                            <h2 className="cost-header2">Customers:</h2>
                            <div className="cost-text">1-2% of cart total</div>
                        </Col>
                    </Row>
                </section>
                <section className="lead-capture-section-7">
                <div className="form-bottom">
                    <h1 className="lead-capture-title">Get started with EcoCart</h1>
                    <h2 className="lead-capture-subtext">Add carbon neutral orders to your online store to attract and retain the next generation of eco-conscious consumers - all at no cost to you!</h2>
                    <Form className="lead-capture-form">
                        <FormGroup>
                            <FormControl  className="lead-capture-input"
                                        type="email"
                                        placeholder="Work Email"
                                        name="email"
                                        onChange={handleChange}
                                        value={form.email} />
                        </FormGroup>
                        <FormGroup>
                            <FormControl className="lead-capture-input"
                                        type="text"
                                        placeholder="Your ecommerce store URL"
                                        name="url"
                                        onChange={handleChange}
                                        value={form.url}/>
                        </FormGroup>
                        <div className="btn-container">
                            <Button onClick={handleSubmit} className="quick-start-btn">Quick Start</Button>
                        </div>

                    </Form>
                </div>
                </section>
           </div>
        </>
    );
};

export default LeadCapture;
