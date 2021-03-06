import React from "react";
import {
  Nav,
  Col,
  Row,
  Container,
  Card,
} from "react-bootstrap";
import { useStaticQuery, graphql, Link } from "gatsby";
import DropdownComponent from "../components/General/dropdownComponent";
import SEO from "../components/seo";
import Layout from "../components/layout";
import ContactWidget from "../components/General/contactWidget";

const Faq = (props) => {
  const { title, content, slug } = props.pageContext;
  const data = useStaticQuery(graphql`
    query {
      faqCategories: wordpress {
        ecocartFaqCategories(where: { orderby: TERM_ORDER }, first: 100) {
          edges {
            node {
              id
              name
              slug
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
            <Col sm={12} md={3}>
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
            <Col sm={12} md={9}>
              <div className="tab_container">
                <div className="faqs">
                  <Card.Header className="sfaq_header">
                    <h2>{title}</h2>
                  </Card.Header>

                  <Card.Body
                    className="sfaq_body"
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                  ></Card.Body>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ContactWidget />
    </Layout>
  );
};

export default Faq;
