import React from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';

export function PrivateRoute({ isAuthenticated, ...props }) {
  return isAuthenticated ? <Route {...props} /> : <Redirect to="/sign_in" />;
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
