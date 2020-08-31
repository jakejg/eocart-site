import React from "react";
import { Container, Row, Col, Accordion, Button, Card } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "How to use the EcoCart browser extension",
    answer:
      "EcoCart is a free browser extension that offsets the environmental impact of your online orders so you can shop sustainably. We partner with thousands of stores that you love to offer free carbon neutral shipping. All you have to do is download the EcoCart extension for Chrome, create an account, and start shopping. While you’re searching on Google, look for “Shop Sustainably” next to participating stores..[1]...or just let EcoCart notify you when a website you’re visiting supports carbon neutral shopping. Click the big green “make my order carbon neutral” button and your order will have a net-zero impact on the planet! It’s that easy.[2]Enjoy all the stores you love, rest assured that your online orders are not leaving a carbon footprint. You’ll earn EcoPoints that can go toward eco-rewards and gift cards.",
  },
  {
    id: 2,
    question: "How can I find stores to shop sustainably?",
    answer:
      "EcoCart offers a few ways to find stores that support sustainable shopping. With the extension installed, you can: 1. Just shop like normal and EcoCart will notify you when you’re in a store that supports carbon neutral shopping. 2. When you search for stores on Google, participating stores will say “Shop Sustainably” next to the website name. [1] 3. Or you can browse participating stores in the extension by clicking on the EcoCart plane icon on Chrome. You’ll see stores that are offering the most EcoPoints on the home tab and stores that are trending with other EcoCart users on the search tab. Or you can search for stores by name on the search tab. [4] 4. You don’t have any stores I shop at. We’re constantly adding new stores that support sustainable shopping. If you’re looking for a particular store, let us know and we’ll get them on board! Just click the contact us button in the bottom right of the screen, or write to us at hello@ecocart.io.",
  },
  {
    id: 3,
    question: "What on Earth is a carbon offset?",
    answer: "v1.0.0",
  },
  {
    id: 4,
    question: "What on Earth is a carbon offset?",
    answer: "v1.0.0",
  },
  {
    id: 5,
    question: "What on Earth is a carbon offset?",
    answer: "v1.0.0",
  },
  {
    id: 6,
    question: "What on Earth is a carbon offset?",
    answer: "v1.0.0",
  },
  {
    id: 7,
    question: "What on Earth is a carbon offset?",
    answer: "v1.0.0",
  },
  {
    id: 8,
    question: "What on Earth is a carbon offset?",
    answer: "v1.0.0",
  },
];

const Faqs = () => {
  return (
    <div className="faqs_section">
      <Container>
        <h2>Frequently asked:</h2>
        <Row>
          <Col lg={12} md={12} sm={12} className="faqs">
            {faqs.map((faq) => (
              <Accordion className="faq" key={faq.id}>
                <Accordion.Toggle
                  className="faq_title"
                  as={Button}
                  variant="link"
                  eventKey={faq.id}
                >
                  {faq.question}
                  <FaChevronDown />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={faq.id}>
                  <Card.Body className="faq_body">{faq.answer}</Card.Body>
                </Accordion.Collapse>
              </Accordion>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faqs;
