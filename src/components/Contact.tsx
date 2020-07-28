import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Contact = (props: any) => {
  const map = `
        <iframe
          src="https://maps.google.com/maps?q=6%C2%B027'42.3%22N%207%C2%B028'33.1%22E&t=&z=15&ie=UTF8&iwloc=&output=embed"
          class='google-map'
          frameborder='0'
          style='border:0; width: 100%; height: 100%;'
          importance='high'
          allowfullscreen=''
          aria-hidden='false'
          tabindex='0'></iframe>`;

  const { setNavState, location } = props;
  const { pathname } = location;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setNavState(pathname);

    return () => {
      setNavState('/');
    };
  }, [pathname, setNavState]);

  const [nameRef, phoneRef, emailRef, companyRef, messageRef] = [
    React.useRef<HTMLInputElement>(),
    React.useRef<HTMLInputElement>(),
    React.useRef<HTMLInputElement>(),
    React.useRef<HTMLInputElement>(),
    React.useRef<HTMLInputElement>()
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
          companyRef.current.value ? 'Company: ' + companyRef.current.value : ''
        } \n
        Message: \n ${messageRef.current.value}`;
        console.log(message);
        window.open(
          `mailto:info@vee-tekgroup.com?subject=VeeTek%20Contact&body=${message}`
        );
      }
  };

  return (
    <Container fluid className='Contact fade-in px-0'>
      <Container
        fluid
        className='map-wrapper justify-content-center p-0'
        dangerouslySetInnerHTML={{ __html: map }}
      />

      <Container className='contact-page-title text-center fade-in'>
        <Box component='h1'>
          CONTACT US
        </Box>
      </Container>

      <Container fluid='sm' className='contact-form-container'>
        <Row className='contact-form-wrapper'>
          <Col
            lg={9}
            className='contact-form-col d-flex flex-column justify-content-center'>
            <Box
              component='h2'
              className='theme-color-text mb-4 text-center contact-form-header'>
              GET IN TOUCH
            </Box>

            <Box component='h6' className='font-italic small mb-3'>
              We look forward to getting feedback or enquiries on any of our
              projects, products and services.
            </Box>

            <form
              className='contact-form'
              autoComplete='on'
              onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className='my-2'>
                  <TextField
                    required
                    id='name'
                    label='Name'
                    inputRef={nameRef}
                    autoComplete='name'
                    fullWidth
                  />
                </Col>
                <Col sm={6} className='my-2'>
                  <TextField
                    required
                    id='email'
                    label='Email'
                    inputRef={emailRef}
                    type='email'
                    autoComplete='username'
                    fullWidth
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} className='my-2'>
                  <TextField
                    required
                    type='tel'
                    id='phone'
                    inputRef={phoneRef}
                    label='Phone'
                    autoComplete='tel'
                    fullWidth
                  />
                </Col>
                <Col sm={6} className='my-2'>
                  <TextField
                    id='standard-basic'
                    label='Company'
                    inputRef={companyRef}
                    autoComplete='organization'
                    fullWidth
                  />
                </Col>
              </Row>
              <Row className='justify-content-center'>
                <Col xs={12} className='my-2'>
                  <TextField
                    multiline
                    required
                    rows={4}
                    rowsMax={10}
                    id='message'
                    inputRef={messageRef}
                    label='Message'
                    autoComplete='on'
                    fullWidth
                  />
                </Col>

                <Col md={5} sm={7} className='my-2 mt-5'>
                  <Button
                    className='major-button outlined'
                    variant='outlined'
                    color='primary'
                    id='submit-message'
                    type='submit'
                    fullWidth>
                    Send <SendIcon className='ml-2' />
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>

          <Col lg={3} className='contact-info-col'>
            <Row className='align-content-center text-center h-100 p-4 py-5'>
              <Col xs={12} className='p-0'>
                <Box
                  component='h5'
                  className='font-weight-bold text-center my-4'>
                  CONTACT INFORMATION
                </Box>
              </Col>
              <Col xs={12}>
                <Row className='flex-column justify-items-center mb-4'>
                  <Col className='my-2'>
                    <LocationOnIcon fontSize='large' />
                  </Col>
                  <Col className='p-0'>
                    Commercial Plot 5-6, Golf Course Estate, GRA, (behind SARS),
                    New Market-9th Mile Expressway, Enugu.
                  </Col>
                </Row>
                <Row className='flex-column justify-items-center mb-4'>
                  <Col className='my-2'>
                    <EmailIcon fontSize='large' />
                  </Col>
                  <Col className='p-0'>
                    <a
                      href='mailto:info@vee-tekgroup.com'
                      className='text-reset'>
                      info@vee-tekgroup.com
                    </a>
                  </Col>
                </Row>
                <Row className='flex-column justify-items-center'>
                  <Col className='my-2'>
                    <PhoneIcon fontSize='large' />
                  </Col>
                  <Col className='p-0 mb-4'>
                    <a href='tel:+234(0)9032663166' className='text-reset'>
                      +234(0)9032663166 (Plastic)
                    </a>
                  </Col>
                  <Col className='p-0 mb-4'>
                    <a href='tel:+234(0)8033244062' className='text-reset '>
                      +234(0)8033244062 (Electrical)
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

export default Contact;
