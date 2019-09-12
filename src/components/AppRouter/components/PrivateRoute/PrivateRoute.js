// @flow

import React from 'react';
import { Route, Redirect } from 'react-router';

import { SIGN_IN_PATH } from 'utils/constants';

type Props = {
  isAuthenticated: boolean,
  component: Class<any>
};

function PrivateRoute(props: Props) {
  const { isAuthenticated, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={SIGN_IN_PATH} />
      ))}
    />
  );
}

export default PrivateRoute;
