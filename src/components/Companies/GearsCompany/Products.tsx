import React from "react";
import { Gear } from "../../../constants";
import ProductTile from "../../crumbs/ProductTile";
import { Row, Container } from "react-bootstrap";

const Products = () => {
  return (
    <Container>
    <div className="Main-Wrapper">
      <Row>
        {Gear.products.map((item, _) => (
          <ProductTile
            image={item.key}
            product={item.product}
            desc={item.desc}
          />
        ))}
      </Row>
    </div>
    </Container>
  );
};

export default Products;
