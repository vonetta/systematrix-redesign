import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import guardian from "./../../images/faceverify.png";
const Guardian = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/guardian">Guardian</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Guardian</h1>

        <div className="indivi-product-section">
          <img src={guardian} alt="" />
          <div>
            <h4>ML Model for Offline Fraud</h4>
            <p>
              Guardian is a machine learning model that scans for fraudulent
              transactions offline. Guardian fuses customer data with external
              signals indicative of bust out or take over typologies and feeds
              it into a machine learning model for adjudication. Guardian is
              integrated to the Fraud Network which allows for investigation and
              feedback loop.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Primarily for financial institutions, Guardian sweeps up
                typologies such as bust out, take overs, bank fraud, application
                fraud etc.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Guardian;
