import React, { useState, useCallback, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  switchgearServices,
  engineeringServices,
  numOfSwitchgearWorks,
  numOfEngineeringWorks,
} from "../../../constants/switchgearsPortfolioData";

export interface Data {
  header: string;
  description: string;
  imgUrl: string;
  year: string;
  type: "switch-gear" | "engineering" | "";
}

const chunk = 8;

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
    useRef<any>(),
  ];
  const [numOfSwitchgearWorksToShow, setNumOfSwitchgearWorksToShow] = useState<
    number
  >(chunk);
  const [
    numOfEngineeringWorksToShow,
    setNumOfEngineeringWorksToShow,
  ] = useState<number>(chunk);
  const [activeProject, setActiveProject] = useState<string>("switchgear");

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
    if (activeProject === "switchgear") {
      if (numOfSwitchgearWorksToShow < numOfSwitchgearWorks) {
        setNumOfSwitchgearWorksToShow((prevNum) => prevNum + chunk);
      }
    } else {
      if (numOfEngineeringWorksToShow < numOfEngineeringWorks) {
        setNumOfEngineeringWorksToShow((prevNum) => prevNum + chunk);
      }
    }
  }, [activeProject, numOfSwitchgearWorksToShow, numOfEngineeringWorksToShow]);

  useEffect(() => {
    if (tabIndicator) {
      //using px values here for width as offsetWidth will always be relative to the element fontSize and padding which, in CSS, is already set in rem
      if (activeProject === "switchgear") {
        tabIndicator.style.width = switchgearLink.offsetWidth + "px";
        transform(tabIndicator, "translateX(0)");
      } else {
        tabIndicator.style.width = engineeringLink.offsetWidth + "px";
        transform(
          tabIndicator,
          `translateX(${switchgearLink.offsetWidth + 1}px)`
        );
      }
    }
  }, [activeProject, tabIndicator, switchgearLink, engineeringLink]);

  return (
    <Container as="main" fluid className="Portfolio fade-in pt-5">
      <Container fluid className="header-image"></Container>
      <Container className="p-0">
        <Row as="header" className="mx-0">
          <Col md={7} className="d-block">
            <Box component="h1" className="page-title">
              Our Portfolio
            </Box>
            <Col className="rider-texts-wrapper p-0 d-inline-block">
              <Col as="p" className="rider-text">
                <span>
                  "... of all contracts awarded in preparation for the Nigeria
                  ‘99 FIFA World Cup, [Vee-Tek] was the most outstanding in
                  terms of performance and high quality service."
                </span>
                <br />
                <br />- John Nwodo, Minister of Information and Culture (1999)
              </Col>
              <Col as="p" className="rider-text">
                <span>
                  "... of all contracts awarded in preparation for the Nigeria
                  ‘99 FIFA World Cup, [Vee-Tek] was the most outstanding in
                  terms of performance and high quality service."
                </span>
                <br />
                <br />- John Nwodo, Minister of Information and Culture (1999)
              </Col>
              <Col as="p" className="rider-text">
                <span>
                  "... of all contracts awarded in preparation for the Nigeria
                  ‘99 FIFA World Cup, [Vee-Tek] was the most outstanding in
                  terms of performance and high quality service."
                </span>
                <br />
                <br />- John Nwodo, Minister of Information and Culture (1999)
              </Col>
            </Col>
          </Col>
          <Col md={5} className="">
            <Col className="intro-text">
              <Col as="span" className="quote">
                "
              </Col>
              Our switchgears (ground and wall-mounted) provide reliable
              switching and protection solutions, electrical distribution
              systems, with cutting edge technology in medium voltage switchgear
              design.
            </Col>
          </Col>
        </Row>

        <Row className="justify-content-center mx-0 mt-5">
          <Box className="projects-links-container">
            <span className="tab-indicator" ref={_tabIndicator}></span>
            <NavLink
              to="#"
              className="projects-link"
              isActive={() => activeProject === "switchgear"}
              onClick={handleProjectsLinkClick("switchgear")}
              ref={_switchgearLink}
            >
              Switchgear
            </NavLink>
            <NavLink
              to="#"
              className="projects-link"
              isActive={() => activeProject === "engineering"}
              onClick={handleProjectsLinkClick("engineering")}
              ref={_engineeringLink}
            >
              Engineering
            </NavLink>
          </Box>
        </Row>

        <Row as="main" className="mx-0 mb-5">
          {activeProject === "switchgear" && (
            <Box component="section" className="fade-in">
              <Box
                component="h2"
                className="projects-header d-block w-100"
                fontWeight="bold"
                margin="6rem 0"
                fontSize="2.25rem"
              >
                Switchgear Projects Executed
              </Box>
              {switchgearServices.map((data: Data, key: number) => (
                <Work
                  data={data}
                  key={key}
                  show={key < numOfSwitchgearWorksToShow}
                />
              ))}
            </Box>
          )}

          {activeProject === "engineering" && (
            <Box component="section" className="fade-in w-100">
              <Box
                component="h2"
                className="projects-header d-block w-100"
                fontWeight="bold"
                margin="6rem 0"
                fontSize="2.25rem"
              >
                Engineering Projects Executed
              </Box>
              {engineeringServices.map((data: Data, key: number) => (
                <Work
                  data={data}
                  key={key}
                  show={key < numOfEngineeringWorksToShow}
                />
              ))}
            </Box>
          )}

          <Row className="mx-0 my-5 w-100 d-flex flex-column justify-content-center">
            <Box
              textAlign="center"
              className="d-inline-block w-auto"
              marginTop="6rem"
            >
              {((activeProject === "switchgear" &&
                numOfSwitchgearWorksToShow < numOfSwitchgearWorks) ||
                (activeProject === "engineering" &&
                  numOfEngineeringWorksToShow < numOfEngineeringWorks)) && (
                <Button
                  className="load-more-button contained my-3 mx-2"
                  variant="contained"
                  color="primary"
                  onClick={handleShowMoreClick}
                >
                  Show More <ExpandMoreIcon className="ml-2" />
                </Button>
              )}
            </Box>

            <Container className="d-inline-block w-auto mt-3">
              {activeProject === "switchgear"
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
  const { data, show } = props;
  const { header, description, imgUrl, year }: Data = data;
  const imgAlt = header + " logo";

  const hideImageElementOnError = useCallback(
    (e: any) => {
      const img = e.target;
      const noImg = e.target.nextElementSibling;

      img.style.display = "none";
      noImg.textContent = header[0].toUpperCase();
      noImg.style.display = "inline-flex";
    },
    [header]
  );

  useEffect(() => {
    const work = _work.current;
    const threshold = window.innerHeight + 100;

    if (work) {
      const animate = () => {
        if (show) {
          const { top } = work.getBoundingClientRect();

          if (top < threshold) {
            work.classList.add("animate");

            //remove scroll eventlistener after animation for performance reasons
            window.removeEventListener("scroll", animate);
          }
        }
      };

      window.addEventListener("scroll", animate);

      // call function initiallly in case element passes threshold on page load
      animate();
    }
  }, [_work, show]);

  return (
    <section
      ref={_work}
      className={`work row ${
        show ? "d-flex" : "d-none"
      } mx-0 my-4 debugger w-100 align-content-center`}
    >
      <Col as="span" className="work-date">
        {year}
      </Col>
      <Col md={6} className="work-image-wrapper">
        <img
          src={`/images/portfolio/${imgUrl}`}
          alt={imgAlt}
          className="work-image"
          onError={hideImageElementOnError}
        />
        <Col as="span" className="no-image-placeholder work-image" />
      </Col>
      <Col md={6} className="work-desc-container align-self-center h-100 p-0">
        <Col className="work-desc-wrapper">
          <Typography
            component="h3"
            variant="h3"
            className="work-desc-header mb-2"
          >
            {header}
          </Typography>
          <Col className="work-desc p-0">{description}</Col>
        </Col>
      </Col>
    </section>
  );
}

export default Portfolio;
