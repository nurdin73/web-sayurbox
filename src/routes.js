import React from 'react';

const Dashboard = React.lazy(() => import('./Pages/Admin/Dashboard'));
// const Archive = React.lazy(() => import('./Pages/Admin/Archive'));
const Buyer = React.lazy(() => import('./Pages/Admin/Buyer'));
const Discount = React.lazy(() => import('./Pages/Admin/Discount'));
const Product = React.lazy(() => import('./Pages/Admin/Product'));
const Profile = React.lazy(() => import('./Pages/Admin/Profile'));
const Report = React.lazy(() => import('./Pages/Admin/Report'));
const Seller = React.lazy(() => import('./Pages/Admin/Seller'));
const Transaction = React.lazy(() => import('./Pages/Admin/Transaction'));
const Archive_product = React.lazy(() => import('./Pages/Admin/Archive/Archive_product'));
const Buyer_archive = React.lazy(() => import('./Pages/Admin/Archive/Archive_users/Buyer_archive'));
const Seller_archive = React.lazy(() => import('./Pages/Admin/Archive/Archive_users/Seller_archive'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/archive', name: 'Archive', component: Archive },
  { path: '/archive/product', name: 'Archive Product', component: Archive_product },
  { path: '/archive/member/seller', name: 'Archive User Seller', component: Seller_archive },
  { path: '/archive/member/buyer', name: 'Archive User Buyer', component: Buyer_archive },
  { path: '/member/pembeli', name: 'Pembeli', component: Buyer },
  { path: '/member/penjual', name: 'Penjual', component: Seller },
  { path: '/master/product', name: 'Product', component: Product },
  { path: '/master/discount', name: 'Discount', component: Discount },
  { path: '/report', name: 'Report', component: Report },
  { path: '/transaction', name: 'Transaction', component: Transaction },
  { path: '/profile', name: 'Profile', component: Profile },
];

export default routes;
