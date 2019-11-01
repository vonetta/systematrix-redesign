import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import artemis from "./../../images/artemis.png";
const Artemis = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/artemis">Artemis</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Artemis</h1>

        <div className="indivi-product-section">
          <img src={artemis} alt="" />
          <div>
            <h4>
              Human trafficking Detection, connects signals from curated sources
              of known Human Trafficking to customer end points.
            </h4>
            <p>
              Artemis is a graph network implementation designed to detect,
              investigate and continuously update techniques to detect human
              trafficking, Artemis has <Link to="/chimera">CHIMERA</Link>,
              <Link to="/sprout">SPROUT</Link>, <Link to="/omni">OMNI</Link> and
              <Link to="/gaia"> GAIA </Link>integrated into the platform.
              Integrating enhanced OMNI with FaceVerify is scheduled for 2018
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>
          <ul className="product-list">
            <Row>
              <Col>
                <li className="product-list-items">Financial Services</li>
                <p className="product-list-desc">
                  Automate and reduce false positives from Enhanced due
                  diligence teams looking at their customers exposure to human
                  trafficking. Artemis can also be adapted to assist law
                  enforcement or to agencies dedicated to curb human trafficking
                </p>
              </Col>
            </Row>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Artemis;
