import React from "react";
import { Parallax } from "react-parallax";
import { Container, Row, Col } from "react-bootstrap";

const Certificates = () => {
  return (
    <div className="fade-in">
      <Parallax bgImage="/images/three.jpg" bgImageAlt="one" strength={100}>
        <div
          style={{ height: "500px" }}
          className="pt-5 text-center d-flex justify-content-center align-items-center"
        >
          <h1 className="mt-5 text-white font-weight-bold">
            {" "}
            Our Certificates{" "}
          </h1>
        </div>
      </Parallax>
      <Container className="mb-5">
        <Row>
          <Col lg={6} sm={12}>
            <div className="Certificate Certificate-One"></div>
          </Col>
          <Col lg={6} sm={12}>
            <div className="Certificate Certificate-Two"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Certificates;
