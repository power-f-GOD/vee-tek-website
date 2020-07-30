import React from "react";
import { Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Box from "@material-ui/core/Box";

import CompanyNews from "./CompanyNews";
import FooterNavigator, { Page } from "../crumbs/FooterNavigator";

import newsData from "./NewsData";

const main = "/news";
const pagesData: Page[] = [
  {
    pathname: "/companies/pipes-and-fittings/order",
    name: "Pipes Company",
    notRelative: true,
  },
];

const News = (props: any) => {
  const { setNavState, location } = props;
  const { pathname } = location;

  React.useEffect(() => {
    setNavState(pathname);

    return () => {
      setNavState("/");
      window.scrollTo(0, 0);
    };
  }, [pathname, setNavState]);

  return (
    <Container fluid className="News px-0">
      <Switch>
        <Route path={main} component={CompanyNews} />
      </Switch>

      <FooterNavigator pages={pagesData} />
    </Container>
  );
};

export function Main(props: any) {
  const _props = { ...props };
  const pageTitle = props.pageTitle;

  delete _props.pageTitle;

  return (
    <Col className="Main include-page-header" {..._props}>
      <Box component="h1" className="page-title">
        {pageTitle}
      </Box>
      {newsData.length === 0 ? (
        <h5 className="m-5 p-5 text-secondary">No Posts yet</h5>
      ) : (
        newsData.map((value, key) => (
          <NewsPost
            title={value.title}
            date={value.date}
            author={value.author}
            paragraph={value.paragraph}
            link={value.link}
            image={value.image}
            key={key}
          />
        ))
      )}
    </Col>
  );
}

function NewsPost(props: {
  title: string;
  date: string;
  author: string;
  paragraph: string;
  link: string;
  image: string;
}) {
  return (
    <Row className="NewsPost">
      <Col as="h2" xs={12} className="title p-0">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.title}
        </a>
      </Col>
      <Col xs={12} className="author">
        {props.author} | {props.date}
      </Col>
      <Col sm={4} className="image-container py-3">
        <img
          src={props.image || "/images/switch-gears.jpg"}
          alt="Switchgears"
        />
      </Col>
      <Col sm={8} className="text-container py-3">
        <Col className="desc p-0">{props.paragraph}</Col>
        <Col className="p-0 mt-3">
          <a href={props.link} className="link" rel="noopener noreferrer">
            Read article on Medium...
          </a>
        </Col>
      </Col>
    </Row>
  );
}

export function Aside(props: any) {
  return (
    <Col className="Aside" {...props}>
      <Row className="mx-0">
        <RecentPosts recents={newsData.slice(0, 5)} />
        <Archive
          archive={
            newsData.length > 5
              ? newsData.slice(newsData.length - 5, newsData.length)
              : []
          }
        />
      </Row>
    </Col>
  );
}

function RecentPosts(props: { recents: { title: string; link: string }[] }) {
  return (
    <Col className="RecentPosts mb-5" sm={6} lg={12}>
      <Row as="h2" className="mb-2">
        Recent Posts
      </Row>
      {props.recents.length === 0 ? (
        <p className="text-secondary">No posts yet</p>
      ) : (
        props.recents.map((post, id) => (
          <AsidePost key={id} title={post.title} link={post.link} />
        ))
      )}
    </Col>
  );
}

function Archive(props: { archive: { title: string; link: string }[] }) {
  return (
    <Col className="Archive mb-5" sm={6} lg={12}>
      <Row as="h2" className="mb-2">
        Archive
      </Row>
      {props.archive.length === 0 ? (
        <p className="text-secondary">No posts in archive yet</p>
      ) : (
        props.archive.map((post, id) => (
          <AsidePost key={id} title={post.title} link={post.link} />
        ))
      )}
    </Col>
  );
}

function AsidePost(props: { title: string; link: string }) {
  return (
    <Row className="AsidePost x-0">
      <a href={props.link}>{props.title}</a>
    </Row>
  );
}

export default News;
