import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextWidget from "./widgets/TextWidget";
import GoldenLayout from 'golden-layout';

import "./css/DashboardEditor.css";
import ScalarWidget from './widgets/ScalarWidget';
import ImageWidget from './widgets/ImageWidget';
import BarChartWidget from './widgets/BarChartWidget';
import DonutChartWidget from './widgets/DonutChartWidget';

import {
  SeafloorImagesConfig,
  SeafloorTempConfig, 
  WindSpeedConfig, 
  BarChartConfig, 
  DonutChartConfig
} from "./WidgetConfig";

class DashboardEditor extends Component {

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
            content: [ WindSpeedConfig ]
          }, BarChartConfig ]
        }, {
          type: 'column',
          content:[ SeafloorImagesConfig, DonutChartConfig]
        }]
      }]
    }, window.document.getElementById("DashboardEditor-dashboard"));
    
    window.React = React;
    window.ReactDOM = ReactDOM;

    myLayout.createDragSource(window.document.getElementById("windspeed"), WindSpeedConfig);
    myLayout.createDragSource(window.document.getElementById("seafloorTemp"), SeafloorTempConfig);
    myLayout.createDragSource(window.document.getElementById("barChart"), BarChartConfig);
    myLayout.createDragSource(window.document.getElementById("donutChart"), DonutChartConfig);
    myLayout.createDragSource(window.document.getElementById("seafloorImgs"), SeafloorImagesConfig);

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
          <div id="windspeed" className="DashboardEditor-widgetLibraryItem">Wind Speed</div>
          <div id="seafloorTemp" className="DashboardEditor-widgetLibraryItem">Seafloor Temperature</div>
          <div id="barChart" className="DashboardEditor-widgetLibraryItem">Bar Chart</div>
          <div id="donutChart" className="DashboardEditor-widgetLibraryItem">Donut Chart</div>
          <div id="seafloorImgs" className="DashboardEditor-widgetLibraryItem">Seafloor Images</div>
        </div>
        <div id="DashboardEditor-dashboard" className="DashboardEditor-dashboard" />
      </div>
      
    );
  }
}

export default DashboardEditor;
