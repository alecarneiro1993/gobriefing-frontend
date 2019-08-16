import React from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';

export function PublicRoute({ isAuthenticated, isRestricted, ...props }) {
  if (isRestricted) {
    console.log(isRestricted);
    console.log(props.path);

    return isAuthenticated ? <Redirect to="/home" /> : <Route {...props} />;
  }
  return <Route {...props} />;
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
