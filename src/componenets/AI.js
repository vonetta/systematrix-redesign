import React from "react";
import { Breadcrumb } from "react-bootstrap";
import GAIA from "./../images/ai.png";
const AI = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/ai">AI</Breadcrumb.Item>
      </Breadcrumb>
      <section className="center">
        <img src={GAIA} alt="" />
      </section>
    </main>
  );
};

export default AI;
