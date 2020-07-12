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
            Quality Assurance{" "}
          </h1>
        </div>
      </Parallax>
      <Container className="mb-5">
        <p className="m-3">
          Every product we make passes through a rigorous test of quality
          certification before leaving the factory. This process guarantees
          client’s absolute satisfaction. As a result, Vee-Tek products and
          services compare excellently well with international standards at a
          very reasonable budget and with the added advantage of customization
          to individual clients’ particular needs.
        </p>
        <Row className="justify-content-center mt-4">
          <Col lg={6} sm={12}>
            <Image
              src="/images/cert.jpg"
              className="Certificate img-thumbnail mb-2 Certificate-One"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Certificates;
