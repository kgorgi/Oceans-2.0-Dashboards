import React, { Component } from 'react';

import "./css/TemperatureWidget.css"

class TemperatureWidget extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 5 };
    }

    updateValue = () => {
        let newValue = Math.round(Math.random()*3);
        const direction = (Math.random()*100);

        if(direction > 50){
            newValue += this.state.value;
        } else {
            newValue = this.state.value - newValue;
        }

        this.setState({value: newValue});
    }
    
    render(){
        return (
            <h1 className="TemperatureWidget">
                Seafloor<br />
                Temperature: <br />
                {this.state.value} C
            </h1>
        )
    } 

    componentDidMount(){
        setInterval(this.updateValue, 4000);
    }

    
}

export default TemperatureWidget;