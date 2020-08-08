import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Modal, { ProductsModal } from '../../crumbs/Modal';
import {
  pipeProducts,
  fittingProducts,
  ProductProps
} from '../../../constants/pipesProductsData';

const Products = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentData = pipeProducts[0].siblings, setCurrentData] = useState<
    ProductProps['siblings']
  >(pipeProducts[0].siblings);

  const modalOpenHandler = React.useCallback(
    (open: boolean, data: ProductProps['siblings']) => () => {
      setOpenModal(open);
      setCurrentData(data);
    },
    []
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container as='main' className='Products fade-in include-page-header'>
      <Row as='h1' className='page-title'>
        <Box className='before'>
          <picture>
            <source srcSet='/images/pipes-2.webp' type='image/webp' />
            <img
              src='/images/pipes-2.jpg'
              alt={'/images/pipes-2.jpg'.split('/').slice(-1)[0]}
            />
          </picture>
        </Box>
        Our Products
        <Box className='after' />
      </Row>
      <Row className='mx-0'>
        <Col xs={12} as='h2' className='mb-5 text-center'>
          Pipes:
        </Col>
        {pipeProducts.map(({ name, desc, bannerUrl, siblings }, _) => (
          <Product
            bannerUrl={bannerUrl}
            name={name}
            desc={desc}
            siblings={siblings}
            modalOpenHandler={modalOpenHandler(true, siblings)}
            key={_}
          />
        ))}
        <Col xs={12} as='h2' className='my-5 text-center'>
          Fittings:
        </Col>
        {fittingProducts.map(({ name, desc, bannerUrl, siblings }, _) => (
          <Product
            bannerUrl={bannerUrl}
            name={name}
            desc={desc}
            siblings={siblings}
            modalOpenHandler={modalOpenHandler(true, siblings)}
            key={_}
          />
        ))}
      </Row>

      <Modal
        contentComponent={ProductsModal}
        contentData={currentData}
        open={openModal}
        modalOpenHandler={modalOpenHandler}
      />
    </Container>
  );
};

const Product = ({
  bannerUrl,
  name,
  desc,
  siblings,
  modalOpenHandler
}: ProductProps & { modalOpenHandler: Function }) => (
  <Col xs={12} sm={6} md={4} lg={3} className='mb-3 px-2'>
    <Box className='product' tabIndex={0}>
      <picture>
        <source
          srcSet={bannerUrl.replace(/jpe?g|png/, 'webp')}
          type='image/webp'
        />
        <img
          className='product-image'
          src={bannerUrl}
          alt={bannerUrl.split('/').slice(-1)[0]}
        />
      </picture>

      <Box className='product-details-wrapper'>
        <Box component='h5' className='product-name mb-2'>
          {name}
        </Box>
        <Box component='p' className='product-desc mb-3'>
          {desc}
        </Box>
        <Button
          className='major-button outlined product-button'
          color='primary'
          onClick={modalOpenHandler as any}>
          View Product{siblings.length > 1 ? 's' : ''}
        </Button>
      </Box>
    </Box>
  </Col>
);

export default Products;
