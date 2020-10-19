import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaArrowLeft } from "react-icons/fa";
import CTA from "../components/About/cta";

const Post = (props) => {
  const {
    id,
    postTitle,
    content,
    featuredImage,
    date,
    categories,
  } = props.pageContext;
  const getDate = (d) => {
    // const date = Date.parse(d);
    // let monthNames = [
    //   "Jan",
    //   "Feb",
    //   "Mar",
    //   "Apr",
    //   "May",
    //   "Jun",
    //   "Jul",
    //   "Aug",
    //   "Sep",
    //   "Oct",
    //   "Nov",
    //   "Dec",
    // ];
    // const postDate = new Date(date).getDate().toString();
    // const postMonth = new Date(date).getMonth().toString();
    // const monthName = monthNames[postMonth];
    // const postYear = new Date(date).getFullYear().toString();
    // return monthName + " " + postDate + ", " + postYear;

    let getDate = d.split(/[T ]/);
    let date = getDate[0];
    let parts = date.split("-");
    var mydate = new Date(parts[0], parts[1] - 1, parts[2]);

    return mydate.toDateString().replace(/^\S+\s/, "");
  };

  const data = useStaticQuery(graphql`
    query {
      recentPosts: wordpress {
        posts(first: 6) {
          edges {
            node {
              title
              id
              slug
              seo {
                metaDesc
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
      <SEO title={postTitle} description={data.recentPosts.posts.edges.map((post, index) => {return post.node.seo.metaDesc } />
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
                {data.recentPosts.posts.edges.map((post, index) => {
                  if (post.node.id === id) {
                    return null;
                  } else {
                    return (
                      <div key={index} className="recent-post">
                        <Link to={`/posts/${post.node.slug}`}>
                          <div className="recent-post__img">
                            <img
                              alt="recent post"
                              src={post.node.featuredImage.node.sourceUrl}
                            />
                          </div>
                          <h2 className="recent-post__title">
                            {post.node.title}
                          </h2>
                        </Link>
                      </div>
                    );
                  }
                })}
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
