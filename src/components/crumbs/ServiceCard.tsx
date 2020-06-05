import React from "react";
import { Col, Image } from "react-bootstrap";
import "../../styles/index.min.css";

interface ServiceCardProps {
  image?: string;
  title?: string;
  desc?: string;
}

class ServiceCard extends React.Component<ServiceCardProps> {
  render() {
    return (
      <Col sm={12} md={4} className="mb-5">
        <div className="Service-Card p-4 pt-5 pb-5">
          <div className="w-100 d-flex justify-content-center">
            <div className="Circle d-flex justify-content-center align-items-center">
              <Image src={this.props.image} />
            </div>
          </div>
          <div className="d-block mt-2 pt-3 w-auto Service-Card-Text">
            <h5 className="font-weight-bold mb-2">{this.props.title}</h5>
            <p className="p-1">
             {this.props.desc}
            </p>
          </div>
        </div>
      </Col>
    );
  }
}

export default ServiceCard;
