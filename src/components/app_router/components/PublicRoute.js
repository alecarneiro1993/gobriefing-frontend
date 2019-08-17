import React from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';

export function PublicRoute({
  isAuthenticated, isRestricted, component: Component, ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated && isRestricted ? <Redirect to="/home" /> : <Component {...props} />)}
    />
  );
}

PublicRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isRestricted: PropTypes.bool.isRequired,
};

PublicRoute.defaultProps = {
  isAuthenticated: false,
};
