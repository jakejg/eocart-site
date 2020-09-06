import React from "react";
import {
  Nav,
  Col,
  Row,
  Container,
  Accordion,
  Button,
  Card,
} from "react-bootstrap";
import { useStaticQuery, graphql, Link } from "gatsby";
import DropdownComponent from "../components/General/dropdownComponent";
import { FaChevronDown } from "react-icons/fa";
import SEO from "../components/seo";
import Layout from "../components/layout";

const Category = (props) => {
  const { name, slug } = props.pageContext;
  const data = useStaticQuery(graphql`
    query {
      faqCategories: wordpress {
        ecocartFaqCategories(where: { orderby: TERM_ORDER }) {
          edges {
            node {
              id
              name
              slug
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
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="FAQs" />
      <div className="category_page">
        <Container>
          <Row>
            <Col sm md={3}>
              <DropdownComponent />
              <Nav variant="link" className="flex-column">
                {data.faqCategories.ecocartFaqCategories.edges.map((faq) => (
                  <Nav.Item key={faq.node.id}>
                    <Link
                      className={`nav-link ${
                        slug === faq.node.slug && "active"
                      }`}
                      to={`/category/${faq.node.slug}`}
                    >
                      {faq.node.name}
                    </Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm md={9}>
              <div className="tab_container">
                <div className="faqs">
                  <h2 className="title">{name}</h2>
                  {data.faqs.ecocartFaqs.edges.map((faq) =>
                    faq.node.ecocartFaqCategories.edges.map((cat) => {
                      if (cat.node.slug === slug) {
                        return (
                          <Accordion className="faq" key={faq.node.id}>
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
                        );
                      } else {
                        return "";
                      }
                    })
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Category;
