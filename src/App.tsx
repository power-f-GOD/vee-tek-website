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
          <Route path='/events' component={Events} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route component={_404} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
