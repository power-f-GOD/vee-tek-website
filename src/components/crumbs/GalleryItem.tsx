import React from "react";
import { Col, Image } from "react-bootstrap";

const GalleryItem = (props: { image: string }) => (
  <Col xs={10} sm={6} md={4} lg={4} className="p-1">
    <div className="Gallery-Image-Wrapper">
      <Image src={props.image} className="Gallery-Image" />
    </div>
  </Col>
);

export default GalleryItem;
