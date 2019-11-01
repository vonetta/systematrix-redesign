import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import sprout from "./../../images/sprout.png";
const Sprout = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/sprout">Sprout</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Sprout</h1>

        <div className="indivi-product-section">
          <img src={sprout} alt="" />
          <div>
            <h4>
              Entity extraction from disparate unstructured document(s).
              Entities are mapped into a graph based on their relationships
              within the source documents.
            </h4>
            <p>
              SPROUT is a custom LSTM implementation, the purpose of SPROUT is
              to extract entities from documents such as web pages, books,
              newspaper articles. SPROUT will extract the entities and tie
              entity to entity relationship across documents, this is essential
              to extract information and connections of a subject when the
              information is unstructured and further if pieces of this
              information is spread across multiple documents, an immediate use
              case is extracting entities from multiple dark websites as an
              external signal in detecting human trafficking.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Across all industries, embellish data hidden in documents, urls,
                tweets etc. by extracting entities, connecting them across
                documents and media and fusing to internal databases, banking,
                insurance, legal, defense, law enforcement, policy tracking etc.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Sprout;
