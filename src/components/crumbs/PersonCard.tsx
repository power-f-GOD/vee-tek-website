import React from "react";
import { Col, Image } from "react-bootstrap";

const PersonCard = (props: { image: string; title: string; name: string }) => (
  <Col xs={10} sm={6} md={4} lg={3} className="p-2 pb-4">
    <div className="Person-Image-Wrapper">
      <Image src={props.image} className="rounded Person-Image" />
    </div>
    <div>
      <h5 className="pt-1">{props.name}</h5>
      <span className="text-secondary">{props.title}</span>
    </div>
  </Col>
);

export default PersonCard;
