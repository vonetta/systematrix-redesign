import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Scorecard from "./../images/scoreboard.jpg";
const Products = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <h1 className="center">Advanced AI Products from our stable</h1>
        <p>
          Solutioning in an AI paradigm requires highly specialized skills.
          Multiple machine learning specializations come to play to put together
          an effective AI solution. The poswer behind our software solutions is
          derived from the symbiotic interaction between our products. Every
          product can be combined with any or all of the other products, in
          order to fit a solution to almost any problem.
        </p>
      </section>
      <section className="product-list-section">
        <h2 className="center">Our Product Portfolio</h2>
        <ul className="product-list">
          <Row>
            <Col>
              <li className="product-list-items">
                <Link to="/archimedes">Archimedes</Link>
              </li>
              <li className="product-list-items">
                <Link to="/artemis">Artemis</Link>
              </li>
              <li className="product-list-items">
                <Link to="/audioFrame">Audio Frame</Link>
              </li>
              <li className="product-list-items">
                <Link to="/chimera">Chimera</Link>
              </li>
              <li className="product-list-items">
                <Link to="/claimAdjudication">Claim Adjudication</Link>
              </li>
            </Col>
            <Col>
              <li className="product-list-items">
                <Link to="/clientMdm">Client Mdm</Link>
              </li>
              <li className="product-list-items">
                <Link to="/demeter">Demeter</Link>
              </li>
              <li className="product-list-items">
                <Link to="/durga">Durga</Link>
              </li>
              <li className="product-list-items">
                <Link to="/faceverify">Faceverify</Link>
              </li>
              <li className="product-list-items">
                <Link to="/fraudNetwork">Fraud Network</Link>
              </li>
            </Col>
            <Col>
              <li className="product-list-items">
                <Link to="/gaia">Gaia</Link>
              </li>
              <li className="product-list-items">
                <Link to="/guardian">Guardian</Link>
              </li>
              <li className="product-list-items">
                <Link to="/htNetwork">Ht Network</Link>
              </li>
              <li className="product-list-items">
                <Link to="/indra">Indra</Link>
              </li>
              <li className="product-list-items">
                <Link to="/iot">IotVisualBoost</Link>
              </li>
            </Col>
            <Col>
              <li className="product-list-items">
                <Link to="/merchantUnification">Merchant Unification</Link>
              </li>
              <li className="product-list-items">
                <Link to="/omni">Omni</Link>
              </li>
              <li className="product-list-items">
                <Link to="/partyNetwork">Party Network</Link>
              </li>
              <li className="product-list-items">
                <Link to="/predictionEngine">Prediction Engine (Cape)</Link>
              </li>
              <li className="product-list-items">
                <Link to="/sprout">Sprout</Link>
              </li>
            </Col>
            <Col>
              <li className="product-list-items">
                <Link to="/voiceVerify">Voiceverify</Link>
              </li>
              <li className="product-list-items">
                <Link to="/wireGeoSpatial">Wiregeospatial</Link>
              </li>
              <li className="product-list-items">
                <Link to="/wireMdm">Wiremdm</Link>
              </li>
            </Col>
          </Row>
        </ul>
      </section>
      <section className="product-scorecard">
        <h2 className="center">Score Card</h2>
        <div className="center">
          <img className="scorecard" src={Scorecard} alt="score card" />
        </div>
      </section>
    </main>
  );
};

export default Products;
