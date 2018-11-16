import React, { Component } from 'react';

import Dashboard from "./dashboard/Dashboard";
import Titlebar from "./Titlebar"

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titlebar /> 
        <Dashboard />
      </div> 
    );
  }
}

export default App;
