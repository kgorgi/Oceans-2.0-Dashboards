export const WindSpeedConfig = {
    type: 'react-component',
    title: "Wind Speed",
    component: 'scalar',
    props: {
      title: "Wind Speed",
      units: "km/h",
      initValue: 30
    }
  };
  
export const SeafloorTempConfig = {
    type: 'react-component',
    component: 'scalar',
    title: "Seafloor Temperature",
    props: {
      title: "Seafloor Temperature",
      units: "C",
      initValue: 15
    }
  };
  
export const SeafloorImagesConfig = {
      type: 'react-component',
      title: "Seafloor Images",
      component: 'image',
      props: null
  };
  
export const BarChartConfig = {
    type: 'react-component',
    title: "Bar Chart",
    component: 'barchart',
    props: null
  };
  
export const DonutChartConfig = {
    type: 'react-component',
    title: "Donut Chart",
    component: 'donutchart',
    props: null
  };