import React from "react";

import { Container, Row } from "react-bootstrap";
import ServiceCard from "../../crumbs/ServiceCard";
import { GearServices } from "../../../constants";

const Services = () => {
  return (
    <div className="container">
      <Container className="fluid pt-5">
        <h2 className="mb-4 font-weight-bold">Our Services</h2>
        <Row className="justify-content-center">
          {GearServices.map((item, key) => (
            <ServiceCard
              image={item.image}
              title={item.title}
              desc={item.desc}
              key={key}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
