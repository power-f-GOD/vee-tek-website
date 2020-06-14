import React from 'react';
import ReactDOM from 'react-dom';

import { StylesProvider } from '@material-ui/core/styles';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.min.css';

import App from './App';

export const userDeviceIsMobile = /(Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone)/i.test(
  window.navigator.userAgent
);

if (userDeviceIsMobile) {
  document.body.classList.add('mobile');
} else {
  document.body.classList.add('desktop');
}

ReactDOM.render(
  <StylesProvider injectFirst>
    <App />
  </StylesProvider>,
  document.querySelector('#root') || document.createElement('div')
);


const works = document.querySelectorAll('.work');
const windowHeight = window.innerHeight;
const threshold = windowHeight * 0.85;

works.forEach((work, index) => {
  document.body.addEventListener('scroll', () => {
    const { top } = work.getBoundingClientRect();
    
    if (top < windowHeight + 100) {
      if (top < threshold) {
      // console.log(index, 'added', top, 'screen', window.innerHeight);
        work.classList.add('animate-children');
      } else if (top >= threshold) {
        // console.log(index, 'removed', top, 'screen', window.innerHeight);
        work.classList.remove('animate-children');
      }
    }
  });
});
