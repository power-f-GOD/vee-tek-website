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
    setNavState(pathname);

    return () => {
      setNavState('/');
      window.scrollTo(0, 0);
    };
  }, [pathname, setNavState]);

  return (
    <Container fluid className='Contact fade-in px-0'>
      <Container
        fluid
        className='map-wrapper justify-content-center p-0'
        dangerouslySetInnerHTML={{ __html: map }}
      />

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
              We look forward to getting feedback or enquiries on any of our
              projects, products and services.
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
                <Col md={5} sm={7} className='my-2 mt-5'>
                  <Button
                    className='major-button outlined'
                    variant='outlined'
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
