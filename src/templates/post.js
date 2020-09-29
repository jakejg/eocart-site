import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/SEO";

const Post = (props) => {
  const { title, content, featuredImage } = props.pageContext;

  return (
    <Layout>
      <SEO title={title} />
      <div class="single-post">
        <Container>
          <Row>
            <Col lg>
              <div className="page-heading">
                <h2>{title}</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg>
              <div className="single-post__img">
                <img alt="featured" src={featuredImage} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                className="single-post__content"
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              ></div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Post;
