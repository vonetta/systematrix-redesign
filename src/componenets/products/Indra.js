import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import indra from "./../../images/indra.png";
const Indra = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/indra">Indra</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Indra</h1>

        <div className="indivi-product-section">
          <img src={indra} alt="" />
          <div>
            <h4>
              Computer vision framework for object detection, face verification,
              entity extraction from photos + videos, and more.
            </h4>
            <p>
              INDRA is a state of the art, convoluted neural network
              implementation. The framework includes a pipeline to feed video
              and static images into a well trained classification engine. The
              engine allows for advanced facial fingerprinting, including a
              sophisticated aging algorithm. The network also allows for
              performing advanced analytics on video feeds. This enhances the
              investment on video surveillance equipment many folds as well as
              allows for harvesting meta data for the various machine learning
              classifiers.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Across all industries that are looking to augment customer
                experience, strengthen compliance or would leverage their
                investments in surveillance equipment, advanced search using
                images etc. eg. Law Enforcement, Finance, Insurance, Defense,
                Environmental enforcement, Project tracking etc.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Indra;
