import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import archimedes from "./../../images/archimedes.png";
const Archimedes = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/archimedes">Archimedes</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Archimedes</h1>

        <div className="indivi-product-section">
          <img src={archimedes} alt="" />
          <div>
            <h4>
              Entity resolution on transactional data, including backfilling of
              missing fields. Emulates human interaction with google maps.
            </h4>
            <p>
              Archimedis was developed to gold copy wire transfer records, it
              has an advanced part of speech tagger that organizes sentences
              compressed into a single column into individual entity specific
              columns, it also back fills missing pieces of names, addresses,
              locations etc. using a combination of open source searches and
              custom libraries. Archimedis is instrumental in gold copying hard
              to read international (non-us) addresses encountered in the fusion
              with Google in the MUF process.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>
          <ul className="product-list">
            <Row>
              <Col>
                <li className="product-list-items">Card Companies</li>
                <li className="product-list-items">Issuers</li>
              </Col>
              <Col>
                <li className="product-list-items">Acquirers</li>
                <li className="product-list-items">Payment Processors</li>
              </Col>
            </Row>
          </ul>
          <Row>
            <Col>
              <p className="product-list-desc">
                Networks who desire a 360 degree visibility on the merchant
                counterparties
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Archimedes;
