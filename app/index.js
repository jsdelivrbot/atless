import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//import registerServiceWorker from './registerServiceWorker';
import App from './src/App.js';
import './src/css/main.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

//registerServiceWorker()
