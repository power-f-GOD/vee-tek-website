import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Modal from '../../crumbs/Modal';
import productsData, {
  ProductProps
} from '../../../constants/pipesProductsData';

const Products = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const modalOpenHandler = React.useCallback((open: boolean) => () => {
    setOpenModal(open);
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container as='main' className='Products fade-in include-page-header'>
      <Row as='h1' className='page-title'>
        Our Products
      </Row>
      <Row>
        {productsData.map(({ imageUrl, name, desc }, _) => (
          <Product
            imageUrl={imageUrl}
            name={name}
            desc={desc}
            modalOpenHandler={modalOpenHandler}
            key={_}
          />
        ))}
      </Row>

      <Modal open={openModal} modalOpenHandler={modalOpenHandler} />
    </Container>
  );
};

const Product = ({ imageUrl, name, desc, modalOpenHandler }: ProductProps) => (
  <Col sm={6} xs={12} md={4} lg={3} className='mb-4'>
    <Box
      className='product'
      style={{ backgroundImage: `url('${imageUrl}')` }}
      tabIndex={0}>
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
          onClick={(modalOpenHandler as any)(true)}>
          View Product
        </Button>
      </Box>
    </Box>
  </Col>
);

export default Products;
