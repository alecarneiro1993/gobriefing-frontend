import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { map } from "lodash";

import { routes } from "./helpers";
import * as routeTypes from "./components";
import * as pageComponents from "../pages";

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false };
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <Router>
        {map(routes, ({ route, key, component, ...routeProps }) => {
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

export default AppRouter;
