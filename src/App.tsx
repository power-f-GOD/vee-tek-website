import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.min.css';

import {
  Header,
  Landing,
  Companies,
  Blog,
  Gallery,
  Contact,
  About,
  Footer
} from './components';

const App = () => {
  return (
    <div className='App fade-in'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={['/', '/index', '/home']} exact component={Landing} />
          <Route path='/companies' component={Companies} />
          <Route path='/blog' component={Blog} />
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
