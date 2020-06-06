import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import GearsCompany from './GearsCompany';
import PipesCompany from './PipesCompany';

const Companies = () => {
  let pathname = window.location.pathname;

  useEffect(() => {
    document.body.classList.add('companies');

    return () => {
      document.body.classList.remove('companies');
    }
  }, [pathname])

  return (
    <div className='fade-in my-5 py-5'>
      <h1>This is the Companies component!</h1>
      <Switch>
        <Route path='/companies/switch-gears' component={GearsCompany} />
        <Route path='/companies/pipes-and-fittings' component={PipesCompany} />
      </Switch>
    </div>
  );
};

export default Companies;
