// @flow

import React from 'react';
import { Route, Redirect } from 'react-router';

import { HOME_PATH } from 'utils/constants';

type Props = {
  isAuthenticated: boolean,
  isRestricted: boolean,
  component: Class<any>,
  cookies: Object
};

function PublicRoute(props: Props) {
  const {
    isAuthenticated,
    isRestricted,
    component: Component,
    cookies,
    ...rest
  } = props;
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated && isRestricted ? (
        <Redirect to={HOME_PATH} />
      ) : (
        <Component {...props} cookies={cookies} />
      ))}
    />
  );
}

export default PublicRoute;
