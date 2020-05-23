import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Contact = () => {
  return (
    <Container fluid className='Contact'>
      <Container className='title text-center fade-in'>
        <Typography component='h1' variant='h3'>
          CONTACT US
        </Typography>
      </Container>
      <Container fluid='sm' className='form-container'>
        <Row className='contact-form-wrapper'>
          <Col lg={9} className='contact-form-col'>
            <Typography
              component='h2'
              variant='h4'
              className='theme-color-text mb-4 text-center'>
              GET IN TOUCH
            </Typography>
            <Typography component='h6' className='font-italic small mb-3'>
              We look forward to getting your feedback or mail about any of our
              projects, products or services.
            </Typography>
            <form className='contact-form'>
              <Row>
                <Col md={6} className='my-2'>
                  <TextField
                    required
                    id='name'
                    label='Name'
                    autoComplete='name'
                    fullWidth
                  />
                </Col>
                <Col md={6} className='my-2'>
                  <TextField
                    required
                    id='standard-basic'
                    label='Email'
                    autoComplete='username'
                    fullWidth
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} className='my-2'>
                  <TextField
                    type='tel'
                    id='phone'
                    label='Phone'
                    autoComplete='tel'
                    fullWidth
                  />
                </Col>
                <Col md={6} className='my-2'>
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
                <Col md={6} className='my-2 mt-5'>
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
          <Col lg={3} className='social-media-col'>
            <Row className='align-content-center text-center h-100 p-4 py-5'>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className='p-0'>
                    <Typography
                      component='h5'
                      variant='h5'
                      className='font-weight-bold text-center my-3'>
                      CONTACT INFORMATION
                    </Typography>
                  </Col>
                  <Col xs={12}>
                    <Row className='flex-column justify-items-center mb-3'>
                      <Col className='my-2'><LocationOnIcon fontSize='large' /></Col>
                      <Col className='p-0'>Commercial Plot 6, Golf Course New Market - 9th Mile Expressway, Enugu North, Enugu Nigeria.</Col> 
                    </Row>
                    <Row className='flex-column justify-items-center mb-3'>
                      <Col className='my-2'><EmailIcon fontSize='large' /></Col>
                      <Col className='p-0'>vee-tek@vee-tek-group.com</Col> 
                    </Row>
                    <Row className='flex-column justify-items-center mb-3'>
                      <Col className='my-2'><PhoneIcon fontSize='large' /></Col>
                      <Col className='p-0 mb-4'>+2341234567890</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Row className='map-wrapper'></Row>
    </Container>
  );
};

export default Contact;
