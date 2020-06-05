import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Contact = () => {
  const map = `
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3964.554635487151!2d7.477195814266395!3d6.451175375790902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCommercial%20Plot%206%2C%20Golf%20Course%20New%20Market%20-%209th%20Mile%20Expressway%2C%20Enugu%20North%2C%20Enugu%20Nigeria.!5e0!3m2!1sen!2sng!4v1590742094581!5m2!1sen!2sng'
          class='google-map'
          frameborder='0'
          style='border:0; width: 100%; height: 100%;'
          importance='high'
          allowfullscreen=''
          aria-hidden='false'
          tabindex='0'></iframe>`;

  return (
    <Container fluid className='Contact px-0'>
      <Container
        fluid
        className='map-wrapper justify-content-center p-0'
        dangerouslySetInnerHTML={{ __html: map }}></Container>

      <Container className='contact-page-title text-center fade-in'>
        <Typography component='h1' variant='h3'>
          CONTACT US
        </Typography>
      </Container>

      <Container fluid='sm' className='contact-form-container'>
        <Row className='contact-form-wrapper'>
          <Col
            lg={9}
            className='contact-form-col d-flex flex-column justify-content-center'>
            <Typography
              component='h2'
              variant='h4'
              className='theme-color-text mb-4 text-center contact-form-header'>
              GET IN TOUCH
            </Typography>

            <Typography component='h6' className='font-italic small mb-3'>
              We look forward to getting your feedback or mail about any of our
              projects, products or services.
            </Typography>

            <form className='contact-form'>
              <Row>
                <Col sm={6} className='my-2'>
                  <TextField
                    required
                    id='name'
                    label='Name'
                    autoComplete='name'
                    fullWidth
                  />
                </Col>
                <Col sm={6} className='my-2'>
                  <TextField
                    required
                    id='email'
                    label='Email'
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
                    label='Phone'
                    autoComplete='tel'
                    fullWidth
                  />
                </Col>
                <Col sm={6} className='my-2'>
                  <TextField
                    id='standard-basic'
                    label='Company'
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
                    label='Message'
                    autoComplete='on'
                    fullWidth
                  />
                </Col>
                <Col md={6} sm={7} className='my-2 mt-5'>
                  <Button
                    className='major-button'
                    variant='contained'
                    color='primary'
                    id='submit-message'
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
                <Typography
                  component='h5'
                  variant='h5'
                  className='font-weight-bold text-center my-4'>
                  CONTACT INFORMATION
                </Typography>
              </Col>
              <Col xs={12}>
                <Row className='flex-column justify-items-center mb-4'>
                  <Col className='my-2'>
                    <LocationOnIcon fontSize='large' />
                  </Col>
                  <Col className='p-0'>
                    Commercial Plot 6, Golf Course New Market - 9th Mile
                    Expressway, Enugu North, Enugu Nigeria.
                  </Col>
                </Row>
                <Row className='flex-column justify-items-center mb-4'>
                  <Col className='my-2'>
                    <EmailIcon fontSize='large' />
                  </Col>
                  <Col className='p-0'>vee-tek@vee-tek-group.com</Col>
                </Row>
                <Row className='flex-column justify-items-center'>
                  <Col className='my-2'>
                    <PhoneIcon fontSize='large' />
                  </Col>
                  <Col className='p-0 mb-4'>+2341234567890</Col>
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
