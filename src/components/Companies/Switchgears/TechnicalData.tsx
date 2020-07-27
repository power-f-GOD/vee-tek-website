import React from "react";

import { Container, Row } from "react-bootstrap";


const TechnicalData = () => {
  return (
    <Container as="main" className="fade-in include-page-header">
      <Container className="fluid pt-5">
        <Row as="h1" className="page-title pt-5">
          Technical Data
        </Row>
      </Container>
    </Container>
  );
};

export default TechnicalData;
