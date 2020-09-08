import React from "react";
import Layout from "../components/layout";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../components/seo";
import Grid from "../components/About/grid";
import Info from "../components/About/info";
import Cta from "../components/About/cta";

const About = () => {
  return (
    <Layout>
      <SEO title="About Us" />

      <div className="about">
        <section className="about__hero">
          <Container>
            <Row>
              <Col sm>
                <h6 className="about__hero-sub_heading">our mission</h6>
                <h2 className="about__hero-heading">A carbon neutral future</h2>
              </Col>
            </Row>
            <Grid />
            <Row className="justify-content-center">
              <Col lg="10" sm style={{ margin: "0 auto" }}>
                <h3 class="about__hero-sheading">
                  We believe everyone should have the information they need to
                  make the best decisions with their money
                </h3>
                <div className="about__hero-content">
                  <p>
                    We make fighting climate change simple, cost-effective, and
                    accessible for everyone.
                  </p>
                  <p>
                    We love shopping — But it’s a huge contributor to climate
                    change. Everyday in the U.S. alone, online orders travel
                    about the same distance as going to the moon and back
                    ...133,000 times! EcoCart is here to help. Every time you
                    shop at one of our 10,000+ partner stores, we’ll
                    automatically offset the environmental impact of your order.
                    Plus, you’ll earn EcoPoints that you can use for gift cards
                    or to make an even bigger impact on the planet. The best
                    part? EcoCart is always FREE.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="info">
          <Container>
            <Row className="mb-5">
              <Col lg>
                <h1>Our community impact</h1>
              </Col>
            </Row>
            <Row>
              <Info />
            </Row>
          </Container>
        </section>
        <section className="business">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} md>
                <div className="business__grid">
                  <div className="div1"></div>
                  <div className="div2"></div>
                </div>
                <div className="business__grid2">
                  <div className="div3"></div>
                  <div className="div4"></div>
                </div>
              </Col>
              <Col lg={6} md className="mt-5 business__content">
                <h2>Our buinsess</h2>
                <div className="content">
                  <p>
                    We will never sell your data. We’re in the business of
                    saving the planet, not violating your privacy.
                  </p>
                  <p>
                    We earn a commission when you shop with our 10,000+ brand
                    partners, and then use it to fund certified carbon offset
                    projects on your behalf.
                  </p>
                  <p>
                    With EcoCart, you don’t have to choose between helping the
                    planet and shopping at your favorite stores.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Cta />
      </div>
    </Layout>
  );
};

export default About;
