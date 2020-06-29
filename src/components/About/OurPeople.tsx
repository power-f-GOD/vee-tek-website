import React from "react";
import { Row, Container } from "react-bootstrap";
import PersonCard from "../crumbs/PersonCard";

import us from "./ourPeopleData";
import { Parallax } from "react-parallax";

const OurPeople = () => (
  <Container as='main' fluid className='fade-in p-0'>
    <Parallax bgImage="/images/three.jpg" bgImageAlt="one" strength={100}>
      <div style={{ height: "500px" }} className="pt-5 text-center d-flex justify-content-center align-items-center">
        <h1 className="mt-5 text-white font-weight-bold"> Meet Us </h1>
      </div>
    </Parallax>
    <Container className="mb-5">
      <Row className="mt-md-5 mb-5">
        {us.main.map((item, key) => (
          <PersonCard image={item.image} title={item.title} name={item.name} key={key} />
        ))}
      </Row>
      <Row className="mt-md-5">
        {us.others.map((item, key) => (
          <PersonCard image={item.image} title={item.title} name={item.name} key={key} />
        ))}
      </Row>
    </Container>
  </Container>
);
export default OurPeople;
