import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import claimAdjudication from "./../../images/chimera.png";
const ClaimAdjudication = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/claimAdjudication">
          Claim Adjudication
        </Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Claim Adjudication</h1>

        <div className="indivi-product-section">
          <img src={claimAdjudication} alt="" />
          <div>
            <h4>Automatic adjudication of insurance claims.</h4>
            <p className="center">
              CAPE is a claims adjudication classifier that predicts 4 classes
              using variables selected from raw professional claim lines. CAPE
              generated a 98% true positive rate for approved claims.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Life and Automobile insurance companies that have a rules based
                claims adjudication system. Cape is a machine learning model
                that will significantly cut the time to adjudicate claims as
                well as improve the true positives significantly.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default ClaimAdjudication;
