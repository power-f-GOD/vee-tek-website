import React from "react";

import { Container, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";

import GalleryItem from "../components/crumbs/GalleryItem";

import images from "../constants/galleryImages";

const Gallery = (props: any) => {
  const { setNavState, location } = props;
  const { pathname } = location;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setNavState(pathname);

    return () => {
      setNavState("/");
    };
  }, [pathname, setNavState]);

  return (
    <div className="fade-in my-5">

      <Parallax
        bgImage="/images/sustainablity.jpg"
        bgImageAlt="one"
        strength={200}
      >
        <div
          style={{ height: "500px" }}
          className="pt-5 text-center d-flex justify-content-center align-items-center"
        >
          <h1 className="mt-5 text-white font-weight-bold">
            {" "}
            Gallery{" "}
            <span role="img" aria-label="">
              📷
            </span>{" "}
          </h1>
        </div>
      </Parallax>
      <Container>
        <Row className="justify-content-center">
          {images.map((v, k) => (
            <GalleryItem image={v} key={k} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
