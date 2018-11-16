import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from "./Container";
import GoldenLayout from 'golden-layout';

import "./css/Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  
  componentDidMount() {
    let myLayout = new GoldenLayout({
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
            props: { label: 'Widget C' }
          },{
            type:'react-component',
            component: 'test-component',
            props: { label: 'Widget D' }
          }]
        }, {
          type: 'column',
          content:[{
            type:'react-component',
            component: 'test-component',
            props: { label: 'Widget E' }
          },{
            type:'react-component',
            component: 'test-component',
            props: { label: 'Widget F' }
          }]
        }]
      }]
    }, window.document.getElementById("Dashboard"));
    
    window.React = React;
    window.ReactDOM = ReactDOM;
    myLayout.registerComponent( 'test-component', Container );
    myLayout.init();
  }

  render() {
    return (
      <div id="Dashboard" className="Dashboard"ref={this.myRef}/>
    );
  }
}

export default Dashboard;
