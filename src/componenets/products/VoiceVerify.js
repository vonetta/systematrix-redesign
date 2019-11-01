import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import voiceverify from "./../../images/voiceverify.png";
const PredictionEngine = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/voiceVerify">VoiceVerify</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">VoiceVerify</h1>

        <div className="indivi-product-section">
          <img src={voiceverify} alt="" />
          <div>
            <h4>Verifies the identity of an individual by voice.</h4>
            <p>
              VoiceVerify is an implementation of AudioFrame. The underlying
              model is trained to fingerprint a person on voice. AudioFrame is
              due to be launched in 3rd quarter 2018.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Across all industries, primarily to enhance the CRM experience
                at help desks and after sales interfaces.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default PredictionEngine;
