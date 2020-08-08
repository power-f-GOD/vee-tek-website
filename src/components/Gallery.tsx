import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from '@material-ui/core/Box';

import images, { GalleryImageProp } from '../constants/galleryImages';
import Modal, { GalleryModal } from './crumbs/GalleryModal';
import galleryImages from '../constants/galleryImages';

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
      setNavState('/');
    };
  }, [pathname, setNavState]);

  return (
    <Container fluid className='Gallery include-page-header fade-in p-0 pt-1'>
      <Row as='h1' className='page-title px-1'>
        <Box className='before'>
          <picture>
            <source srcSet='/images/sustainablity.webp' type='image/webp' />
            <img
              src='/images/sustainablity.jpg'
              alt={'/images/sustainablity.jpg'.split('/').slice(-1)[0]}
            />
          </picture>
        </Box>
        Gallery
        <Box className='after' />
      </Row>
      <Container className='p-0'>
        <Row className='justify-content-center mb-5'>
          {images.map((v, k) => (
            <GalleryItem
              image={v.image}
              title={v.title}
              modalOpener={modalOpenHandler(true, galleryImages, k)}
              key={k}
            />
          ))}
        </Row>
        <Modal
          contentComponent={GalleryModal}
          contentData={currentData}
          open={openModal}
          index={currentIndex}
          modalOpenHandler={modalOpenHandler}
        />
      </Container>
    </Container>
  );
};

const GalleryItem = (props: {
  image: string;
  title: string;
  modalOpener: Function;
}) => (
  <Col xs={10} sm={6} md={4} className='p-1'>
    <div className='Gallery-Image-Wrapper' onClick={props.modalOpener as any}>
      <picture>
        <source
          className='Gallery-Image'
          srcSet={props.image + '.webp'}
          type='image/webp'
        />
        <img
          src={props.image + '.jpg'}
          className='Gallery-Image'
          alt='gallery item'
        />
      </picture>
      <div className='Gallery-Overlay'>{props.title}</div>
    </div>
  </Col>
);

export default Gallery;
