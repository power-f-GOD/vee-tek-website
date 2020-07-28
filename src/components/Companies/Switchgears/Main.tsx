import React from "react";
import { Carousel } from "react-bootstrap";

const Main = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="fade-in">
      <div className="h-auto Slider-Wrapper text-black">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 Slide-Item"
              src="/images/switchgears-main/two.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="text-dark bg-white">
              <h4>Vee-Tek Power Station</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 Slide-Item"
              src="/images/switchgears-main/three.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="text-dark bg-white">
              <h4>
                Skeleton of a Vee-Tek distribution panel being coupled in the
                factory
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 Slide-Item"
              src="/images/switchgears-main/four.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="text-dark bg-white">
              <h4>Vee-Tek Simple Distribution Board for Smaller Facilities</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 Slide-Item"
              src="/images/switchgears-main/one.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="text-dark bg-white">
              <h4>Vee-Tek Simple Distribution Board for Smaller Facilities</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Main;
