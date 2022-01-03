import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18nextConf';
import GlobalCss from './styles/GlobalCss';
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <GlobalCss />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  ,
  document.getElementById('root'),
);
