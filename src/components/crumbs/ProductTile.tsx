import React from "react";
import { Col, Carousel, Image } from "react-bootstrap";

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
  images: string[];
  product: string;
  desc: string;
}) => (
  <Col sm={6} xs={12} md={4} lg={3} className="mb-4">
    <div className="Product-Card ">
      {/* <div className={"Product-Image-" + props.image}> </div> */}
      <div className="Product-Image-Carousel">
        <Carousel className="h-100" indicators={false} nextIcon={null} prevIcon={null}>
          {props.images.map((v, i) => (
            <Carousel.Item className="h-100 w-100" key={v}>
              <Image src={v} className="Product-Carousel-Item w-100" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="p-4">
        <h5>{props.product}</h5>
        <p className="Product-Desc">{props.desc}</p>
      </div>
    </div>
  </Col>
);

export default ProductCard;
