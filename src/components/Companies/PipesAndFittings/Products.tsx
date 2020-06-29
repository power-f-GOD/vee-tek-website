import React from 'react';

import { Container, Row } from 'react-bootstrap';

import ProductTile from '../../crumbs/ProductTile';
import productsData from '../../../constants/pipesProductsData';

const Products = () => {
  return (
    <Container as='main' className='fade-in mt-5'>
      <div className='Main-Wrapper mt-5'>
        <Row>
          {productsData.map((item, _) => (
            <ProductTile
              images={item.images}
              product={item.product}
              desc={item.desc}
              key={_}
            />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Products;
