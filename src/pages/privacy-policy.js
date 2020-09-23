import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const PrivacyPolicy = () => {
  const data = useStaticQuery(graphql`
    query {
      pp: wordpress {
        pageBy(id: "cG9zdDoxNTcy") {
          id
          title(format: RENDERED)
          content
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title={data.pp.pageBy.title} />
      <div className="privacy-policy">
        <Container>
          <Row>
            <Col lg>
              <div class="page-heading">
                <h2>{data.pp.pageBy.title}</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg xs={12}>
              <div
                className="privacy-policy__content"
                dangerouslySetInnerHTML={{
                  __html: data.pp.pageBy.content,
                }}
              ></div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
