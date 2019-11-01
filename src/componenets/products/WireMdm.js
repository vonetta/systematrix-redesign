import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import wireMdm from "./../../images/wiremdm.png";
const WireMdm = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/WireMdm">Prediction Engine</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Wire Mdm </h1>

        <div className="indivi-product-section">
          <img src={wireMdm} alt="" />
          <div>
            <h4>
              Automatic Purification of Wire Data for downstream compliance
              programs (TM, KYC, Risk reports, others)
            </h4>
            <p>
              Wiremdm is a product that takes in raw wire data from various
              disparate payment systems and creates an output file with unified
              bank ids, country codes as well as counter party ids for all the
              entities in a wire. Wiremdm in conjunction with Archimedes gold
              copies each address line to the extent possible, this data is then
              used for downstream analytics from the counter party node of GAIA.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Financial services, especially banks that have sizable wire
                traffic especially with a correspondent banking footprint.
                Wiremdm cleans up the wire data such that downstream compliance
                applications such as TM and KYC can effectively monitor this
                risky product, counterparties derived from the wiremdm feed the
                graph networks to detect collusion between counter parties and
                customers
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default WireMdm;
