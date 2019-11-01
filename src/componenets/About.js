import React from "react";
import { Breadcrumb } from "react-bootstrap";

const About = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/about">About Us</Breadcrumb.Item>
      </Breadcrumb>
      <div className="about-section">
        <h1 className="center">
          Advanced Algorithmic Company specializing in:
        </h1>
        <ul>
          <div>
            <li className="list-item-heading">Gold Copy</li>
            <p className="list-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Porttitor eget dolor morbi non arcu risus quis. Scelerisque purus
              semper eget duis at tellus at. Consequat ac felis donec et odio
              pellentesque diam volutpat commodo.
            </p>
          </div>
          <div>
            <li className="list-item-heading">
              Entity Extraction and Resolution
            </li>
            <p className="list-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Porttitor eget dolor morbi non arcu risus quis. Scelerisque purus
              semper eget duis at tellus at. Consequat ac felis donec et odio
              pellentesque diam volutpat commodo.
            </p>
          </div>
          <div>
            <li className="list-item-heading">
              Predictive and Prescriptive Analytics
            </li>
            <p className="list-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Porttitor eget dolor morbi non arcu risus quis. Scelerisque purus
              semper eget duis at tellus at. Consequat ac felis donec et odio
              pellentesque diam volutpat commodo.
            </p>
          </div>
          <div>
            <li className="list-item-heading">
              Advanced AML and KYC (CDD &amp; EDD) programs{" "}
            </li>
            <p className="list-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Porttitor eget dolor morbi non arcu risus quis. Scelerisque purus
              semper eget duis at tellus at. Consequat ac felis donec et odio
              pellentesque diam volutpat commodo.
            </p>
          </div>
          <div>
            <li className="list-item-heading">
              Graph Networks Visulization and Anomaly Detection
            </li>
            <p className="list-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Porttitor eget dolor morbi non arcu risus quis. Scelerisque purus
              semper eget duis at tellus at. Consequat ac felis donec et odio
              pellentesque diam volutpat commodo.
            </p>
          </div>
        </ul>
      </div>
    </main>
  );
};

export default About;
