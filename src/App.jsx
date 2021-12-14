import React from 'react'
import './App.css';
import Dashboard from './containers/Dashboard/Dashboard'
import "antd/dist/antd.css";

import axios from 'axios'
import axiosCancel from 'axios-cancel';

axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
axios.defaults.accessControlAllowOrigin = "*";
axios.defaults.headers.common = {
  "Accept-Language": localStorage.getItem('language') ? localStorage.getItem('language') : 'en',
};

axiosCancel(axios, {
  debug: false // default
});

const App = () => {
  return (
    <div>
      <Dashboard />
    </div>
  )
}

export default App
