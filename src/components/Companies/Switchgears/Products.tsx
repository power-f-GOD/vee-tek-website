import React from 'react';

import { Row, Container } from 'react-bootstrap';

import ProductTile from '../../crumbs/ProductTile';
import productsData from './productsData';

const Products = () => {
  return (
    <Container>
      <div className='Main-Wrapper mt-4'>
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
