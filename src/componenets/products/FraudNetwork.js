import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import fraudNetwork from "./../../images/fraudnetwork.png";
const FraudNetwork = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/fraudNetwork">Fraud Network</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Fraud Network</h1>

        <div className="indivi-product-section">
          <img src={fraudNetwork} alt="" />
          <div>
            <h4>Graph Visualization for Fraud investigators</h4>
            <p>
              Fraud Network consumes alerts produced by Guardian or any other
              system that tracks Fraud typologies. Fraud Network allows the
              Fraud investigators to look at upto 9 levels of traversals of the
              alerted subject. Fraud Network is fully integrated to external
              signals from sniffers, blacklisted domains, ncfte broadcasts and
              blacklisted merchants. HT Network allows the investigators to
              access all the resources made available to Party Network
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Primarily for financial institutions. Fraud Network is the
                visualization framework for Fraud Investigators, this is also
                the primary mechanism for feeding back human intervention to
                Guardian
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default FraudNetwork;
