import React from "react";

// Affiliated stores
import foot_locker from "../../images/affiliate-images/foot_locker.png";
import freshly from "../../images/affiliate-images/freshly.png";
import glossier from "../../images/affiliate-images/glossier.png";
import ugg from "../../images/affiliate-images/ugg_logo.png";
import kohls from "../../images/affiliate-images/kohls.png";
import levis from "../../images/affiliate-images/levis.png";
import nixon from "../../images/affiliate-images/nixon.png";
import petco from "../../images/affiliate-images/petco.png";
import ulta_beauty from "../../images/affiliate-images/ulta_beauty.png";
import vans from "../../images/affiliate-images/vans.png";
import { Container, Row, Col } from "react-bootstrap";

const AffiliateStores = () => {
  return (
    <section id="affiliate-stores">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8} sm>
            <h1 id="affiliate-title">
              Shop Sustainably at <br></br>10,000+ stores!
            </h1>
          </Col>
        </Row>
      </Container>
      <img
        className="store-lg"
        id="foot-locker"
        src={foot_locker}
        alt="foot-locker logo"
      ></img>
      <img
        className="store-md"
        id="freshly"
        src={freshly}
        alt="freshly logo"
      ></img>
      <img
        className="store-md"
        id="glossier"
        src={glossier}
        alt="glossier logo"
      ></img>
      <img
        className="store-lg"
        id="ugg"
        src={ugg}
        alt="ugg logo"
      ></img>
      <img className="store-md" id="kohls" src={kohls} alt="kohls logo"></img>
      <img className="store-lg" id="levis" src={levis} alt="levis logo"></img>
      <img className="store-md" id="nixon" src={nixon} alt="nixon logo"></img>
      <img className="store-md" id="petco" src={petco} alt="petco logo"></img>
      <img
        className="store-lg"
        id="ulta_beauty"
        src={ulta_beauty}
        alt="ulta_beauty logo"
      ></img>
      <img className="store-md" id="vans" src={vans} alt="vans logo"></img>
    </section>
  );
};

export default AffiliateStores;
