import React, { Component } from 'react';

import "./css/ScalarWidget.css"

class ScalarWidget extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.initValue };
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
            <h1 className="ScalarWidget">
                {this.props.title}: <br />
                {this.state.value} {this.props.units}
            </h1>
        )
    } 

    componentDidMount(){
        setInterval(this.updateValue, 4000);
    }
}

export default ScalarWidget;