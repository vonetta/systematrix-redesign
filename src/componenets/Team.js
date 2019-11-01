import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import user from "./../images/default-user-image.png";

const Team = () => {
  return (
    <main>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/team">Team</Breadcrumb.Item>
      </Breadcrumb>
      <section className="team-description">
        <p>
          Our team includes top notch Data Scientists and experts from the field
          of Machine Learning and Big Data Analytics. With a combined experience
          of more than 50 years, the team at{" "}
          <span className="capital">systematrix</span> is on the continuous
          journey of cutting edge innovations and creating bespoke products
          across industries
        </p>
      </section>
      <section className="team-images">
        <Row>
          <Col>
            <img width="150" src={user} alt="default user" />
            <p className="team-name">Lorem Ipsum</p>
            <p className="team-title">Chief Data Scientist</p>
          </Col>
          <Col>
            <img width="150" src={user} alt="default user" />
            <p className="team-name">Lorem Ipsum</p>
            <p className="team-title">Data Scientist</p>
          </Col>
          <Col>
            <img width="150" src={user} alt="default user" />
            <p className="team-name">Lorem Ipsum</p>
            <p className="team-title">Data Scientist</p>
          </Col>
          <Col>
            <img width="150" src={user} alt="default user " />
            <p className="team-name">Lorem Ipsum</p>
            <p className="team-title">Data Scientist</p>
          </Col>
          <Col>
            <img width="150" src={user} alt="default user " />
            <p className="team-name">Lorem Ipsum</p>
            <p className="team-title">Data Scientist</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img width="150" src={user} alt="default user " />
            <p className="team-name">Lorem Ipsum</p>
            <p className="team-title">Data Scientist</p>
          </Col>
          <Col>
            <img width="150" src={user} alt="default user" />
            <p className="team-name">Lorem Ipsum</p>
            <p className="team-title">Data Scientist</p>
          </Col>
          <Col>
            <img width="150" src={user} alt="default user " />
            <p className="team-name">Lorem Ipsum</p>
            <p className="team-title">Data Scientist</p>
          </Col>
          <Col>
            <img width="150" src={user} alt="default user " />
            <p className="team-name">Lorem Ipsum</p>
            <p className="team-title">Data Scientist</p>
          </Col>
          <Col>
            <img width="150" src={user} alt="default user" />
            <p className="team-name">Lorem Ipsum</p>
            <p className="team-title">Data Scientist</p>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Team;
