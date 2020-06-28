import React from "react";
import { Switch, Route } from "react-router-dom";

import WhoWeAre from "../components/About/WhoWeAre";
import OurPeople from "../components/About/OurPeople";
import _404 from "./_404";

const About = (props: any) => {
  const { callSetNavState, location } = props;
  const { pathname } = location;

  React.useEffect(() => {
    callSetNavState(pathname);

    return () => {
      callSetNavState("/");
    };
  }, [pathname, callSetNavState]);

  return (
    <div className="fade-in ">
      <Switch>
        <Route path="/about/who-we-are" component={WhoWeAre} />
        <Route path="/about/our-people" component={OurPeople} />

        <Route component={_404} />
      </Switch>
    </div>
  );
};

export default About;
