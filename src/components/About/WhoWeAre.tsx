import React from "react";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";

const WhoWeAre = () => (
  <div>
    <Parallax
      bgImage="/images/who_we_are_one.jpg"
      bgImageAlt="one"
      strength={100}
    >
      <div style={{ height: "500px" }} />
    </Parallax>
    <Parallax strength={200}>
      <Container className="p-4 white">
        <h1>In the Beginnig</h1>
        <p className="pt-4">
          Vee-Tek Nigeria Limited was registered in 1991 as an indigenous
          electrical engineering company primarily engaged in the design,
          construction and manufacture of medium voltage switchgears and general
          electrical engineering services. The company also undertakes
          Engineering contracting and procurement. In two decades Vee-tek has
          grown into a reputable manufacturing and contracting firm with a
          growing list of notable clients including Federal and state Government
          agencies and parastatals. Power sector, oil and gas companies,
          manufacturing firms, private and corporate organizations.
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
    <Parallax strength={200}>
      <Container className="p-4">
        <h1>Our People</h1>
        <p className="pt-4">
          Our Engineering team is made up of competent engineers with no less
          than 30years hands on experience in electrical engineering. With
          constant training and re-trainninng, the team is abreast with the
          lates t development in the industry. The technical team comprises of
          electricians, fabricators, welders, etc. and is very key to delivering
          high quality projects and services. Their competence derives from
          education, training and exposure to industry best practices. Above all
          staff welfare is a critical policy matter as management recognizes the
          importance of staff motivation at all levels. At Veetek Nigeria
          limited, safety precautions are held in highest priority. The safety
          officer ensures religious compliance to highest industry safety
          standards and extra measures are put in place to guarantee safest
          working environment. This has helped us to maintain a zero harm
          record.
        </p>
      </Container>
    </Parallax>
    <Container className="pb-5">
      <h1>Our Clients</h1>
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
  </div>
);
export default WhoWeAre;
