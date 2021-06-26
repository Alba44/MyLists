import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './redux/configureStore';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';

const store = configureStore({});

render(
  <Provider store={store}>
    <Header />
    <Dashboard />
  </Provider>,
  document.getElementById('root'),
);
