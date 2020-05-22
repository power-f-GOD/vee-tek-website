import React from 'react';
import {
  Carousel
} from 'react-bootstrap';

import '../../styles/index.min.css';

const Slider = () => {
  return (
    <div className="h-auto Slider-Wrapper">
      <Carousel>
        <Carousel.Item >
          <img
            className="d-block w-100 Slide-Item"
            src="images/one.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 Slide-Item"
            src="images/two.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 Slide-Item"
            src="images/three.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

  );
};

export default Slider;
