import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//Middleware needed to deal with async calls and functions
import thunkMiddleware from 'redux-thunk';

import { createLogger } from 'redux-logger';
import 'tachyons';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { requestRobots, searchRobots } from './reducers'

import './index.css';

const logger = createLogger();

//combined Reducers
const rootReducers = combineReducers({requestRobots, searchRobots});

// Combined Reducers and middleware added to the store
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
