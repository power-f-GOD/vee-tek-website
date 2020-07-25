import React from "react";
import { Row, Container } from "react-bootstrap";
import PersonCard from "../crumbs/PersonCard";

import us from "./ourPeopleData";
import { Parallax } from "react-parallax";

const OurPeople = () => (
  <div className="fade-in pt-2 mt-5">
    <Parallax bgImage="/images/team/group.jpg" bgImageAlt="one" strength={100}>
      <div
        style={{ height: "700px" }}
        className="pt-5 text-center d-flex justify-content-center align-items-center"
      >
        <h1 className="mt-5 text-white font-weight-bold"> Meet Us </h1>
      </div>
    </Parallax>
    <Container>
      {" "}
      <p>
        Across our two companies, our engineering team is made up of competent
        engineers with no less than 30 years hands-on experience in electrical
        engineering. The technical team comprises of engineers, electricians,
        fabricators, welders, operators, mechanics, fitters, surveyor, and more.
        Our plastic production team comprises of experienced electrical,
        mechanical and chemical engineers, a pull of maintenance technicians and
        machine operators. We are also committed to training interns to build
        Nigeria’s talent and capacity for the future.
      </p>{" "}
    </Container>

    <Container className="mb-5">
      <Row className="mt-md-5 mb-5 justify-content-center">
        {us.main.map((item, key) => (
          <PersonCard
            image={item.image}
            title={item.title}
            name={item.name}
            key={key}
          />
        ))}
      </Row>
      <Row className="mt-md-5 justify-content-center">
        {us.others.map((item, key) => (
          <PersonCard
            image={item.image}
            title={item.title}
            name={item.name}
            key={key}
          />
        ))}
      </Row>
    </Container>
  </div>
);
export default OurPeople;
