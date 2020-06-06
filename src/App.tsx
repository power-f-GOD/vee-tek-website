import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Nav,
  Landing,
  Companies,
  Events,
  Gallery,
  Contact,
  About,
  Footer
} from './components';

const App = () => {
  return (
    <div className='App fade-in'>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path={['/', '/index', '/home']} exact component={Landing} />
          <Route path='/companies' component={Companies} />
          <Route path='/events' component={Events} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
