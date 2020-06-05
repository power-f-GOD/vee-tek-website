import React from "react";
import "../styles/index.min.css";
import Slider from "./crumbs/Slider";
import ServiceCard from "./crumbs/ServiceCard";
import { Row, Container } from "react-bootstrap";

const services = [
  {
    image: "images/electric.png",
    title: "Eletrification Projects",
    desc: `At Veetek we undertake in Electrification Projects for our
    clients, serving both rural and Urban area, to increase access
    to electricity services for households, public educational
    institutions.`,
  },
  {
    image: "images/injection.png",
    title: "Injection substation Building",
    desc: `We build and commission injection substation of various
    capacities, to suite varying needs.`,
  },
  {
    image: "images/home.png",
    title: "House Installation Services",
    desc: `We undertake in house installation projects for Residential
    homes, Factories and Industries, Churches and different
    institutions with varying power needs.`,
  },
  {
    image: "images/generator.png",
    title: "Generator Installation and Commisioning",
    desc: `We Install and commission generators
    of varying sizes and capacities, to suite different
    Power needs of our clients, ranging from Hotels,
    Churches, Factories, industries and Residential Homes.`,
  },
  {
    image: "images/power.png",
    title: "Factory Installation",
    desc: `We conceive, design and construct major control systems,
    for a lot of Factories and manufacturing concerns across the country.`,
  },
];

const Landing = () => {
  return (
    <div>
      <Slider />
      <div className="Divider" />
      <Container className="fluid">
        <Row className="justify-content-center">
          {services.map((item, key) => (
            <ServiceCard
              image={item.image}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </Row>
      </Container>

      <div className="Divider" />
    </div>
  );
};

export default Landing;
