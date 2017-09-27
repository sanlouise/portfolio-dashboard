// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';

import registerServiceWorker from './registerServiceWorker';
import './assets/styles/base.scss';
import Main from './pages/Main';
import configureStore from './config/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
