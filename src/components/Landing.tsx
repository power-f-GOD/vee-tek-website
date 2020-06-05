import React from "react";
import "../styles/index.min.css";
import Slider from "./crumbs/Slider";
import { Row, Container, Col, Image } from "react-bootstrap";

const Landing = () => {
  return (
    <div>
      <Slider />
      <div className="Divider" />
      <Container className="fluid">
        <Row className="justify-content-center">
          <Col sm={12} md={4} className="pb-1">
            <div className="Service-Card p-4 pt-5 pb-5">
              <div className="w-100 d-flex justify-content-center">
                <div className="Circle d-flex justify-content-center align-items-center">
                  <Image src="images/electric.png" />
                </div>
              </div>
              <div className="d-block mt-2 pt-3 w-auto Service-Card-Text">
                <h5 className="font-weight-bold mb-2">
                  Eletrification Projects
                </h5>
                <p className="p-1">
                  At Veetek we undertake in Electrification Projects for our
                  clients, serving both rural and Urban area, to increase access
                  to electricity services for households, public educational
                  institutions.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="pb-1">
            <div className="Service-Card p-4 pt-5 pb-5">
              <div className="w-100 d-flex justify-content-center">
                <div className="Circle d-flex justify-content-center align-items-center">
                  <Image src="images/injection.png" />
                </div>
              </div>
              <div className="d-block mt-2 pt-3 w-auto Service-Card-Text">
                <h5 className="font-weight-bold mb-2">
                  Injection substation Building
                </h5>
                <p className="p-1">
                  We build and commission injection substation of various
                  capacities, to suite varying needs.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="pb-1">
            <div className="Service-Card p-4 pt-5 pb-5">
              <div className="w-100 d-flex justify-content-center">
                <div className="Circle d-flex justify-content-center align-items-center">
                  <Image src="images/home.png" />
                </div>
              </div>
              <div className="d-block mt-2 pt-3 w-auto Service-Card-Text">
                <h5 className="font-weight-bold mb-2">
                  House Installation Services
                </h5>
                <p className="p-1">
                  We undertake in house installation projects for Residential
                  homes, Factories and Industries, Churches and different
                  institutions with varying power needs.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="Divider" />
    </div>
  );
};

export default Landing;
