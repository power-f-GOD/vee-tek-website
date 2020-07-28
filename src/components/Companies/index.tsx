import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import SwitchGears from './Switchgears';
import PipesAndFittings from './PipesAndFittings';
import _404 from '../_404';

const Companies = (props: any) => {
  const { setNavState, location } = props;
  const { pathname } = location;

  useEffect(() => {
    setNavState(pathname);
    //lassnames used in the corresponding SCSS file
    // document.body.classList.add('companies');

    return () => {
      setNavState('/');
      // document.body.classList.remove('companies');
    };
  }, [pathname, setNavState]);

  return (
    <Switch>
      <Route path='/companies/switchgears' component={SwitchGears} />
      <Route
        path='/companies/pipes-and-fittings'
        component={PipesAndFittings}
      />
      <Route component={_404} />
    </Switch>
  );
};

export default Companies;
