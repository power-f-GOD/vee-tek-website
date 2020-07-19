import React from "react";
import { Carousel } from "react-bootstrap";

const Main = () => {
  return (
    <div className="fade-in">
      <div className="h-auto Slider-Wrapper text-black">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 Slide-Item"
              src="/images/switch-gears-3.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="text-dark bg-white">
              <h3>Label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 Slide-Item"
              src="/images/switch-gears-2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="text-dark bg-white">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 Slide-Item"
              src="/images/switch-gears.jpg"  
              alt="Third slide"
            />

            <Carousel.Caption className="text-dark bg-white">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Main;
