import React, { Component } from 'react';

import DashboardEditor from "./dashboard/DashboardEditor";
import Titlebar from "./Titlebar"

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titlebar /> 
        <DashboardEditor />
      </div> 
    );
  }
}

export default App;
