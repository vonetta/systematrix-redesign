import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import durga from "./../../images/durga.png";
const Durga = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/durga">Durga</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Durga</h1>

        <div className="indivi-product-section">
          <img src={durga} alt="" />
          <div>
            <h4>
              Graph-based algorithms for state-of-the-art entity resolution as
              well as anomaly, clique, and community detection.
            </h4>
            <p>
              Durga is a custom built suite of algorithms that run on
              Systematrix graph networks. The algorithms feed anomaly detection
              engines, compute similar neighbors for unifying fragmented
              instances of customer, counterparty, product etc. The algorithms
              also feed underlying machine learning classifiers with strong
              independent variables.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Across all industries such as Banking, Insurance, Manufacturing,
                Media etc. where there is a need to model outcomes based on
                collective behavior of all stake holders. Durga supports
                investigations with traversals enabled to nth level of
                separation, anomaly detection using proprietary graph network
                algorithms, integration with open source with a data purity
                layer, feedback to decision engines.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Durga;
