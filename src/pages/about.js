import React from "react";
import Layout from "../components/layout";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../components/seo";
import Grid from "../components/About/grid";
import Info from "../components/About/info";

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
            <Row class="justify-content-center">
              <Col lg="10" sm style={{ margin: "0 auto" }}>
                <h3 class="about__hero-sheading">
                  We believe everyone should have the information they need to
                  make the best decisions with their money
                </h3>
                <div class="about__hero-content">
                  <p>
                    It’s easy to spend money online. But getting the most value
                    is a different story. Take shopping for example. Finding the
                    best deal takes time, prices change depending on the buyer,
                    and payment methods aren’t always in your best interest.
                  </p>
                  <p>We don’t think that’s fair.</p>
                  <p>
                    Honey is here to help. We give everyone the tools it takes
                    to find the best savings, perks, and all around value. And
                    we make them free and easy-to-use. So you can always spend
                    with confidence.
                  </p>
                  <p>
                    If it involves spending money online, we’ll be there to
                    help.
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
      </div>
    </Layout>
  );
};

export default About;
