import React from "react";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";

const WhoWeAre = () => (
  <Container as="main" fluid className="fade-in p-0">
    <Parallax
      bgImage="/images/who_we_are_one.jpg"
      bgImageAlt="one"
      strength={100}
    >
      <div style={{ height: "500px" }} />
    </Parallax>
    <Parallax strength={200}>
      <Container className="p-4 white">
        <h1>About Us</h1>
        <p className="pt-4">
          Vee-Tek Nigeria Limited was registered in 1991 as an indigenous
          electrical engineering company primarily engaged in the design,
          construction and manufacturing of medium-voltage switch gears and
          general electrical engineering services, particularly heavy power
          installations such as transmission lines and injection substations. We
          maintain technical R&amp;D partnerships with Pronutec (insert link
          www.pronutec.com) and Telergon (insert link www.telergon.es) whose
          switchgear products we equally distribute. We later expanded into pipe
          manufacturing in 2015, making top-quality PVC conduit, pressure, waste
          pipes and fittings at affordable prices. In the three decades since
          our inception, we have served clients in Federal and State
          governments, the power sector, oil and gas companies, private and
          corporate organisations, other manufacturing firms, and people like
          you and I who are building and living in homes for our future. We are
          committed to Quality, Innovation and Service.
        </p>
      </Container>
    </Parallax>
    <Parallax
      bgImage="/images/who_we_are_two.jpg"
      bgStyle={{ height: "700px !important", objectFit: "cover" }}
      bgImageAlt="the dog"
      strength={200}
    >
      <div style={{ height: "500px" }} />
    </Parallax>
    <Container className="pb-5">
      <h1>We've Served</h1>
      <p>We are proud to have served the following and more.</p>
      <div className="d-flex flex-wrap p-4 justify-content-center">
        <div className="Client-Image m-2"></div>
        <div className="Client-Image m-2"></div>
        <div className="Client-Image m-2"></div>
        <div className="Client-Image m-2"></div>
        <div className="Client-Image m-2"></div>
        <div className="Client-Image m-2"></div>
        <div className="Client-Image m-2"></div>
        <div className="Client-Image m-2"></div>
      </div>
    </Container>
  </Container>
);
export default WhoWeAre;
