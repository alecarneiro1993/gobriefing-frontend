import React from "react";
import { Route, Redirect } from "react-router";
import PropTypes from "prop-types";

import { SIGN_IN_PATH } from "utils/constants";

export function PrivateRoute({
  isAuthenticated,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={SIGN_IN_PATH} />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};
