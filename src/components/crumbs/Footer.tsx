import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import Tooltip from "@material-ui/core/Tooltip";

const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer>
      <div className="Footer-Wrapper-One text-white">
        <Container className="text-left">
          <Row className="m-0">
            <Col sm={6} className="social-media-links-wrapper p-0 mt-4 mb-5">
              <Col xs={12} as="h4" className="font-weight-bold p-0 mb-4">
                Follow Us:
              </Col>
              <Tooltip title="Facebook">
                <a
                  href="https://facebook.com/veetekgroup"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FacebookIcon />{" "}
                </a>
              </Tooltip>
              <Tooltip title="Twitter">
                <a
                  href="https://twitter.com/veetekgroup"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              </Tooltip>

              <Tooltip title="Instagram">
                <a
                  href="https://instagram.com/veetekgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />{" "}
                </a>
              </Tooltip>
              <Tooltip title="Youtube">
                <a
                  href="https://www.youtube.com/channel/UCflyiiyltpkWsV6EyxuvMhw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon />
                </a>
              </Tooltip>
            </Col>
            <Col sm={6} className="contact-info-container p-0 my-4">
              <Col xs={12} as="h4" className="font-weight-bold p-0 mb-4">
                Contact Us:
              </Col>
              <a href="mailto:info@vee-tekgroup.com">
                <EmailIcon className="mr-2" />
                info@vee-tekgroup.com
              </a>
              <br />
              <a href="tel:+234(0)9032663166">
                <PhoneIcon className="mr-2" />
                +234(0)9032663166 (Plastics)
              </a>
              <br />
              <a href="tel:+234(0)8033244062">
                <PhoneIcon className="mr-2" />
                +234(0)8033244062 (Electricals)
              </a>
              <br />

              <span className="small mb-1 mt-5">
                For other inquiries call:{" "}
              </span>
              <br />
              <a href="tel:+234(0)7030489434">
                <PhoneIcon className="mr-2" /> +234(0)7030489434
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='Footer-Wrapper-Two'>
        <Container>
          <Row>
            <Col sm={5}>&copy; {thisYear} Vee-Tek Group</Col>
            {/* <Col className='devs '>Site Developed by @Power'f-GOD &amp; @Nuel</Col> */}
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
