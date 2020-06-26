import React, { useState, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Nav,
  Landing,
  Companies,
  Events,
  Gallery,
  Contact,
  About,
  Footer,
  _404
} from './components';
import GoUpFAB from './components/crumbs/GoUpFAB';

export const NavContext = createContext('/');

const App = () => {
  const [navState, setNavState] = useState('/');
  const callSetNavState = (val: string) => setNavState(val);

  return (
    <div className='App fade-in'>
      <BrowserRouter>
        <NavContext.Provider value={navState}>
          <Nav />
        </NavContext.Provider>

        <Switch>
          <Route path={['/', '/index', '/home']} exact component={Landing} />
          <Route
            path='/companies'
            render={(props: any) => (
              <Companies {...props} callSetNavState={callSetNavState} />
            )}
          />
          <Route
            path='/events'
            render={(props: any) => (
              <Events {...props} callSetNavState={callSetNavState} />
            )}
          />
          <Route
            path='/gallery'
            render={(props: any) => (
              <Gallery {...props} callSetNavState={callSetNavState} />
            )}
          />
          <Route
            path='/contact'
            render={(props: any) => (
              <Contact {...props} callSetNavState={callSetNavState} />
            )}
          />
          <Route
            path='/about'
            render={(props: any) => (
              <About {...props} callSetNavState={callSetNavState} />
            )}
          />
          <Route component={_404} />
        </Switch>

        <Footer />
        <GoUpFAB />
      </BrowserRouter>
    </div>
  );
};

export default App;
