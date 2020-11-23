import React from "react";
import { Container, Row, Col, Card, Accordion, Button } from "react-bootstrap";

// COMPONENT IMPORTS
import Landing from "../components/Landing";
import LandingSharing from "../components/LandingSharing";
import AffiliateStores from "../components/Landing/AffiliateStores";
import WhyEcocart from "../components/Landing/WhyEcocart";
import ImpactBox from "../components/Landing/ImpactBox";
import FaqBox from "../components/Landing/Faq";
import Testimonial from "../components/Landing/Testimonial";
import Video from "../components/Landing/Video";
import ProjectBox from "../components/Landing/ProjectBox";
import StarIcon from "mdi-react/StarIcon";
import Cta from "../components/About/cta";

import { FaChevronDown } from "react-icons/fa";

//MEDIA IMPORTS
import howItWorks from "../videos/how-it-works.mp4";
import tree from "../images/tree.png";
import waterFaucet from "../images/projects/water-faucet.png";
import kite from "../images/projects/kite.png";
import earth from "../images/earth.png";
import waterProj from "../images/projects/water-project.png";
import forestProj from "../images/projects/forest-project-full.jpg";
import triCityCollage from "../images/projects/tri-city-collage-v2.png";
import cambodiaCollage from "../images/projects/cambodia-collage-v2.png";
import turkeyWindCollage from "../images/projects/turkey-wind-collage-v2.png";
import windProj from "../images/projects/cw.png";
import un6 from "../images/projects/UN-Sustainability-Goal-6.png";
import un7 from "../images/projects/UN-Sustainability-Goal-7.png";
import un8 from "../images/projects/UN-Sustainability-Goal-8.png";
import un9 from "../images/projects/UN-Sustainability-Goal-9.png";
import un13 from "../images/projects/UN-Sustainability-Goal-13.png";
import un14 from "../images/projects/UN-Sustainability-Goal-14.png";
import un15 from "../images/projects/UN-Sustainability-Goal-15.png";
import verifiedCarbon from "../images/projects/verified-carbon-offset.png";
import energyGlobe from "../images/projects/Energy-Globe.jpg";
import americanCarbon from "../images/projects/american-carbon-registry.jpg";
import goldStandard from "../images/projects/gold-standard.png";
import logo from "../images/logo.svg";
import SEO from "../components/seo";

// STATIC IMPORTS
import reviews from "../static/reviews";
import faqs from "../static/faqs";

import Layout from "../components/layout";
import { useMediaQuery } from 'react-responsive'
import { Link } from "gatsby";
import {BrowserView, MobileView} from 'react-device-detect';
var profileData = "";
fetch("https://ecocart.io/api/profile",{method: "GET",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Cache': 'no-cache',
    'Access-Control-Allow-Credentials':'true'
  },
  credentials: 'same-origin'})
.then(response => response.json())
.then(data => profileData = data);


