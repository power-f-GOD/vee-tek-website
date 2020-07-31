import React from "react";
import { Col } from "react-bootstrap";

const GalleryItem = (props: { image: string }) => (
  <Col xs={10} sm={6} md={4} lg={4} className="p-1">
    <div className="Gallery-Image-Wrapper">
      <picture>
        <source
          className="Gallery-Image"
          srcSet={props.image + ".webp"}
          type="image/webp"
        />
        <source
          className="Gallery-Image"
          srcSet={props.image + ".jpg"}
          type="image/jpeg"
        />

        <img
          src={props.image + ".jpg"}
          className="Gallery-Image"
          alt="gallery item"
        />
      </picture>
    </div>
  </Col>
);

export default GalleryItem;
