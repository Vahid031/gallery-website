import React, { Suspense } from 'react';
import Layout from './Layout';
// import {
//   BrowserRouter,
//   Routes, // instead of "Switch"
//   Route,
// } from "react-router-dom";
import './styles/App.scss';


const loading = (
  <div>
    loading.......
  </div>
)

function App() {
    return (
      <Suspense fallback={loading}>
        <Layout />         
      </Suspense>
    );
}

export default App;
