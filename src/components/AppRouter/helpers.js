import {
  ROOT_PATH,
  HOME_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from 'utils/constants/routes';
import {
  SIGN_IN_PAGE,
  ROOT_PAGE,
  HOME_PAGE,
  SIGN_UP_PAGE,
} from 'utils/constants/pages';

const PUBLIC_ROUTE = 'PublicRoute';
const PRIVATE_ROUTE = 'PrivateRoute';

export const routes = [
  {
    path: ROOT_PATH,
    exact: true,
    component: ROOT_PAGE,
    route: PUBLIC_ROUTE,
    isRestricted: false,
    key: 'page_root',
  },
  {
    path: SIGN_IN_PATH,
    exact: true,
    component: SIGN_IN_PAGE,
    route: PUBLIC_ROUTE,
    isRestricted: true,
    key: 'page_sign_in',
  },
  {
    path: HOME_PATH,
    exact: true,
    component: HOME_PAGE,
    route: PRIVATE_ROUTE,
    key: 'page_home',
  },
  {
    path: SIGN_UP_PATH,
    exact: true,
    component: SIGN_UP_PAGE,
    route: PUBLIC_ROUTE,
    key: 'page_sign_up',
  },
];
