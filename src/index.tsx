import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles/index.min.css';

export const userDeviceIsMobile = /(Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone)/i.test(
  window.navigator.userAgent
);

if (userDeviceIsMobile) {
  document.body.classList.add('mobile');
} else {
  document.body.classList.add('desktop');
}

ReactDOM.render(
  <App />,
  document.querySelector('#root') || document.createElement('div')
);
