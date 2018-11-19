import React, { Component } from 'react';

import "./css/Titlebar.css"

class Titlebar extends Component {
  render() {
    return (
      <div className="Titlebar">
        <img className="Titlebar-logo" src="./logo.png" alt="Logo" />
        <h1 className="Titlebar-title">Oceans 2.0 Dashboards</h1>
      </div> 
    );
  }
}

export default Titlebar;
