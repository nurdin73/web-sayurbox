import React from 'react';

const Dashboard = React.lazy(() => import('./Pages/Admin/Dashboard'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard }
];

export default routes;
