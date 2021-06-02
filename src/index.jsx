import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';

render(
  <React.StrictMode>
    <Header />
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root'),
);
