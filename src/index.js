import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
/* We can also provide some initialState data as parameter
    to the configureStore function. eg.: configureStore(array[])
*/

//Provider helps to CONNECT (or relate) react with redux

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
