// @flow

import React from 'react';
import { Route, Redirect } from 'react-router';

import { SIGN_IN_PATH } from 'utils/constants';

type Props = {
  isAuthenticated: boolean,
  component: Class<any>,
  cookies: Object
};

function PrivateRoute(props: Props) {
  const { isAuthenticated, component: Component, cookies, ...rest } = props;
  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? (
          <Component {...props} cookies={cookies} />
        ) : (
          <Redirect to={SIGN_IN_PATH} />
        )
      }
    />
  );
}

export default PrivateRoute;
