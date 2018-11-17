import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from "./widgets/Container";
import GoldenLayout from 'golden-layout';

import "./css/DashboardEditor.css";
import TemperatureWidget from './widgets/TemperatureWidget';

class DashboardEditor extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  
  componentDidMount() {
    let myLayout = new GoldenLayout({
      settings:{
        hasHeaders: true,
        constrainDragToContainer: true,
        reorderEnabled: true,
        selectionEnabled: false,
        popoutWholeStack: false,
        blockedPopoutsThrowError: true,
        closePopoutsOnUnload: true,
        showPopoutIcon: false,
        showMaximiseIcon: false,
        showCloseIcon: true
    },
      content: [{
        type: 'row',
        content:[{
          type: 'column',
          content:[{
            type:'react-component',
            component: 'test-component',
            props: { label: 'Widget A' }
          },{
            type:'react-component',
            component: 'test-component',
            props: { label: 'Widget B' }
          }]
        }, {
          type: 'column',
          content:[{
            type:'react-component',
            component: 'test-component',
            props: { label: 'Widget E' }
          },{
            type:'react-component',
            component: 'temperature',
            props: null
          }]
        }]
      }]
    }, window.document.getElementById("DashboardEditor-dashboard"));
    
    window.React = React;
    window.ReactDOM = ReactDOM;
    myLayout.registerComponent( 'test-component', Container );
    myLayout.registerComponent( 'temperature', TemperatureWidget );
    myLayout.init();
  }

  render() {
    return (
      <div className="DashboardEditor">
        <div className="DashboardEditor-widgetLibrary">
          <div className="DashboardEditor-widgetLibraryTitle">Widget Library</div>
        </div>
        <div id="DashboardEditor-dashboard" className="DashboardEditor-dashboard" ref={this.myRef}/>
      </div>
      
    );
  }
}

export default DashboardEditor;
