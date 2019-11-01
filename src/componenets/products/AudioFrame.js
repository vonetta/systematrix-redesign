import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import audioFrame from "./../../images/audioframe.png";
const AudioFrame = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/audioFrame">Audio Frame</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Audio Frame</h1>

        <div className="indivi-product-section">
          <img src={audioFrame} alt="" />
          <div>
            <h4>
              Machine learning framework for audio data, including voice
              recognition, sound classification, speech - text, and more.
            </h4>
            <p>
              AUDIO FRAME is a deep learning framework that is being trained to
              distinguish between and analyse spoken voices. The software will
              be used to audio fingerprint, inflection analysis, mood
              determination etc.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>
          <ul className="product-list">
            <Row>
              <Col>
                <p className="product-list-desc">
                  Across all industries looking to augment the customer
                  relationship experience, compliance.
                </p>
              </Col>
            </Row>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AudioFrame;
