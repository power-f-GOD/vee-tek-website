import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import Tooltip from '@material-ui/core/Tooltip';

import { NavContext } from '../../App';

function TopNavLinks({
  toggleDrawerIsOpen
}: {
  toggleDrawerIsOpen?: Function;
}) {
  const navState = React.useContext(NavContext);

  const handleSetDrawerIsOpen = React.useCallback(
    () => (toggleDrawerIsOpen ? toggleDrawerIsOpen(false) : null),
    [toggleDrawerIsOpen]
  );

  return (
    <Box className='top-nav-box'>
      <Container>
        <Row className='top-nav-wrapper'>
          <Col>
            <span>
              <a
                href='mailto:info@vee-tekgroup.com'
                onClick={handleSetDrawerIsOpen}>
                <EmailIcon /> info@vee-tekgroup.com
              </a>
            </span>{' '}
            {/pipes/.test(navState) ? (
              <span className='mr-3'>
                <a href='tel:+234(0)9032663166' onClick={handleSetDrawerIsOpen}>
                  <PhoneIcon /> +234(0)9032663166 (Plastics)
                </a>
              </span>
            ) : (
              /switch/.test(navState) && (
                <span>
                  <a
                    href='tel:+234(0)8033244062'
                    onClick={handleSetDrawerIsOpen}>
                    <PhoneIcon /> +234(0)8033244062 (Electricals)
                  </a>
                </span>
              )
            )}
          </Col>
          <Col className='social-media-links-wrapper d-flex justify-content-between'>
            <Tooltip title='Facebook'>
              <a
                href='https://web.facebook.com/veetekgroup'
                rel='noopener noreferrer'
                target='_blank'
                onClick={handleSetDrawerIsOpen}>
                <FacebookIcon />
              </a>
            </Tooltip>
            <Tooltip title='Twitter'>
              <a
                href='https://twitter.com/veetekgroup'
                target='_blank'
                rel='noopener noreferrer'
                onClick={handleSetDrawerIsOpen}>
                {' '}
                <TwitterIcon />{' '}
              </a>
            </Tooltip>
            <Tooltip title='Instagram'>
              <a
                href='https://instagram.com/veetekgroup'
                target='_blank'
                rel='noopener noreferrer'
                onClick={handleSetDrawerIsOpen}>
                <InstagramIcon />
              </a>
            </Tooltip>
            <Tooltip title='Youtube'>
              <a
                href='https://www.youtube.com/channel/UCflyiiyltpkWsV6EyxuvMhw'
                target='_blank'
                rel='noopener noreferrer'
                onClick={handleSetDrawerIsOpen}>
                <YouTubeIcon />
              </a>
            </Tooltip>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}

export default TopNavLinks;
