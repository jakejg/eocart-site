import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Container } from "react-bootstrap";
import Globe from "../../images/globe.svg";
import People from "../../images/people.svg";
import Trees from "../../images/trees.svg";
import EcoPoints from "../../images/echopoints.svg";
import Plane from "../../images/plane.svg";
import Privacy from "../../images/privacy.svg";

const Categories = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpress {
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
    }
  `);

  const getImages = (slug) => {
    if (slug === "getting-started") {
      return <img className="category_img" alt="category logo" src={Globe} />;
    }
    if (slug === "account-question") {
      return <img className="category_img" alt="category logo" src={People} />;
    }
    if (slug === "why-carbon-offsets") {
      return <img className="category_img" alt="category logo" src={Trees} />;
    }
    if (slug === "ecopoints") {
      return (
        <img className="category_img" alt="category logo" src={EcoPoints} />
      );
    }
    if (slug === "about-ecocart") {
      return <img className="category_img" alt="category logo" src={Plane} />;
    }
    if (slug === "privacy") {
      return <img className="category_img" alt="category logo" src={Privacy} />;
    }
  };
  return (
    <div className="categories_section">
      <Container>
        <h2>Choose a category:</h2>
        <div className="cat_grid">
          {data.wordpress.ecocartFaqCategories.edges.map((cat) => (
            <Link to={`/category/${cat.node.slug}`} key={cat.node.id}>
              <div className="category">
                {getImages(cat.node.slug)}

                <h3 className="category_title">{cat.node.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
