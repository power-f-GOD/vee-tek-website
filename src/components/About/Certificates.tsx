import React from "react";
import { Parallax } from "react-parallax";
import { Container, Row, Col, Image } from "react-bootstrap";

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
            <Image
              src="/images/document.jpg"
              className="Certificate img-thumbnail mb-2 Certificate-One"
            />
          </Col>
          <Col lg={6} sm={12}>
            <Image
              src="/images/document.jpg"
              className="Certificate img-thumbnail mb-2 Certificate-One"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Certificates;
