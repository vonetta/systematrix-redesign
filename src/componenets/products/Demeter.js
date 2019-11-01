import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import demeter from "./../../images/demeter.png";
const Demeter = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/demeter">Demeter</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Demeter</h1>

        <div className="indivi-product-section">
          <img src={demeter} alt="" />
          <div>
            <h4>
              Human trafficking Detection, connects signals from curated sources
              of known Human Trafficking to customer end points.
            </h4>
            <p>
              Demeter is a state of the art machine learning model. The model is
              fitted on over 2500 common scenarios that represent a range of
              customer interaction with a financial institution (product,
              demographic, transactional, geography etc). The data is fed into
              the model after going through WireMdm, muf, Client Mdm and other
              data quality programs, third party data acquired from sources such
              as Lexis, dnb or Open source search using OMNI, is fused using
              CHIMERA. The output of Demeter is Integrated with PartyNetwork
              which allows for investigations and feedback loop.
            </p>
          </div>
        </div>
        <div className="product-list-section ">
          <h2 className="center">Industry</h2>

          <Row className="product-list">
            <Col>
              <p className="product-list-desc">
                Financial services, banks of any size to fulfill their
                obligations around the USA patriot act. Demeter is a cutting
                edge machine learning model that reduces false positives and
                increases productivity in the Financial intelligence unit.
                Demeter also acts as a risk rating engine for enhanced due
                diligence programs. Demeter predicts customers with patterns
                that are indicative of SAR's, 314a filings, fraud alerts and
                typologies arising from other referral streams.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Demeter;
