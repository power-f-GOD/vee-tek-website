import React from "react";
import { Col } from "react-bootstrap";
import "../../styles/index.min.css";

// const Stuff = (props: { image: string; product: string; desc: string }) => (
//   <div className={"Product-Wrapper-" + props.image + "  align-middle"}>
//     <Container className="p-5 text-white">
//       <Row>
//         <Col sm={12} md={4}>
//           <div className={"Product-Image-" + props.image}></div>
//         </Col>
//         <Col sm={12} md={8}>
//           <h2 className="font-weight-bold">{props.product}</h2>
//           <p className="pt-3">{props.desc}</p>
//         </Col>
//       </Row>
//     </Container>
//   </div>
// );

const ProductCard = (props: {
  image: string;
  product: string;
  desc: string;
}) => (
  <Col sm={12} md={4} lg={3} className="mb-4">
    <div className="Product-Card ">
      <div className={"Product-Image-" + props.image}> </div>
      <div className="p-4">
        <h5>{props.product}</h5>
        <p className="Product-Desc">{props.desc}</p>
      </div>
    </div>
  </Col>
);

export default ProductCard;
