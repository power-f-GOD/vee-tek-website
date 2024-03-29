import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Box from '@material-ui/core/Box';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export interface Page {
  pathname: string;
  name: string;
  notRelative?: boolean;
}

export interface Data {
  pages: Page[];
}

const FooterNavigator = (props: Data) => {
  const [is404, setIs404] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { pages } = props;
  const pathname = window.location.pathname;

  useEffect(() => {
    const page = pages.find((page, i) => {
      if (page.pathname === pathname) {
        setCurrentIndex(i);
        return true;
      }
      return false;
    });

    if (!page) {
      setIs404(true);
    } else {
      setIs404(false);
    }
  }, [pathname, pages]);

  return (
    <Container as='nav' className={`FooterNavigator ${is404 ? 'd-none' : ''}`}>
      <Row className='mx-0 justify-content-between my-5'>
        <Box component='section' className='d-inline-block'>
          {currentIndex > 0 && (
            <Link
              className='navigator-link'
              to={pages[currentIndex - 1].pathname}>
              <Box>
                <ArrowBackIosIcon />
                <Box component='span' className='control-name'>
                  {pages[currentIndex - 1].notRelative ? 'Go to' : 'Previous'}
                </Box>
              </Box>
              <Box className='page-name'>{pages[currentIndex - 1].name}</Box>
            </Link>
          )}
        </Box>
        <Box component='section' className='d-inline-block'>
          {currentIndex < pages.length - 1 && (
            <Link
              className='navigator-link'
              to={pages[currentIndex + 1].pathname}>
              <Box className='justify-content-end'>
                <Box component='span' className='control-name'>
                  {pages[currentIndex + 1].notRelative ? 'Go to' : 'Next'}
                </Box>
                <ArrowForwardIosIcon />
              </Box>
              <Box className='page-name for-next'>
                {pages[currentIndex + 1].name}
              </Box>
            </Link>
          )}
        </Box>
      </Row>
    </Container>
  );
};

export default FooterNavigator;
