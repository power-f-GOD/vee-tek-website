import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Order = () => {
  const map = `
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.763979407467!2d7.343352814263724!3d5.141656339109003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429bd344af48e3%3A0xd620a751ae0ca74b!2s182%20Aba-Owerri%20Rd%2C%20Abayi%2C%20Aba!5e0!3m2!1sen!2sng!4v1593412867914!5m2!1sen!2sng"
      class='google-map'
      frameborder='0'
      style='border:0; width: 100%; height: 100%;'
      importance='high'
      aria-hidden='false'
      tabindex='0'></iframe>`;

  const [nameRef, phoneRef, emailRef, companyRef, messageRef] = [
    React.useRef<HTMLInputElement>(),
    React.useRef<HTMLInputElement>(),
    React.useRef<HTMLInputElement>(),
    React.useRef<HTMLInputElement>(),
    React.useRef<HTMLInputElement>(),
  ];

  const sendEmail = () => {
    if (nameRef && phoneRef && emailRef && messageRef && companyRef)
      if (
        nameRef.current &&
        phoneRef.current &&
        emailRef.current &&
        messageRef.current &&
        companyRef.current
      ) {
        const message = `Name:  ${nameRef.current.value} \n 
                Phone Number: ${phoneRef.current.value} \n 
                Email:  ${emailRef.current.value} \n
                ${
                  companyRef.current.value
                    ? "Company: " + companyRef.current.value
                    : ""
                } \n
                Message: \n ${messageRef.current.value}`;
        console.log(message);
        window.open(
          `mailto:projectmanager@vee-tekgroup.com
              ?subject=VeeTek%20Contact&body=${message}`
        );
      }
  };

  return (
    <Container as="main" fluid className="Inquiry fade-in px-0">
      <Container
        fluid
        className="map-wrapper justify-content-center p-0"
        dangerouslySetInnerHTML={{ __html: map }}
      />

      <Container className="contact-page-title text-center fade-in">
        <Typography component="h1" variant="h3">
          PLACE AN ORDER
        </Typography>
      </Container>

      <Container fluid="sm" className="contact-form-container">
        <Row className="contact-form-wrapper">
          <Col
            lg={9}
            className="contact-form-col d-flex flex-column justify-content-center"
          >
            <Typography
              component="h2"
              variant="h4"
              className="theme-color-text mb-4 text-center contact-form-header"
            >
              SEND A MESSAGE
            </Typography>

            <Typography component="h6" className="font-italic small mb-3">
              Let us know what you would like us to enlighten or inform you
              about as regards our products or services.
            </Typography>

            <form className="contact-form" onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="my-2">
                  <TextField
                    required
                    id="name"
                    inputRef={nameRef}
                    label="Name"
                    autoComplete="name"
                    fullWidth
                  />
                </Col>
                <Col sm={6} className="my-2">
                  <TextField
                    required
                    id="email"
                    label="Email"
                    inputRef={emailRef}
                    type="email"
                    autoComplete="username"
                    fullWidth
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} className="my-2">
                  <TextField
                    required
                    type="tel"
                    id="phone"
                    label="Phone"
                    inputRef={phoneRef}
                    autoComplete="tel"
                    fullWidth
                  />
                </Col>
                <Col sm={6} className="my-2">
                  <TextField
                    id="standard-basic"
                    label="Company"
                    inputRef={companyRef}
                    autoComplete="organization"
                    fullWidth
                  />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs={12} className="my-2">
                  <TextField
                    multiline
                    required
                    rows={4}
                    rowsMax={10}
                    id="message"
                    inputRef={messageRef}
                    label="Message"
                    autoComplete="on"
                    fullWidth
                  />
                </Col>
                <Col md={5} sm={7} className="my-2 mt-5">
                  <Button
                    className="major-button outlined"
                    variant="outlined"
                    color="primary"
                    type="submit"
                    id="submit-message"
                    fullWidth
                  >
                    Send <SendIcon className="ml-2" />
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>

          <Col lg={3} className="contact-info-col">
            <Row className="align-content-center text-center h-100 p-4 py-5">
              <Col xs={12} className="p-0">
                <Typography
                  component="h5"
                  variant="h5"
                  className="font-weight-bold text-center my-4"
                >
                  CONTACT INFORMATION
                </Typography>
              </Col>
              <Col xs={12}>
                <Row className="flex-column justify-items-center mb-4">
                  <Col className="my-2">
                    <LocationOnIcon fontSize="large" />
                  </Col>
                  <Col className="p-0">
                    Commercial Plot 5-6, along Enugu/Onitsha Expressway, Golf
                    Course Estate, Phase 1, GRA, Enugu State.
                  </Col>
                </Row>
                <Row className="flex-column justify-items-center mb-4">
                  <Col className="my-2">
                    <EmailIcon fontSize="large" />
                  </Col>
                  <Col className="p-0">
                    <a
                      href="mailto:info@vee-tekgroup.com"
                      className="text-reset"
                    >
                      info@vee-tekgroup.com
                    </a>
                  </Col>
                </Row>
                <Row className="flex-column justify-items-center">
                  <Col className="my-2">
                    <PhoneIcon fontSize="large" />
                  </Col>
                  <Col className="p-0 mb-4">
                    <a href="tel:+234(0)7030489434" className="text-reset">
                      +234(0)7030489434
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Order;
