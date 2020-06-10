import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Products = () => {
  return (
    <div className="Main-Wrapper">
      <div className="Product-Wrapper  align-middle">
        <Container className="p-5 text-white">
          <Row>
            <Col sm={12} md={4}>
              <div className="Product-Image"></div>
            </Col>
            <Col sm={12} md={8}>
              <h2 className="font-weight-bold">Product 1</h2>
              <p className="pt-3">
                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Product-Wrapper  align-middle">
        <Container className="p-5 text-white">
          <Row>
            <Col sm={12} md={4}>
              <div className="Product-Image"></div>
            </Col>
            <Col sm={12} md={8}>
              <h2 className="font-weight-bold">Product 2</h2>
              <p className="pt-3">
                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Product-Wrapper  align-middle">
        <Container className="p-5 text-white">
          <Row>
            <Col sm={12} md={4}>
              <div className="Product-Image"></div>
            </Col>
            <Col sm={12} md={8}>
              <h2 className="font-weight-bold">Product 3</h2>
              <p className="pt-3">
                Dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Products;
