import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import partyNetwork from "./../../images/party-network.png";
const PartyNetwork = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/partyNetwork">Party Network</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Party Network</h1>

        <div className="indivi-product-section">
          <img src={partyNetwork} alt="" />
          <div>
            <h4>Graph Visualization for AML investigators</h4>
            <p>
              Party Network consumes alerts produced by Artemis or any other
              alerting system and allows the FIU investigators to look at up to
              9 levels of traversals of the alerted subject. Party Network
              supports all the customers and their artefacts including external
              searches. Party Network has been scaled to up to 1 billion nodes
              and edges
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

export default PartyNetwork;
