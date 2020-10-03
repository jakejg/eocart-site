import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CTA from "../components/About/cta";

const Blog = () => {
  const wpPosts = useStaticQuery(graphql`
    query {
      wordpress {
        posts(first: 100) {
          edges {
            node {
              title
              slug
              excerpt
              categories {
                edges {
                  node {
                    name
                  }
                }
              }
              featuredImage {
                node {
                  sourceUrl(size: THUMBNAIL)
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
      <SEO title="Best Practices for Being a Sustainable Business" />
      <div className="blog-page">
        <Container>
          <Row>
            <Col lg>
              <div class="page-heading">
                <h2>Sustainability News, Tips, and Strategies</h2>
              </div>
            </Col>
          </Row>
          <div className="blog-page__grid">
            {wpPosts.wordpress.posts.edges.map((post, index) => (
              <div className="blog-page__post">
                <Link to={`/posts/${post.node.slug}`}>
                  <div className="blog-page__post-img">
                    <img
                      alt="featured"
                      src={post.node.featuredImage.node.sourceUrl}
                    />
                  </div>
                  <div className="blog-page__post___inner">
                    <div className="blog-page__post-categories">
                      {post.node.categories.edges.map((category, i) => (
                        <span key={i}>{category.node.name}</span>
                      ))}
                    </div>
                    <div className="blog-page__post-title">
                      <h2>{post.node.title}</h2>
                    </div>
                    <div
                      className="blog-page__post-excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.node.excerpt,
                      }}
                    ></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <CTA />
    </Layout>
  );
};

export default Blog;
