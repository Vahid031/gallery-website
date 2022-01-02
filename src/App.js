import React, { Suspense } from 'react';
import Layout from './Layout';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import './styles/App.scss';
import Page404 from './components/pages/Page404';
import Page500 from './components/pages/Page500';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ForgotPassword from './components/pages/ForgotPassword';
import GlobalCss from './styles/GlobalCss';


const loading = (
  <div>
    loading.......
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<div>not found....</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
