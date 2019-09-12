import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { CookiesProvider } from 'react-cookie';
import * as reducers from 'reducers';
import 'normalize.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
import './index.css';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({ form: formReducer, ...reducers }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
