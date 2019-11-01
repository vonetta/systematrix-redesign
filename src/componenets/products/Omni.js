import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import omni from "./../../images/omni.png";
const Omni = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/omni">Omni</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Omni</h1>

        <div className="indivi-product-section">
          <img src={omni} alt="" />
          <div>
            <h4>
              Open source information retrieval pertaining to businesses, banks,
              persons, configurable to expand to gather additional Open source
              intelligence.
            </h4>
            <p>
              OMNI is a web crawler, omni is provided with inquiry eligible
              infromation from upstream programs such as SPROUT, MUF and all the
              Graph network based products, OMNI then searches designated
              websites and embelishes internal information with information
              retreived from the designated websites. An enhanced OMNI product
              with integration to FaceVerify to enable the crawler to use images
              as an inquiry criteria.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Across all industries, mechanism to seek, search and fuse
                information available in open source, OMNI enables the world
                wide web as an additional database. Finance, Insurance,
                Manufacturing, Defence, Law enforcement, Enviromental policy
                feedback, other areas that require 360 degree views of all stake
                holders.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Omni;
