import React, { useState } from "react";
import { Link } from "gatsby";
import { Container, Row, Col, FormGroup, Button, Form, FormControl, ProgressBar } from "react-bootstrap";
import SEO from "../components/seo";
import '../styles/pages/_leadcapture.scss';
import logo from "../images/logo.svg";
import carbonNeutral from "../images/lead-capture/Carbon-Neutral-Orders.png";
import InstallCustomize from "../images/lead-capture/Install-and-customize.png";
import TrackShare from "../images/lead-capture/track-and-share.png";
import customerLogos from "../images/lead-capture/Customer-Logos.png";
import savePlanet from "../images/lead-capture/save-the-planet.png";
import positiveExperience from "../images/lead-capture/create-positive-experiences.png";
import enhanceBrand from "../images/lead-capture/Enhance-your-brand.png";
import shopifyReview from "../images/lead-capture/shopify-review.png";
import shopifyLogo from "../images/lead-capture/shopify-logo.png";
import knowLogo from "../images/lead-capture/know-logo.png";

const LeadCapture = () => {
    const [showSubmitScreen, setShowSubmitScreen] = useState(false);
    const [form, setForm] = useState({url: '', email: ''});

    const handleSubmit = (e) => {

        if (form.url && form.email){
            setShowSubmitScreen(true);
            console.log(form);
        }
    }

    // Submit form if enter is pressed
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(form => ({...form, [name]: value}));
    }

    return (
        <>
          <SEO title="leadCapture" />
          <div className="lead-capture">
                <Link className="logo-link" to="/">
                        <img src={logo} alt="logo" className="navbar--logo u-logo" />
                </Link>
                <div className="top-space"></div>
                {!showSubmitScreen && 
                <>
                <section className="lead-capture-section-1">
                    
                    <Container >
                        <Row>
                            <Col sm="5">
                                <h1 className="lead-capture-title">Get started with EcoCart</h1>
                                <h2 className="lead-capture-subtext">Attract and retain the next generation of eco-conscious consumers by offering them carbon neutral orders. And did we mention it’s completely free </h2>
                                <Form className="lead-capture-form">
                                    <FormGroup>
                                        <FormControl className="lead-capture-input" 
                                                    type="email" 
                                                    placeholder="Work Email"
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
                                        <Button onClick={handleSubmit} className="quick-start-btn">Quick Start</Button>
                                    </div>
                                </Form>
                            </Col>
                            <Col sm="7">
                                    <iframe title="ecocart-video" className="ecocart-video" src="https://www.youtube.com/embed/nsk9e9ZWRe8?start=77&end=92">
                                    </iframe>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="lead-capture-section-2">
                    <Row className="lead-capture-benefits-container">
                        <Col className="phone-box">
                            <img width="200px" src={carbonNeutral} />
                            <h2 className="benefits-header">Install & Customize</h2>
                            <p className="benefits-text">Simply install the EcoCart Shopify app in one click. We know how important brand look & feel is. So sit back and let us design and configure EcoCart for you to match your brand - all at no additional cost. </p>
                        </Col>
                        <Col className="phone-box">
                            <img width="200px" src={InstallCustomize} />
                            <h2 className="benefits-header">Carbon Neutral Orders </h2>
                            <p className="benefits-text">EcoCart’s algorithm will calculate the carbon footprint of each of your orders and make them carbon neutral by directing the funds to certified carbon offset projects like planting trees or building wind farms. </p>
                        </Col>
                        <Col className="phone-box">
                            <img width="200px" src={TrackShare} />
                            <h2 className="benefits-header">Track & Share</h2>
                            <p className="benefits-text" >Track your impact using easily-digestible sustainability metrics and data visualizations within your personalized analytics dashboard, then share using our content marketing templates and certified sustainability badges. Because saving the planet is definitely something to brag about!</p>
                        </Col>
                    </Row>
                </section>
                <section className="lead-capture-section-3">
                    <h1 className="stats-header">The new checkout standard</h1>
                    <p className="stats-text">Today’s eco-conscious consumers demand a way to shop without harming the planet. EcoCart aligns your values with your customers’, and leads to increases in brand loyalty and cart conversion.</p>
                    <Row>
                        <Col >
                        {/* <video  height="540"
                                width="400"
                                autoPlay
                                loop>
                            <source src={aplPhone} type="video/mp4" />
                                Your browser does not support the video tag.
                        </video> */}
                        </Col>
                        <Col >
                            <div className="stats">
                                <div className="stats-box">
                                    <div className="stats-header">92%  </div>
                                    <div className="stats-muted">Are more likely to trust a company that supports environmental causes</div>
                                </div>
                                    <ProgressBar now={92} />
                                <div className="stats-box">
                                    <div className="stats-header">88%  </div>
                                    <div className="stats-muted">Will be more loyal to a company that supports environmental causes</div>
                                </div>
                                    <ProgressBar now={88} />
                                
                                <div className="stats-box">
                                    <div className="stats-header">77%  </div>
                                    <div className="stats-muted">Have a positive image of a company that supports environmental causes</div>
                                </div>
                                    <ProgressBar now={87} />
                                <div>
                                    <p className="stats-quote">“Since installing EcoCart, the majority of our buyers have been adding the Carbon Neutral option to cart, and we've had great feedback from folks that love that we have this option available to them.” 
                                    - Julia McCraken, Co-founder, Know Headphones  
                                    </p>
                                </div>
                                <div>
                                <img width="60px" src={knowLogo}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="lead-capture-section-4">
                    <h1 className="customers-header">Over 200+ happy customers</h1>
                    <div className="shopify-logo-container">
                        <img width="200px" src={shopifyReview} />
                    </div>
                    <div className="customers-logo-container">
                        <img width="100%" className="customers-logo" src={customerLogos} />
                    </div>
                </section>

                <section className="lead-capture-section-5">
                    <Row>
                        <Col xs="12" sm="7" className="benefits2-img-container">
                            <img height="400px"  src={enhanceBrand} />
                        </Col>
                        <Col xs="12" sm="5" className="benefits2-desc-container">
                            <h1 className="benefits2-header">Enhance your brand</h1>
                            <p className="benefits2-text">Aligning with a cause is the most important thing you can do for your brand. EcoCart delivers a simple, seamless way to do just that.</p>
                        </Col>
                    </Row>
                    <Row className="middle-benefit">
                        <Col xs="12" sm="5" className="benefits2-desc-container">
                            <h1 className="benefits2-header">Create positive experiences </h1>
                            <p className="benefits2-text">Your customers will see you care about the planet at the most important step in their shopping experience. You’ll see increased retention and lower cart abandonment.</p>
                        </Col>
                        <Col xs="12" sm="7" className="benefits2-img-container">
                            <img height="400px" src={positiveExperience} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" sm="7" className="benefits2-img-container">
                            <img height="200px" src={savePlanet} />
                        </Col>
                        <Col xs="12" sm="5" className="benefits2-desc-container">
                            <h1 className="benefits2-header">Save the planet</h1>
                            <p className="benefits2-text">Do good in the world by doing well in business. Combat climate change by contributing to alternative energy, forestry, and other carbon offset projects</p>
                        </Col>
                    </Row>
                </section>
                <section className="lead-capture-section-6">
                    <h1 className="cost-header">How much does it cost?</h1>
                    <Row className="cost-row">
                        <Col>
                            <h2 className="cost-header2">Merchant</h2>
                            <div className="cost-text">$0</div>
                        </Col>
                        <Col>
                            <h2 className="cost-header2">Customers</h2>
                            <div className="cost-text">1-2% of cart total</div>
                        </Col>
                    </Row>
                </section>
                <section className="lead-capture-section-7">
                <div className="form-bottom">
                    <h1 className="lead-capture-title">Get started with EcoCart</h1>
                    <h2 className="lead-capture-subtext">Attract and retain the next generation of eco-conscious consumers by offering them carbon neutral orders. And did we mention it’s completely free </h2>
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
            </>
            }
            {showSubmitScreen &&
                <div className="happy-customers">
                    <div>
                        <h1 className="happy-customers-header">Happier customers are 10 minutes away</h1>
                        <p className="happy-customers-text">We’ll reach out to help you set up EcoCart. You can also click install to add the EcoCart app to Shopify and start onboarding now.</p>
                    </div>
                    <div className="shopfiy-container">
                        <img className="shopify-logo" src={shopifyLogo}></img>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <a href="https://apps.shopify.com/ecocart?surface_detail=ecocart&surface_inter_position=1&surface_intra_position=2&surface_type=search" className="quick-start-btn btn">INSTALL</a>
                    </div>
               </div>
            }
           </div>      
        </>
    );
};

export default LeadCapture;
