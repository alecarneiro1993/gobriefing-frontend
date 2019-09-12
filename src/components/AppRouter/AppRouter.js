// @flow

import React from 'react';
import { withCookies } from 'react-cookie';
import { BrowserRouter as Router } from 'react-router-dom';
import { map, isEmpty } from 'lodash';

import { routes } from './helpers';
import * as routeTypes from './components';
import * as pageComponents from '../pages';

type Props = {
  isAuthenticated: boolean,
  cookies: Object
};

type State = {};

class AppRouter extends React.Component<Props, State> {
  render() {
    const { cookies } = this.props;
    const isAuthenticated = !isEmpty(cookies.get('token'));
    return (
      <Router>
        {map(routes, ({ route, key, component, ...routeProps }) => {
          const Page = pageComponents[component];
          const Route = routeTypes[route];
          return (
            <Route
              {...routeProps}
              cookies={cookies}
              key={key}
              component={Page}
              isAuthenticated={isAuthenticated}
            />
          );
        })}
      </Router>
    );
  }
}
export default withCookies(AppRouter);
