import React from "react";
import { Breadcrumb } from "react-bootstrap";

const Contact = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="/contact">Contact</Breadcrumb.Item>
      </Breadcrumb>
      <section className="contact-section">
        <h1 className="center">Contact US</h1>

        <div className="center ">
          <p>
            <span className="bold">Address</span>: 50 Hurt Plaza Suite 1135,1130
            Atlanta, Georgia 30307
          </p>
          <p>
            <span className="bold">Telephone</span>:{" "}
            <a href="tel:6146784343">(614) 678 - 4343</a>
          </p>
          <p>
            <span className="bold">Email:</span>
            <a href="mailto:balaji@systematrixsolutions.net">
              balaji@systematrixsolutions.net
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