var IndexPage;
IndexPage = () => (
  <Layout>
    <SEO title="Carbon Neutral Shopping" />
    <Landing logo={logo} />
    <section id="order-class">
      <section id="how-it-works">
        <Container fluid>
          <Video
            video={howItWorks}
            stepOne="1"
            stepTwo="5"
            stepThree="14"
          ></Video>
        </Container>
      </section>
      <AffiliateStores />
    </section>

    <Cta />
    <WhyEcocart />

    {/* Impact section */}
    <section id="impact">
      <Container>
        <Row className="d-flex justify-content-center no-gutters">
          <h1>EcoCart community impact</h1>
        </Row>
        <Row className="d-flex justify-content-center no-gutters flex-wrap">
          <div className="d-flex justify-content-center impact-box-container flex-md-row flex-column">
            <ImpactBox
              start={0}
              count={4123477}
              duration={4}
              subtitle={
                <>
                  lbs of CO<sub>2</sub> offset
                </>
              }
              icon={earth}
            ></ImpactBox>
            <ImpactBox
              start={0}
              count={135194}
              duration={3}
              subtitle="trees saved"
              icon={tree}
            ></ImpactBox>
          </div>
        </Row>
        <Row className="no-gutters">
          <Col style={{ borderTop: "1px solid black" }}></Col>
          <Col xs={12} sm={12}>
            <div className="impact-subtitle-container">
              <h2 className="center impact-sub-heading">
                <span>We do this by...</span>
              </h2>
            </div>
          </Col>
          <Col style={{ borderTop: "1px solid black" }}></Col>
        </Row>
      </Container>

      {/* Projects EcoCart is involved with */}
      <Container className="project-boxes">
        <Row className=" d-flex flex-column align-items-center">
          <ProjectBox
            projectImg={forestProj}
            title="Tri-City Forest Project"
            location="Massachusetts"
            type="Forest Protection"
            typeIcon={tree}
            description="Protects a Spruce forest in Massachusetts that captures over 100,000 metric tonnes of harmful carbon dioxide every year"
            bullets={[
              "Captures a significant number of carbon emissions each year",
              "Protects the habitat of a variety of threatened mammals, birds, and reptiles",
              "Experienced forest management project operator",
            ]}
            verifications={[americanCarbon, verifiedCarbon]}
            developments={[un6, un13, un14, un15]}
            collageImg={triCityCollage}
          ></ProjectBox>

          <ProjectBox
            projectImg={waterProj}
            title="Providing clean water"
            location="Cambodia"
            type="Water Purification"
            typeIcon={waterFaucet}
            description="Provides locally made ceramic water purifiers to over 1 million Cambodians. By filtering water instead of boiling it over a wood burning fire, these purifiers prevent 90,000 tonnes of carbon emissions and protect 450 hectares of Cambodian forest every year. That’s 320 football fields worth of protected habitat!"
            bullets={[
              "Reduces air pollution while protecting forests and local ecosystems",
              "Creates jobs and economic growth in under-served communities",
              "Reduces child illnesses and deaths caused by contaminated water and indoor pollution",
            ]}
            verifications={[energyGlobe, goldStandard]}
            developments={[un6, un8, un13, un15]}
            collageImg={cambodiaCollage}
          ></ProjectBox>

          <ProjectBox
            projectImg={windProj}
            title="Creating wind energy"
            location="Turkey"
            type="Wind Energy"
            typeIcon={kite}
            description="Generates clean energy to displace fossil fuel-based grid power. Before the introduction of wind power, the primary contributor to the local grid was power plants that burn fossil fuels. This project installs 94 new wind turbines to provide 360,000 MWh of reliable and clean energy to the grid"
            bullets={[
              "Displaces fossil fuel-based energy",
              "Diversifies the country’s energy balance and helps address demand supply gaps",
              "Alleviates poverty in the local community by providing construction and operations jobs",
            ]}
            verifications={[goldStandard]}
            developments={[un7, un8, un9, un13]}
            collageImg={turkeyWindCollage}
          ></ProjectBox>
        </Row>
      </Container>
    </section>

    {/* Review from customers */}
    <section id="testimonials">
      <h1 className="mb-3">See why people love us</h1>
      <StarIcon size={38} color="rgb(12, 60, 42)" />
      <StarIcon size={38} color="rgb(12, 60, 42)" />
      <StarIcon size={38} color="rgb(12, 60, 42)" />
      <StarIcon size={38} color="rgb(12, 60, 42)" />
      <StarIcon size={38} color="rgb(12, 60, 42)" />
      {/* <i></i> */}
      <Container>
        <Testimonial reviews={reviews}></Testimonial>
      </Container>
    </section>
    <section className="faqs_section faqs-homepage">
      <Container>
        <Row className="justify-content-center">
          <Col xs>
            <h1>Questions?</h1>
          </Col>
        </Row>
        <Row>
          {faqs.map((faq, index) => (
            <Col lg={12} md={12} sm={12} className="faqs" key={index}>
              <Accordion className="faq">
                <Accordion.Toggle
                  className="faq_title"
                  as={Button}
                  variant="link"
                  eventKey={faq.id}
                >
                  {faq.title}
                  <FaChevronDown />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={faq.id}>
                  <Card.Body className="faq_body">
                    <p>{faq.content}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center mt-5">
          <Col sm>
            <Link className="more-faqs" to="/help">
              <b>More FAQs</b>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="cta">
      <Container>
        <Row>
          <Col sm>
            <h2>
              Ready to start
              <br />
              shopping sustainably?
            </h2>
            <a
              className="btn navbar-button"
              size="small"
              href="https://chrome.google.com/webstore/detail/ecocart-carbon-neutral-sh/oiafedhhdhinjnianpfeaenmchnknchi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Add to Chrome</strong> — It's Free!
            </a>
          </Col>
        </Row>
        <div id="hubspotForm2" class="hubForm2"></div>
      </Container>
    </section>
  </Layout>
);



export default IndexPage;
