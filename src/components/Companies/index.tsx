import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import SwitchGears from "./Switchgears";
import PipesAndFittings from "./PipesAndFittings";
import _404 from "../_404";

const Companies = (props: any) => {
  const { callSetNavState, location } = props;
  const { pathname } = location;

  useEffect(() => {
    callSetNavState(pathname);
    document.body.classList.add("companies");

    return () => {
      callSetNavState("/");
      document.body.classList.remove("companies");
    };
  }, [pathname, callSetNavState]);

  return (
    <div className="fade-in pt-5 mt-2">
      <Switch>
        <Route path="/companies/switch-gears" component={SwitchGears} />
        <Route path="/companies/pipes-and-fittings" component={PipesAndFittings} />
        <Route component={_404} />
      </Switch>
    </div>
  );
};

export default Companies;
