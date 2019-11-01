import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import iotvisualboost from "./../../images/iotvisualboost.png";
const IOT = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/iot">IOT</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">IOT Visual Boost</h1>

        <div className="indivi-product-section">
          <img src={iotvisualboost} alt="" />
          <div>
            <h4>
              Analytics platform that allows for realtime analytics on video
              feeds
            </h4>
            <p>
              IOTVisualboost is a series of products that leverage INDRA. The
              platform is designed to extract actionable information from video
              streams thereby, significantly, boosting the return on investment
              on surveillance assets
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Across all industries looking to augment their investments in
                IOT's, IOTvisualboost is specifically tailored to enhance the
                investments in already invested cctv systems
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default IOT;
