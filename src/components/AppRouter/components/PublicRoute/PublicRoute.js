// @flow

import React from 'react';
import { Route, Redirect } from 'react-router';

import { HOME_PATH } from 'utils/constants';

type Props = {
  isAuthenticated: boolean,
  isRestricted: boolean,
  component: Class<any>
};

function PublicRoute(props: Props) {
  const {
    isAuthenticated,
    isRestricted,
    component: Component,
    ...rest
  } = props;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated && isRestricted ? (
          <Redirect to={HOME_PATH} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;
