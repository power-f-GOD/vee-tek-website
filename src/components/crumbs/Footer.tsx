import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

const Footer = () => {
  return (
    <footer>
      <div className="Footer-Wrapper-One text-white">
        <Container className="text-left p-4">
          <Row>
            <Col xs={12} sm={6} className="mb-4">
              <h3 className="font-weight-bold mb-2"> Reach Us</h3>
              <div>
                <a
                  href="mailto:info@vee-tekgroup.com"
                  className="text-reset font-weight-light small"
                >
                  <EmailIcon className="mr-2 small" />
                  info@vee-tekgroup.com
                </a>
              </div>{" "}
              <div>
                <a
                  href="tel:+234(0)9032663166"
                  className="text-reset font-weight-light small"
                >
                  <PhoneIcon className="mr-2 small" />
                  +234(0)9032663166 (Plastics)
                </a>
              </div>{" "}
              <div className="mb-3">
                <a
                  href="tel:+234(0)8033244062"
                  className="text-reset font-weight-light small"
                >
                  <PhoneIcon className="mr-2 small" />
                  +234(0)8033244062 (Electricals)
                </a>
              </div>{" "}
              <div>
                <span className="small">For other inquiries call </span>
                <a className="text-reset small" href="tel:+234(0)7030489434">
                  +234(0)7030489434
                </a>
              </div>
            </Col>
            <Col xs={12} sm={6} className=" mb-0 mb-xs-5 ">
              <h3 className="font-weight-bold"> Follow Us</h3>
              <Row className="social-media-links-wrapper mt-2 mx-0">
                <FacebookIcon className="pr-2" />
                <TwitterIcon className="pr-2" />
                <InstagramIcon className="pr-2" />
                <YouTubeIcon className="pr-2" />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Footer-Wrapper-Two">
        <Container>© 2020 Vee-Tek Group</Container>
      </div>
    </footer>
  );
};

export default Footer;
