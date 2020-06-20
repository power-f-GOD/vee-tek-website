import React, { useState, useCallback, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import {
  switchgearServices,
  engineeringServices,
  numOfSwitchgearWorks,
  numOfEngineeringWorks
} from './portfolioDataV2';

export interface Data {
  header: string;
  description: string;
  imgUrl: string;
  year?: string;
  type?: 'switch-gear' | 'engineering' | '';
}

const limit = 5;

export const transform = (el: any, val: string) => {
  el.style.WebkitTransform = val;
  el.style.MozTransform = val;
  el.style.OTransform = val;
  el.style.transform = val;
};

const Portfolio = () => {
  const [_switchgearLink, _engineeringLink, _tabIndicator] = [
    useRef<any>(),
    useRef<any>(),
    useRef<any>()
  ];
  const [numOfSwitchgearWorksToShow, setNumOfSwitchgearWorksToShow] = useState<
    number
  >(limit);
  const [
    numOfEngineeringWorksToShow,
    setNumOfEngineeringWorksToShow
  ] = useState<number>(limit);
  const [activeProject, setActiveProject] = useState<string>('switchgear');

  let switchgearLink = _switchgearLink.current as HTMLAnchorElement;
  let engineeringLink = _engineeringLink.current as HTMLAnchorElement;
  let tabIndicator = _tabIndicator.current as HTMLSpanElement;

  const handleProjectsLinkClick = useCallback(
    (project: string) => (e: any) => {
      e.preventDefault();
      setActiveProject(project);
    },
    []
  );

  const handleShowMoreClick = useCallback(() => {
    if (activeProject === 'switchgear') {
      if (numOfSwitchgearWorksToShow < numOfSwitchgearWorks) {
        setNumOfSwitchgearWorksToShow((prevNum) => prevNum + limit);
      }
    } else {
      if (numOfEngineeringWorksToShow < numOfEngineeringWorks) {
        setNumOfEngineeringWorksToShow((prevNum) => prevNum + limit);
      }
    }
  }, [activeProject, numOfSwitchgearWorksToShow, numOfEngineeringWorksToShow]);

  const handleShowLessClick = useCallback(() => {
    if (activeProject === 'switchgear') {
      if (numOfSwitchgearWorksToShow > limit) {
        setNumOfSwitchgearWorksToShow((prevNum) => prevNum - limit);
      }
    } else {
      if (numOfEngineeringWorksToShow > limit) {
        setNumOfEngineeringWorksToShow((prevNum) => prevNum - limit);
      }
    }
  }, [activeProject, numOfSwitchgearWorksToShow, numOfEngineeringWorksToShow]);

  useEffect(() => {
    if (tabIndicator) {
      //using px values here for width as offsetWidth will always be relative to the element fontSize and padding which, in CSS, is already set in rem
      if (activeProject === 'switchgear') {
        tabIndicator.style.width = switchgearLink.offsetWidth + 'px';
        transform(tabIndicator, 'translateX(0)');
      } else {
        tabIndicator.style.width = engineeringLink.offsetWidth + 'px';
        transform(
          tabIndicator,
          `translateX(${switchgearLink.offsetWidth + 1}px)`
        );
      }
    }
  }, [activeProject, tabIndicator, switchgearLink, engineeringLink]);

  return (
    <Container fluid className='Portfolio debugger'>
      <Container fluid className='header-image'></Container>
      <Container className='p-0'>
        <Row as='header' className='mx-0'>
          <Col md={7} className='d-block'>
            <Typography component='h1' variant='h3' className='page-title'>
              Our Portfolio
            </Typography>
            <Col className='rider-texts-wrapper p-0 d-inline-block'>
              <Col as='p' className='rider-text'>
                <span>"Some nice rider text beneath!"</span>
                <br />- Scott
              </Col>
              <Col as='p' className='rider-text'>
                <span>"Another nice rider text beneath!"</span>
                <br />- Smith
              </Col>
              <Col as='p' className='rider-text'>
                <span>"And a third nice rider text beneath!"</span>
                <br />- Jane
              </Col>
            </Col>
          </Col>
          <Col md={5} className=''>
            <Col className='intro-text'>
              <Col as='span' className='quote'>
                "
              </Col>
              Over the years, we have mastered the Switch-gear which is evident
              in some of the works we have executed.
              <br />
              <br />
              Below are some of our clients and various works executed for
              them...
            </Col>
          </Col>
        </Row>

        <Row className='justify-content-center mx-0 mt-5'>
          <Box className='projects-links-container'>
            <span className='tab-indicator' ref={_tabIndicator}></span>
            <NavLink
              to='#'
              className='projects-link'
              isActive={() => activeProject === 'switchgear'}
              onClick={handleProjectsLinkClick('switchgear')}
              ref={_switchgearLink}>
              Switchgear
            </NavLink>
            <NavLink
              to='#'
              className='projects-link'
              isActive={() => activeProject === 'engineering'}
              onClick={handleProjectsLinkClick('engineering')}
              ref={_engineeringLink}>
              Engineering
            </NavLink>
          </Box>
        </Row>

        <Row as='main' className='mx-0 mb-5'>
          {activeProject === 'switchgear' && (
            <Box component='section' className='fade-in'>
              <Box
                component='h2'
                className='projects-header d-block w-100'
                fontWeight='bold'
                margin='6rem 0'
                fontSize='2.25rem'>
                Switchgear Projects Executed
              </Box>
              {switchgearServices
                .slice(0, numOfSwitchgearWorksToShow)
                .map((data: Data, key: number) => (
                  <Work data={data} key={key} />
                ))}
            </Box>
          )}

          {activeProject === 'engineering' && (
            <Box component='section' className='fade-in w-100'>
              <Box
                component='h2'
                className='projects-header d-block w-100'
                fontWeight='bold'
                margin='6rem 0'
                fontSize='2.25rem'>
                Engineering Projects Executed
              </Box>
              {engineeringServices
                .slice(0, numOfEngineeringWorksToShow)
                .map((data: Data, key: number) => (
                  <Work data={data} key={key} />
                ))}
            </Box>
          )}

          <Row className='mx-0 my-5 w-100 d-flex flex-column justify-content-center'>
            <Box textAlign='center' className='d-inline-block w-auto'>
              {((activeProject === 'switchgear' &&
                numOfSwitchgearWorksToShow > limit) ||
                (activeProject === 'engineering' &&
                  numOfEngineeringWorksToShow > limit)) && (
                <Button
                  className='load-more-button outlined my-3 mx-2'
                  variant='contained'
                  color='primary'
                  onClick={handleShowLessClick}>
                  Show Less <ExpandLessIcon className='ml-2' />
                </Button>
              )}
              {((activeProject === 'switchgear' &&
                numOfSwitchgearWorksToShow < numOfSwitchgearWorks) ||
                (activeProject === 'engineering' &&
                  numOfEngineeringWorksToShow < numOfEngineeringWorks)) && (
                <Button
                  className='load-more-button contained my-3 mx-2'
                  variant='contained'
                  color='primary'
                  onClick={handleShowMoreClick}>
                  Show More <ExpandMoreIcon className='ml-2' />
                </Button>
              )}
            </Box>

            <Container className='d-inline-block w-auto mt-3'>
              {activeProject === 'switchgear'
                ? `${
                    numOfSwitchgearWorksToShow > numOfSwitchgearWorks
                      ? numOfSwitchgearWorks
                      : numOfSwitchgearWorksToShow
                  } of
              ${numOfSwitchgearWorks}`
                : `${
                    numOfEngineeringWorksToShow > numOfEngineeringWorks
                      ? numOfEngineeringWorks
                      : numOfEngineeringWorksToShow
                  } of
              ${numOfEngineeringWorks}`}
            </Container>
          </Row>
        </Row>
      </Container>
    </Container>
  );
};

function Work(props: any) {
  const _work = useRef() as any;
  const { data } = props;
  const { header, description, imgUrl, year }: Data = data;
  const imgAlt = header + ' logo';

  const hideImageElementOnError = useCallback(
    (e: any) => {
      const img = e.target;
      const noImg = e.target.nextElementSibling;

      img.style.display = 'none';
      noImg.textContent = header[0].toUpperCase();
      noImg.style.display = 'inline-flex';
    },
    [header]
  );

  useEffect(() => {
    const work = _work.current;
    const windowHeight = window.innerHeight;
    const threshold = windowHeight * 0.8;

    if (work) {
      const animate = () => {
        const { top } = work.getBoundingClientRect();

        if (top < windowHeight + 200) {
          if (top < threshold) {
            work.classList.add('animate');

            //remove scroll eventlistener after animation for performance reasons
            document.body.removeEventListener('scroll', animate);
          }
        }
      };

      document.body.addEventListener('scroll', animate);

      // call function initiallly in case element passes threshold on page load
      animate();
    }
  }, [_work]);

  return (
    <section
      ref={_work}
      className='work row d-flex mx-0 my-4 debugger w-100 align-content-center'>
      <Col as='span' className='work-date'>
        {year}
      </Col>
      <Col md={6} className='work-image-wrapper'>
        <img
          src={`/images/portfolio/${imgUrl}`}
          alt={imgAlt}
          className='work-image'
          onError={hideImageElementOnError}
        />
        <Col as='span' className='no-image-placeholder work-image' />
      </Col>
      <Col md={6} className='work-desc-container align-self-center h-100 p-0'>
        <Col className='work-desc-wrapper'>
          <Typography
            component='h3'
            variant='h3'
            className='work-desc-header mb-2'>
            {header}
          </Typography>
          <Col className='work-desc p-0'>{description}</Col>
        </Col>
      </Col>
    </section>
  );
}

export default Portfolio;
