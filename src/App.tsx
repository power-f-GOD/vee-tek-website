import React, { useState, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Nav,
  Home,
  Companies,
  News,
  Gallery,
  Contact,
  About,
  Footer,
  _404
} from './components';
import GoUpFAB from './components/crumbs/GoUpFAB';

export const NavContext = createContext('/');

const App = () => {
  const [navState, _setNavState] = useState('/');
  const setNavState = (val: string) => _setNavState(val);

  return (
    <div className='App fade-in'>
      <BrowserRouter>
        <NavContext.Provider value={navState}>
          <Nav />
        </NavContext.Provider>

        <Switch>
          <Route path={['/', '/index', '/home']} exact component={Home} />
          <Route
            path='/companies'
            render={(props: any) => (
              <Companies {...props} setNavState={setNavState} />
            )}
          />
          <Route
            path='/news'
            render={(props: any) => (
              <News {...props} setNavState={setNavState} />
            )}
          />
          <Route
            path='/gallery'
            render={(props: any) => (
              <Gallery {...props} setNavState={setNavState} />
            )}
          />
          <Route
            path='/contact'
            render={(props: any) => (
              <Contact {...props} setNavState={setNavState} />
            )}
          />
          <Route
            path='/about'
            render={(props: any) => (
              <About {...props} setNavState={setNavState} />
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
