import React from "react";
import {
  Tab,
  Nav,
  Col,
  Row,
  Container,
  Accordion,
  Button,
  Card,
} from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import DropdownComponent from "../components/General/dropdownComponent";
import { FaChevronDown } from "react-icons/fa";
import SEO from "../components/seo";
import Layout from "../components/layout";

const Category = () => {
  const data = useStaticQuery(graphql`
    query {
      faqCategories: wordpress {
        ecocartFaqCategories(where: { orderby: TERM_ORDER }) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
      faqs: wordpress {
        ecocartFaqs {
          edges {
            node {
              id
              title
              content
              ecocartFaqCategories {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const activeCat = "1";
  return (
    <Layout>
      <SEO title="FAQs" />
      <div className="category_page">
        <Container>
          <Tab.Container defaultActiveKey={activeCat ? activeCat : 1}>
            <Row>
              <Col sm={12} md={3}>
                <DropdownComponent />
                <Nav variant="link" className="flex-column">
                  {data.faqCategories.ecocartFaqCategories.edges.map(
                    (faq, index) => (
                      <Nav.Item key={index}>
                        <Nav.Link eventKey={faq.node.id}>
                          {faq.node.name}
                        </Nav.Link>
                      </Nav.Item>
                    )
                  )}
                </Nav>
              </Col>
              <Col sm={12} md={9}>
                <Tab.Content className="tab_container">
                  <Tab.Pane eventKey="1" className="faqs">
                    <h2 className="title">Getting Started</h2>
                    {data.faqs.ecocartFaqs.edges.map((faq, index) => (
                      <Accordion className="faq">
                        <Accordion.Toggle
                          className="faq_title"
                          as={Button}
                          variant="link"
                          eventKey={faq.node.id}
                        >
                          {faq.node.title}
                          <FaChevronDown />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={faq.node.id}>
                          <Card.Body
                            className="faq_body"
                            dangerouslySetInnerHTML={{
                              __html: faq.node.content,
                            }}
                          ></Card.Body>
                        </Accordion.Collapse>
                      </Accordion>
                    ))}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </Layout>
  );
};

export default Category;
