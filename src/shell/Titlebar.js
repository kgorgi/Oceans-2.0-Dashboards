import React, { Component } from 'react';

import "./css/Titlebar.css"

class Titlebar extends Component {
  render() {
    return (
      <div className="Titlebar">
        <img className="Titlebar-logo" src="./logo.png" />
        <h1 className="Titlebar-title">Oceans 2.0 Dashboards Prototype</h1>
      </div> 
    );
  }
}

export default Titlebar;
