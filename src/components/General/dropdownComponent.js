import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const DropdownComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      faqs: wordpress {
        ecocartFaqs {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    }
  `);
  const [display, setDisplay] = useState(false);
  const [search, setSeatch] = useState("");
  const onTextChange = (e) => {
    setSeatch(e.target.value);
    if (e.target.value !== "") {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };
  return (
    <Form.Group controlId="search">
      <Form.Control
        onChange={onTextChange}
        value={search}
        type="text"
        placeholder="Search"
      />
      <FaSearch />
      {display && (
        <div className="autoContainer">
          {data.faqs.ecocartFaqs.edges.map((result, index) => {
            if (
              result.node.title.toLowerCase().indexOf(search.toLowerCase()) ===
              -1
            ) {
              return null;
            } else {
              return (
                <Link key={index} to={`/${result.node.slug}`}>
                  {result.node.title}
                </Link>
              );
            }
          })}
        </div>
      )}
    </Form.Group>
  );
};

export default DropdownComponent;
