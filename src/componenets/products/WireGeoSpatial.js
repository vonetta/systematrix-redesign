import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import wiregeospatial from "./../../images/wiregeospatial.png";
const WireGeoSpatial = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/wireGeoSpatial">WireGeoSpatial</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">WireGeoSpatial </h1>

        <div className="indivi-product-section">
          <img src={wiregeospatial} alt="" />
          <div>
            <h4>
              Geospatial platform that enables multi layer analytics off wire
              transfers
            </h4>
            <p>
              WIREGEOSPATIAL uses cleansed wire data from wiremdm and plots
              every single wire as they traverse through multiple geographies.
              The product allows for layering the wire data over 314b banks and
              high risk country codes.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Primarily for financial institutions, for EDD teams looking at
                correspondent banking. Sepecifically tailored to visually
                display the vectors produced as wire transfers travers across
                jurisdictions.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default WireGeoSpatial;
