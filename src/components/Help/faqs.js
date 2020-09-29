import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Container, Row, Col, Accordion, Button, Card } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";

const Faqs = () => {
  const faqsImages = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "helpFaqs/questions1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "helpFaqs/questions2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "helpFaqs/questions4.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image13: file(relativePath: { eq: "helpFaqs/questions13.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="faqs_section">
      <Container>
        <h2>Frequently asked:</h2>
        <Row>
          <Col lg={12} md={12} sm={12} className="faqs">
            <Accordion className="faq">
              <Accordion.Toggle
                className="faq_title"
                as={Button}
                variant="link"
                eventKey="1"
              >
                How to use the EcoCart browser extension
                <FaChevronDown />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="faq_body">
                  <p>
                    EcoCart is a free browser extension that offsets the
                    environmental impact of your online orders so you can shop
                    sustainably. We partner with thousands of stores that you
                    love to offer free carbon neutral shipping. All you have to
                    do is download the{" "}
                    <a
                      href="https://chrome.google.com/webstore/detail/ecocart-carbon-neutral-sh/oiafedhhdhinjnianpfeaenmchnknchi"
                      target="_blank"
                    >
                      EcoCart extension for Chrome
                    </a>
                    , create an account, and start shopping.
                  </p>
                  <p>
                    While you’re searching on Google, look for “Shop
                    Sustainably” next to participating stores...
                  </p>
                  <Img fluid={faqsImages.image1.childImageSharp.fluid} />
                  <p>
                    ...or just let EcoCart notify you when a website you’re
                    visiting supports carbon neutral shopping. Click the big
                    green “make my order carbon neutral” button and your order
                    will have a net-zero impact on the planet! It’s that easy.
                  </p>
                  <Img fluid={faqsImages.image2.childImageSharp.fluid} />
                  <p>
                    Enjoy all the stores you love, rest assured that your online
                    orders are not leaving a carbon footprint. You’ll earn
                    EcoPoints that can go toward eco-rewards and gift cards.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>

            <Accordion className="faq">
              <Accordion.Toggle
                className="faq_title"
                as={Button}
                variant="link"
                eventKey="3"
              >
                What on Earth is a carbon offset?
                <FaChevronDown />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="faq_body">
                  <p>
                    Carbon offsets are a practical and effective way to reduce
                    the effects of climate change by funding renewable energy,
                    forestry, or clean water projects. These projects reduce
                    emissions of carbon dioxide or other greenhouse gases in
                    order to compensate for emissions made elsewhere, like the
                    emissions created from ordering something online. EcoCart
                    calculates the emissions created from your online orders and
                    donates the exact dollar amount required to reduce those
                    emissions directly to these projects on your behalf.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>

            <Accordion className="faq">
              <Accordion.Toggle
                className="faq_title"
                as={Button}
                variant="link"
                eventKey="4"
              >
                What do you mean carbon neutral?
                <FaChevronDown />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="faq_body">
                  <p>
                    When we say orders will be “carbon neutral,” that means that
                    we will eliminate, capture, or otherwise mitigate all of the
                    carbon emissions created from shipping your online orders.
                    “Net zero” is another term you might hear and it’s simply
                    another way of describing what happens with carbon
                    offsetting.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>

            <Accordion className="faq">
              <Accordion.Toggle
                className="faq_title"
                as={Button}
                variant="link"
                eventKey="7"
              >
                What are EcoPoints?
                <FaChevronDown />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body className="faq_body">
                  <p>
                    EcoPoints are what make up the free EcoCart rewards system.
                    You earn EcoPoints every time you make your order carbon
                    neutral with EcoCart that you can redeem for earth-saving
                    rewards like planting trees or giving clean water to
                    families. <strong>OR</strong> you can use your EcoPoints
                    just like cash, and redeem them for gift cards at your
                    favorite stores!
                  </p>
                  <p>
                    You'll often see EcoPoints multipliers next to stores that
                    indicate you'll earn 2x or 3x the typical amount of
                    EcoPoints when shopping at that store. Without an EcoPoints
                    multiplier, $1 spent = 10 EcoPoints.
                  </p>
                  <Img fluid={faqsImages.image13.childImageSharp.fluid} />
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
            <Accordion className="faq">
              <Accordion.Toggle
                className="faq_title"
                as={Button}
                variant="link"
                eventKey="2"
              >
                How can I find stores to shop sustainably?
                <FaChevronDown />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="faq_body">
                  <h2>
                    EcoCart offers a few ways to find stores that support
                    sustainable shopping. With the extension installed, you can:
                  </h2>
                  <ol>
                    <li>
                      Just shop like normal and EcoCart will notify you when
                      you’re in a store that supports carbon neutral shopping.
                    </li>
                    <li>
                      When you search for stores on Google, participating stores
                      will say “Shop Sustainably” next to the website name.
                    </li>
                    <Img fluid={faqsImages.image1.childImageSharp.fluid} />
                    <li>
                      Or you can browse participating stores in the extension by
                      clicking on the EcoCart plane icon on Chrome. You’ll see
                      stores that are offering the most EcoPoints on the home
                      tab and stores that are trending with other EcoCart users
                      on the search tab. Or you can search for stores by name on
                      the search tab.
                    </li>
                    <Img fluid={faqsImages.image4.childImageSharp.fluid} />
                  </ol>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>

            <Accordion className="faq">
              <Accordion.Toggle
                className="faq_title"
                as={Button}
                variant="link"
                eventKey="5"
              >
                How do you determine the carbon footprint of each order?
                <FaChevronDown />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="faq_body">
                  <p>
                    Our algorithm uses the unique characteristics of each order,
                    including product type, shipping distance, and item weight
                    to estimate the shipping emissions created by that order.
                    Since each store uses a different shipping method, we assume
                    a standard mix of shipping transportation that includes sea,
                    air, and truck.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
            <Accordion className="faq">
              <Accordion.Toggle
                className="faq_title"
                as={Button}
                variant="link"
                eventKey="6"
              >
                What do you do with my data?
                <FaChevronDown />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="faq_body">
                  <p>
                    We will do not and will never sell your data. Unlike other
                    online shopping browser extensions, we’re in the business of
                    saving the planet, not violating your privacy. We promise to
                    never give your data to third-parties. We’ll only use your
                    data in ways you’d expect, like improving our customer
                    experience, which we explain in our{" "}
                    <Link to="/privacy-policy">privacy policy</Link>.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>

            <Accordion className="faq">
              <Accordion.Toggle
                className="faq_title"
                as={Button}
                variant="link"
                eventKey="8"
              >
                How do I know my donations are going to the right place?
                <FaChevronDown />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="8">
                <Card.Body className="faq_body">
                  <p>
                    With your help, we’re finding projects that are truly
                    additive (meaning new), permanent, and without unintended
                    consequences (i.e., creating more carbon elsewhere, like a
                    game of Whack-a-Mole). All of our projects are independently
                    certified to internationally recognized standards:
                  </p>
                  <p>
                    Every project we fund is triple-verified.
                    Triple-verification means:
                  </p>
                  <ol>
                    <li>
                      The project’s financials, management team, project site,
                      and carbon reduction method are carefully vetted.
                    </li>
                    <li>
                      At least one of the world’s major carbon standards reviews
                      the project.
                    </li>
                    <li>
                      Global Offset Research verifies the project against a
                      second list of international standards.
                    </li>
                  </ol>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faqs;
