import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from '@material-ui/core/Box';

import productsData, {
  ProductProps
} from '../../../constants/pipesProductsData';

const Products = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container as='main' className='fade-in include-page-header'>
      <Row as='h1' className='page-title'>
        Our Products
      </Row>
      <Row>
        {productsData.map(({ imageUrl, name, desc }, _) => (
          <Product imageUrl={imageUrl} name={name} desc={desc} key={_} />
        ))}
      </Row>
    </Container>
  );
};

const Product = ({ imageUrl, name, desc }: ProductProps) => (
  <Col sm={6} xs={12} md={4} lg={3} className='mb-4'>
    <Box className='product'>
      <Box className='product-image-wrapper'>
        <img src={imageUrl} className='product-image' alt={imageUrl} />
      </Box>
      <Box className='product-details-wrapper'>
        <Box component='h5' className='product-name'>
          {name}
        </Box>
        <Box component='p' className='product-desc'>
          {desc}
        </Box>
      </Box>
    </Box>
  </Col>
);

export default Products;
