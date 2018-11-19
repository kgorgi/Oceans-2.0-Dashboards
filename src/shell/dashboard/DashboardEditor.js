import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextWidget from "./widgets/TextWidget";
import GoldenLayout from 'golden-layout';

import "./css/DashboardEditor.css";
import ScalarWidget from './widgets/ScalarWidget';
import ImageWidget from './widgets/ImageWidget';
import BarChartWidget from './widgets/BarChartWidget';
import DonutChartWidget from './widgets/DonutChartWidget';

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
            type: "row",
            content: [{
              type:'react-component',
              title: "Wind Speed",
              component: 'scalar',
              props: { 
                title: "Wind Speed",
                units: "km/h",
                initValue: 30
              }
            },{
              type:'react-component',
              component: 'scalar',
              title: "Seafloor Temperature",
              props: { 
                title: "Seafloor Temperature",
                units: "C",
                initValue: 15
              }
            }]
          },{
            type:'react-component',
            title: "Bar Chart",
            component: 'barchart',
            props: null
          }]
        }, {
          type: 'column',
          content:[{
            type:'react-component',
            title: "Seafloor Images",
            component: 'image',
            props: null
          },{
            type:'react-component',
            title: "Donut Chart",
            component: 'donutchart',
            props: null
          }]
        }]
      }]
    }, window.document.getElementById("DashboardEditor-dashboard"));
    
    window.React = React;
    window.ReactDOM = ReactDOM;
    myLayout.registerComponent( 'text', TextWidget );
    myLayout.registerComponent( 'scalar', ScalarWidget );
    myLayout.registerComponent( 'image', ImageWidget);
    myLayout.registerComponent( 'barchart', BarChartWidget);
    myLayout.registerComponent( 'donutchart', DonutChartWidget);
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
