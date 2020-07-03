import React from "react";

import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";

const SustainabilityStrategy = () => {
  return (
    <div className="fade-in">
      <Parallax bgImage="/images/three.jpg" bgImageAlt="one" strength={200}>
        <div
          style={{ height: "500px" }}
          className="pt-5 text-center d-flex justify-content-center align-items-center"
        >
          <h1 className="mt-5 text-white font-weight-bold">
            {" "}
            Sustainability Strategy{" "}
          </h1>
        </div>
      </Parallax>
      <Container className="mb-5">
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac
          ut consequat semper viverra. At in tellus integer feugiat scelerisque.
          Ultricies leo integer malesuada nunc. Aliquam eleifend mi in nulla
          posuere sollicitudin aliquam ultrices sagittis. Ut tortor pretium
          viverra suspendisse potenti nullam. Et sollicitudin ac orci phasellus
          egestas tellus rutrum tellus pellentesque. Sit amet nisl suscipit
          adipiscing bibendum est ultricies. Enim tortor at auctor urna. Ornare
          suspendisse sed nisi lacus sed viverra tellus. Bibendum neque egestas
          congue quisque. Tellus molestie nunc non blandit massa. Egestas
          pretium aenean pharetra magna ac placerat vestibulum lectus. Auctor eu
          augue ut lectus arcu bibendum at. Feugiat in ante metus dictum at.
          Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit.
          Vestibulum lectus mauris ultrices eros in cursus turpis massa
          tincidunt. Venenatis tellus in metus vulputate eu.
        </p>
        <p className="text-justify">
          Ut morbi tincidunt augue interdum velit euismod in pellentesque massa.
          Orci ac auctor augue mauris augue neque gravida in. Dui id ornare arcu
          odio ut sem nulla pharetra. Aliquet nec ullamcorper sit amet risus
          nullam eget. Consectetur lorem donec massa sapien faucibus et. Enim
          sed faucibus turpis in eu mi bibendum. Risus at ultrices mi tempus
          imperdiet nulla malesuada pellentesque. Non arcu risus quis varius
          quam quisque id diam vel. Et tortor at risus viverra adipiscing at in
          tellus. Nisi porta lorem mollis aliquam ut porttitor leo. Risus
          commodo viverra maecenas accumsan lacus. Ultrices tincidunt arcu non
          sodales neque sodales ut. Ac placerat vestibulum lectus mauris
          ultrices eros in cursus. Fusce ut placerat orci nulla pellentesque
          dignissim enim sit.
        </p>
        <p className="text-justify">
          Cras semper auctor neque vitae tempus quam pellentesque. Commodo
          ullamcorper a lacus vestibulum sed arcu non odio euismod. Viverra
          justo nec ultrices dui sapien eget mi proin sed. Nec ullamcorper sit
          amet risus nullam eget felis eget nunc. Et pharetra pharetra massa
          massa ultricies mi. Mattis aliquam faucibus purus in. Bibendum neque
          egestas congue quisque egestas diam in arcu cursus. In cursus turpis
          massa tincidunt dui ut ornare. Enim blandit volutpat maecenas volutpat
          blandit aliquam etiam. Id donec ultrices tincidunt arcu. Duis
          tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
          Est velit egestas dui id ornare arcu. Ultrices gravida dictum fusce ut
          placerat orci nulla pellentesque dignissim.
        </p>
      </Container>
    </div>
  );
};

export default SustainabilityStrategy;
