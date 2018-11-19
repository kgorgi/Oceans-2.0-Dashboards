import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextWidget from "./widgets/TextWidget";
import GoldenLayout from 'golden-layout';

import "./css/DashboardEditor.css";
import ScalarWidget from './widgets/ScalarWidget';
import ImageWidget from './widgets/ImageWidget';
import BarChartWidget from './widgets/BarChartWidget';

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
            component: 'scalar',
            props: { 
              title: "Wind Speed",
              units: "km/h",
              initValue: 30
            }
          },{
            type:'react-component',
            component: 'barchart',
            props: null
          }]
        }, {
          type: 'column',
          content:[{
            type:'react-component',
            component: 'image',
            props: null
          },{
            type:'react-component',
            component: 'scalar',
            props: { 
              title: "Seafloor Temperature",
              units: "C",
              initValue: 15
            }
          }]
        }]
      }]
    }, window.document.getElementById("DashboardEditor-dashboard"));
    
    window.React = React;
    window.ReactDOM = ReactDOM;
    myLayout.registerComponent( 'test-component', TextWidget );
    myLayout.registerComponent( 'scalar', ScalarWidget );
    myLayout.registerComponent( 'image', ImageWidget);
    myLayout.registerComponent( 'barchart', BarChartWidget);
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
