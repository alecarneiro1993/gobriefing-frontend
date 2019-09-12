// @flow

import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { map, isEmpty } from 'lodash';

import { routes } from './helpers';
import * as routeTypes from './components';
import * as pageComponents from '../pages';

type Props = {
  isAuthenticated: boolean
};

type State = {};

class AppRouter extends React.Component<Props, State> {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Router>
        {map(routes, ({
          route, key, component, ...routeProps
        }) => {
          const pageComponent = pageComponents[component];
          const Route = routeTypes[route];
          return (
            <Route
              {...routeProps}
              key={key}
              component={pageComponent}
              isAuthenticated={isAuthenticated}
            />
          );
        })}
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !isEmpty(state.session.token),
  };
}

export default connect(mapStateToProps)(AppRouter);
