import React from "react";
import { Pipes } from "../../../constants";
import ProductTile from "../../crumbs/ProductTile";
import { Container, Row} from "react-bootstrap";

const Products = () => {
  return (
    <Container>
    <div className="Main-Wrapper mt-4">
      <Row>
        {Pipes.products.map((item, _) => (
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
