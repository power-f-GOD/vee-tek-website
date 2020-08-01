import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import images, { GalleryImageProp } from "../constants/galleryImages";
import Modal, { GalleryModal } from "./crumbs/GalleryModal";
import galleryImages from "../constants/galleryImages";

const Gallery = (props: any) => {
  const { setNavState, location } = props;
  const { pathname } = location;
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [currentData = galleryImages, setCurrentData] = useState<
    GalleryImageProp[]
  >(galleryImages);

  const modalOpenHandler = React.useCallback(
    (open: boolean, data: GalleryImageProp[], index: number) => () => {
      setCurrentIndex(index);
      setCurrentData(data);
      setOpenModal(open);
    },
    []
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setNavState(pathname);

    return () => {
      setNavState("/");
    };
  }, [pathname, setNavState]);

  return (
    <div className="fade-in my-5">
      <div
        style={{
          height: "500px",
          background: `url('/images/sustainablity.jpg')`,
          backgroundPosition: "center",
        }}
        className=""
      >
        <div
          className=" my-5 text-center d-flex justify-content-center align-items-center"
          style={{
            height: "500px",
            width: "100%",
            background: "#73410f70",
            position: "absolute",
            top: 0,
          }}
        >
          <h1 className="mt-5 text-white font-weight-bold">
            {" "}
            Gallery{" "}
            <span role="img" aria-label="">
              📷
            </span>{" "}
          </h1>
        </div>
      </div>
      <Container className="mt-5">
        <Row className="justify-content-center">
          {images.map((v, k) => (
            <GalleryItem
              image={v.image}
              title={v.title}
              modalOpener={modalOpenHandler(true, galleryImages, k)}
              key={k}
            />
          ))}
        </Row>
      </Container>
      <Modal
        contentComponent={GalleryModal}
        contentData={currentData}
        open={openModal}
        index={currentIndex}
        modalOpenHandler={modalOpenHandler}
      />
    </div>
  );
};

const GalleryItem = (props: {
  image: string;
  title: string;
  modalOpener: Function;
}) => (
  <Col xs={10} sm={6} md={4} lg={4} className="p-0">
    <div className="Gallery-Image-Wrapper" onClick={props.modalOpener as any}>
      <picture>
        <source
          className="Gallery-Image"
          srcSet={props.image + ".webp"}
          type="image/webp"
        />
        <source
          className="Gallery-Image"
          srcSet={props.image + ".jpg"}
          type="image/jpeg"
        />

        <img
          src={props.image + ".jpg"}
          className="Gallery-Image"
          alt="gallery item"
        />
      </picture>
      <div className="Gallery-Overlay">{props.title}</div>
    </div>
  </Col>
);

export default Gallery;
