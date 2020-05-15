import React from 'react';

import { Container, Row } from 'react-bootstrap';

import Landing from './components/Landing';
import './styles/index.min.css';

const App = () => {
  return (
    <Container>
      <Row>
        <div className='App'>
          <header className='App-header'>
            <h1>Welcome to VeeTek website!</h1>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'>
              Learn React
            </a>
            <Landing />
          </header>
        </div>
      </Row>
    </Container>
  );
};

export default App;
