import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Modal, { ProductsModal } from '../../crumbs/Modal';
import {
  pipeProducts,
  ProductProps
} from '../../../constants/pipesProductsData';

const Products = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentData = pipeProducts[0].children, setCurrentData] = useState<
    ProductProps['children']
  >(pipeProducts[0].children);

  const modalOpenHandler = React.useCallback(
    (open: boolean, data: ProductProps['children']) => () => {
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
        Our Products
      </Row>
      <Row className='justify-content-around'>
        <Col xs={12} as='h2' className='mb-5 text-center'>
          Pipes:
        </Col>
        {pipeProducts.map(({ name, desc, bannerUrl, children }, _) => (
          <Product
            bannerUrl={bannerUrl}
            name={name}
            desc={desc}
            modalOpenHandler={modalOpenHandler(true, children)}
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
  modalOpenHandler
}: Omit<ProductProps, 'children'> & { modalOpenHandler: Function }) => (
  <Col xs={12} sm={6} md={6} lg={4} className='mb-5'>
    <Box
      className='product'
      style={{ backgroundImage: `url('${bannerUrl}')` }}
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
          onClick={modalOpenHandler as any}>
          View Product(s)
        </Button>
      </Box>
    </Box>
  </Col>
);

export default Products;
