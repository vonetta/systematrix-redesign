import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import htNetwork from "./../../images/htnetwork.png";
const HtNetwork = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/htNetwork">Ht Network</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Ht Network</h1>

        <div className="indivi-product-section">
          <img src={htNetwork} alt="" />
          <div>
            <h4>Graph Visualization for HT investigators</h4>
            <p>
              HT Network Consumes alerts produced by Artemis. HT Network allows
              for Financial crimes teams to look at customers who have been
              flagged as 'interesting' due to signals gathered by Artemis. HT
              Network allows the investigators to access all the resources made
              available to Party Network
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Primarily for financial institutions but also for law
                enforcements agencies tasked with curbing human trafficking, HT
                Network is the visualization framework for EDD teams looking
                into Human Trafficking exposure to customers, this is also the
                primary mechanism for feeding back human intervention to Artemis
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default HtNetwork;
