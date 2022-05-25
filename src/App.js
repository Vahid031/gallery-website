import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import './styles/App.scss';
import Page404 from './components/pages/Page404';
import Page500 from './components/pages/Page500';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ForgotPassword from './components/pages/ForgotPassword';


const loading = (
  <div>
    loading.......
  </div>
)

function App() {
  return (


<Suspense fallback={loading} >

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
      // 


  );
}

export default App;
