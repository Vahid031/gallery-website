import React from 'react';

const TheDashboard = React.lazy(() => import('./components/views/TheDashboard'));

const routes = [
  { path: '/', exact: true, key: 'Home' },
  { path: '/dashboard', exact: true, key: 'Dashboard', component: TheDashboard, requireAuth : false  }
];

export default routes;