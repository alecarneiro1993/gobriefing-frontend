const PUBLIC_ROUTE = 'PublicRoute';
const PRIVATE_ROUTE = 'PrivateRoute';

export const routes = [
  {
    path: '/',
    exact: true,
    component: 'RootPage',
    route: PUBLIC_ROUTE,
    isRestricted: false,
    key: 'page_root',
  },
  {
    path: '/sign_in',
    exact: true,
    component: 'LoginPage',
    route: PUBLIC_ROUTE,
    isRestricted: true,
    key: 'page_sign_in',
  },
  {
    path: '/home',
    exact: true,
    component: 'HomePage',
    route: PRIVATE_ROUTE,
    key: 'page_home',
  },
];
