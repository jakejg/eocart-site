import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const TOS_US = () => {
  const data = useStaticQuery(graphql`
    query {
      tos: wordpress {
        pageBy(id: "cG9zdDoxNTY0") {
          id
          title(format: RENDERED)
          content
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title={data.tos.pageBy.title} />
      <div className="tos">
        <Container>
          <Row>
            <Col lg>
              <div class="page-heading">
                <h2>{data.tos.pageBy.title}</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg xs={12}>
              <div
                className="tos__content"
                dangerouslySetInnerHTML={{
                  __html: data.tos.pageBy.content,
                }}
              ></div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default TOS_US;
