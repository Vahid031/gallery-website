import React, { Suspense } from 'react';
import Layout from './Layout';
import {
  BrowserRouter,
  Routes,
  Route,
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
    <div>
      <GlobalCss />
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/404" element={<Page404 />} />
            <Route exact path="/500" element={<Page500 />} />
            <Route path="*" element={<Layout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
