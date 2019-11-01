import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import faceVerify from "./../../images/durga.png";
const FaceVerify = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/faceVerify">Face Verify</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Face Verify</h1>

        <div className="indivi-product-section">
          <img src={faceVerify} alt="" />
          <div>
            <h4>Verifies the identity of an individual by facial image</h4>
            <p>
              FaceVerify is an implementation of the Indra framework, FaceVerify
              can unify ids of different individuals using just the image from
              different government issued photo ids. The aging algorithm covers
              a span of over 40 years. Image reconstruction algorithms enable
              unify ids where there is a palpable difference due to facial hair
              or styling of the hair.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Across all industries, for applications starting from facial
                recognition based enhanced bio metrics for physical security to
                search engines that search websites with images instead of text
                key words
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default FaceVerify;
