import React from 'react';

import {Container, Row} from 'react-bootstrap';

import Landing from './components/Landing';
import './styles/index.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <div className='App'>
            <Landing/>
        </div>

    );
};

export default App;
