import React from "react";
import { Col } from "react-bootstrap";

const data = [
  {
    id: 1,
    name: "4+ million",
    span: "Ibs of CO2 offset",
    img: "earth-icon.svg",
  },
  {
    id: 2,
    name: "8,000+",
    span: "trees saved",
    img: "tree.svg",
  },
  {
    id: 3,
    name: "700+",
    span: "homes powered",
    img: "home.svg",
  },
];

const Info = () => {
  return (
    <>
      {data.map((item) => (
        <Col md key={item.id} className="infoBox">
          <img src={require(`../../images/${item.img}`)} />
          <h2>{item.name}</h2>
          <p>{item.span}</p>
        </Col>
      ))}
    </>
  );
};

export default Info;
