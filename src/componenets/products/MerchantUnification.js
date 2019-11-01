import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import merchantUnification from "./../../images/merchant-unification.png";
const MerchantUnification = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/merchantUnification">
          Merchant Unification
        </Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Merchant Unification</h1>

        <div className="indivi-product-section">
          <img src={merchantUnification} alt="" />
          <div>
            <h4>
              Entity resolution on transactional data, including backfilling of
              missing fields, Emulates human interaction with google maps.
            </h4>
            <p>
              MUF Gold copies merchant counterparties, All international and
              domestic locations of card swipes are gold copied down to the door
              number level. This allows for accurate and effective embellishment
              of information from sources such as LEXIS, DNB etc.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                For card companies, issuers, acquirers, payment processors or
                networks who desire a 360 degree visibility on the merchant
                counterparties.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default MerchantUnification;
