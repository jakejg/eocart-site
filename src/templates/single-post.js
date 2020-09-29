import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Post = (props) => {
  const { postTitle, content, featuredImage } = props.pageContext;

  return (
    <Layout>
      <SEO title={postTitle} />
      <div class="single-post">
        <Container>
          <Row>
            <Col lg>
              <div className="page-heading">
                <h2>{postTitle}</h2>
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
