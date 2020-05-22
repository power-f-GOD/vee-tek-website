import React from 'react';
import Slider from "./landing_components/Slider";
import {Container, Row, Col, Image} from "react-bootstrap";
import "../styles/index.min.css"

const Landing = () => {
  return (
    <div>
      <Slider/>
      <div className="Divider"/>
      <Container  className="Pad">
        <Row>
          <Col className="Text">
            <h1 className="text-left font-weight-bolder"> Our Business</h1>
            <div className="Divider"/>

            <p className=" text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent libero massa, bibendum ut mollis a,
              scelerisque ut urna. Proin tincidunt lacus at libero porttitor, et pretium lectus ullamcorper. Mauris
              hendrerit orci sed urna placerat viverra. Suspendisse efficitur sed ipsum eget ullamcorper. Nam quis
              interdum orci. Praesent vel finibus erat. Nam ullamcorper nulla mauris, molestie lacinia est posuere nec.
              Praesent dolor neque, hendrerit ut suscipit at, aliquet vel tellus. In faucibus ultrices luctus.
              Suspendisse
              eu lacinia dui. Mauris ultrices tellus ut sodales egestas. Mauris efficitur sem eget lorem gravida dictum
              non at purus. Nunc id magna at est dapibus volutpat. Quisque massa orci, ultrices sit amet mollis eu,
              pharetra in ex.
            </p>
          </Col>
          <Col sm={11} lg={5} md={5}>
            <Image className="Pad" src="images/biz_three.svg"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
