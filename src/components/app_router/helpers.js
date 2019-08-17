const PUBLIC_ROUTE = "PublicRoute";
const PRIVATE_ROUTE = "PrivateRoute";

export const ROOT_PATH = "/";
export const SIGN_IN_PATH = "/sign_in";
export const HOME_PATH = "/home";

export const routes = [
  {
    path: ROOT_PATH,
    exact: true,
    component: "RootPage",
    route: PUBLIC_ROUTE,
    isRestricted: false,
    key: "page_root"
  },
  {
    path: SIGN_IN_PATH,
    exact: true,
    component: "LoginPage",
    route: PUBLIC_ROUTE,
    isRestricted: true,
    key: "page_sign_in"
  },
  {
    path: HOME_PATH,
    exact: true,
    component: "HomePage",
    route: PRIVATE_ROUTE,
    key: "page_home"
  }
];
