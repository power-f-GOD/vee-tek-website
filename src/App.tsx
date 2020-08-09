import React, { useState, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import {
  Nav,
  Home,
  Companies,
  Blog,
  Gallery,
  Contact,
  About,
  Footer,
  _404 as FourOhFour
} from './components';
import GoUpFAB from './components/crumbs/GoUpFAB';

export const NavContext = createContext('/');

const App = () => {
  const [navState, _setNavState] = useState('/');
  const setNavState = (val: string) => _setNavState(val);

  return (
    <Box className='App fade-in' position='relative'>
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
            path='/blog'
            render={(props: any) => (
              <Blog {...props} setNavState={setNavState} />
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
          <Route
            render={(props: any) => (
              <FourOhFour {...props} setNavState={setNavState} />
            )}
          />
        </Switch>

        {navState !== '/' && <Footer />}
        <GoUpFAB />
      </BrowserRouter>
    </Box>
  );
};

export default App;
