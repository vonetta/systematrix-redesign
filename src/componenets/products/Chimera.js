import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import chimera from "./../../images/chimera.png";
const Chimera = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/chimera">Chimera</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Chimera</h1>

        <div className="indivi-product-section">
          <img src={chimera} alt="" />
          <div>
            <h4>
              Machine learning based entity resolution for any entity type
            </h4>
            <p>
              This product is used to fuse disparate datasets, the underlying
              model can be trained on a flexible range of input features. By
              default the model predicts the similarity of two occurrence of an
              instance, from a common or disparate source, using the name and
              address taxonomy. The model, however, can be trained to detect
              similiarity between instance with features arising out of any
              tadonomy, for example email, IP address usage, common points of
              purchase, common counter party etc.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>
          <ul className="product-list">
            <Row>
              <Col>
                <li className="product-list-items">Finance</li>
                <li className="product-list-items">Insurance</li>
              </Col>
              <Col>
                <li className="product-list-items">Manufacturing</li>
                <li className="product-list-items">Law Enforcement</li>
              </Col>
              <Col>
                <li className="product-list-items">Defence</li>
                <li className="product-list-items">Government programs</li>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="product-list-desc">
                  Across any use case that requires to datasets to be linked or
                  fused where no key is provided
                </p>
              </Col>
            </Row>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Chimera;
