import React, {StrictMode} from 'react';
import App from './App';
import './i18nextConf';
import GlobalCss from './styles/GlobalCss';
import {createRoot} from 'react-dom/client';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const rootelement = document.getElementById('root');
const root = createRoot(rootelement);

root.render(
  <StrictMode>
    <GlobalCss />
    <Router>
    <App />
    </Router>
  </StrictMode>,
);
