import React from "react";
import { Col, Image } from "react-bootstrap";
import "../../styles/index.min.css";

const PersonCard = (props: { image: string; title: string; name: string }) => (
  <Col xs={12} sm={6} md={4} lg={3} className="p-2 pb-4">
    <div className="Person-Image-Wrapper">
      <Image src={props.image} className="rounded Person-Image" />
    </div>
    <div>
      <span className="text-secondary">{props.title}</span>
      <h5>{props.name}</h5>
    </div>
  </Col>
);

export default PersonCard;
