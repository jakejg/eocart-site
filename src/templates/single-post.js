import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaArrowLeft } from "react-icons/fa";
import CTA from "../components/About/cta";

const Post = (props) => {
  const {
    postTitle,
    content,
    featuredImage,
    date,
    categories,
  } = props.pageContext;
  const getDate = (date) => {
    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const postDate = new Date(date).getDate();
    const postMonth = new Date(date).getMonth();
    const monthName = monthNames[postMonth];
    const postYear = new Date(date).getFullYear();
    return monthName + " " + postDate + ", " + postYear;
  };

  const data = useStaticQuery(graphql`
    query {
      recentPosts: wordpress {
        posts(last: 5) {
          edges {
            node {
              title
              id
              slug
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
      <SEO title={postTitle} />
      <div class="single-post" id="blog">
        <Container>
          <Row>
            <Col md={8}>
              <Row>
                <Col lg>
                  <Link to="/blog" className="single-post__back">
                    <span>
                      <FaArrowLeft />
                    </span>
                    <p>Back to blog</p>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col lg>
                  <div className="single-post__img">
                    <img alt="featured" src={featuredImage} />
                  </div>
                  <div className="page-heading">
                    <h2>{postTitle}</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="single-post__info">
                    <div className="single-post__info___categories">
                      {categories.nodes.map((cat, index) => (
                        <p
                          className="single-post__info___categories-category"
                          key={index}
                        >
                          {cat.name}
                          <span>&#44;&nbsp;</span>
                        </p>
                      ))}
                    </div>
                    |{" "}
                    <p className="single-post__info___date">{getDate(date)}</p>
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
            </Col>
            <Col md={4}>
              <div className="recent-posts">
                <h2 className="recent-posts__title">Recent Posts</h2>
                {data.recentPosts.posts.edges.map((post, index) => (
                  <div key={index} className="recent-post">
                    <Link to={`/posts/${post.node.slug}`}>
                      <div className="recent-post__img">
                        <img
                          alt="recent post"
                          src={post.node.featuredImage.node.sourceUrl}
                        />
                      </div>
                      <h2 className="recent-post__title">{post.node.title}</h2>
                    </Link>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
        <CTA />
      </div>
    </Layout>
  );
};

export default Post;
