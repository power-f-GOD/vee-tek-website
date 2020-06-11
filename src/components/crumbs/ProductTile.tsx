import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../../styles/index.min.css";

const ProductTile = (props: { image: string; product: string; desc: string }) => (
  <div className={"Product-Wrapper-" + props.image + "  align-middle"}>
    <Container className="p-5 text-white">
      <Row>
        <Col sm={12} md={4}>
          <div className={"Product-Image-" + props.image}></div>
        </Col>
        <Col sm={12} md={8}>
          <h2 className="font-weight-bold">{props.product}</h2>
          <p className="pt-3">{props.desc}</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ProductTile;
