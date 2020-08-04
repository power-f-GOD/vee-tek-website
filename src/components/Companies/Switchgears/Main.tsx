import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

const Main = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fade-in">
      <div className="Slider-Wrapper text-black">
        <Carousel interval={7000}>
          <Carousel.Item>
            <Col className="d-block w-100 Slide-Item first" />

            <Carousel.Caption>
              <Container fluid="md">
                <Row>
                  <Col md={8} className="caption-text-container ml-auto">
                    <h4>Vee-Tek Power Substation</h4>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Col className="d-block w-100 Slide-Item second" />
            <Carousel.Caption>
              <Container fluid="md">
                <Row>
                  <Col md={8} className="caption-text-container ml-auto">
                    <h4>
                      Skeleton of a Vee-Tek distribution panel being coupled in
                      the factory
                    </h4>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Col className="d-block w-100 Slide-Item third" />

            <Carousel.Caption>
              <Container fluid="md">
                <Row>
                  <Col md={8} className="caption-text-container ml-auto">
                    <h4>
                      Vee-Tek Simple Distribution Board for Bigger Facilities
                    </h4>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Col className="d-block w-100 Slide-Item fourth" />
            <Carousel.Caption>
              <Container fluid>
                <Row>
                  <Col md={8} className="caption-text-container ml-auto">
                    <h4>
                      Vee-Tek Simple Distribution Board for Smaller Facilities
                    </h4>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Main;
