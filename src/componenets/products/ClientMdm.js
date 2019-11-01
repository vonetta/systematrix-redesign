import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import clientMdm from "./../../images/client-mdm.png";
const ClientMdm = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/clientMdm">Client Mdm</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Client Mdm</h1>

        <div className="indivi-product-section">
          <img src={clientMdm} alt="" />
          <div>
            <h4>
              Graph Visualization showing similar customers as a precursor to
              unification
            </h4>
            <p>
              Customer centric programs require singular customer Ids across all
              relationships. Depending on maturity levels, different
              organizations have varying views of a unified customer Id. CLIENT
              MDM is a client mdm program that leverages the quasi clique
              algorithm developed by systematrix, this algorithm allows for
              unification of any entity in the network based on connected
              neighboring nodes
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Across all industries that are looking to create a 360 degree
                view on their customers or counter parties such as vendors,
                merchants, product etc.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default ClientMdm;
