import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import gaia from "./../../images/audioframe.png";
const Gaia = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/gaia">Gaia</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">GAIA</h1>

        <div className="indivi-product-section">
          <img src={gaia} alt="" />
          <div>
            <h4>Integrate Relational Frameworks to Graph.</h4>
            <p>
              GAIA is the framework for graph network machine learning based
              solutions such as Artemis, Demeter, Guardian and others, GAIA
              integrates, maintains and updates nodes, edges and properties of ,
              typically, greater than 1 billion connections. GAIA has the
              SPROUT, OMNI, CHIMERA products integrated allowing for creating
              connections with data derived from unstructured and semi
              structured pieces of information. GAIA also integrates the
              connected subjects to artefacts such as transactions, images,
              documents etc.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                GAIA is applicable to all industries, this is systematrix's
                renderation of how a big data platform should be set up,
                predictive analytics requires harvesting independent variables
                from as diverse sources as possible which includes behavior of
                connected stakeholders. GAIA is designed for this purpose,
                various behavioural analytics such as financial crime, fraud etc
                are dependent on this infrastructure. GAIA can be used for law
                enforcement, defence, energy policy, large scale demographic
                mapping, compliance, opiod addiction and many other use cases.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Gaia;
